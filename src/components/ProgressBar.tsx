import React, { useEffect } from "react";
import useStorage from "../utils/useStorage";
import { motion } from "framer-motion";

export default function ProgressBar({
  image,
  setImage,
}: {
  image: File;
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}): JSX.Element {
  const { url, progress } = useStorage(image);
  console.log(progress, url);

  useEffect(() => {
    if (url) setImage(undefined);
  }, [url, setImage]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
}
