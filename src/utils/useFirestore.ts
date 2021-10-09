import { useState, useEffect, SetStateAction } from "react";
import { projectFirestore } from "../firebase/config";

export default function useFirestore(collection: string) {
  const [docs, setDocs] = useState<Array<unknown>>([]);

  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        const documents: any[] = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsub();
  }, [collection]);

  return { docs };
}
