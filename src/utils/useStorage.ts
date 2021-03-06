import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timestamp,
} from "../firebase/config";

const useStorage = (image: any) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [url, setUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    //references
    const storageRef = projectStorage.ref(image.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(image).on(
      "state_changed",
      (snap: any) => {
        const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err: Error) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        collectionRef.add({ url, createdAt: timestamp() });
        setUrl(url);
      }
    );
  }, [image]);

  return { progress, url, error };
};

export default useStorage;
