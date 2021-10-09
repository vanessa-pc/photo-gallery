import React from "react";
import { motion } from "framer-motion";

export default function Modal({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string | undefined;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}): JSX.Element {
  const handleClick = (event: any) => {
    const backdrop = event.target.classList.contains("backdrop");
    const btn = event.target.classList.contains("deletebtn");
    return backdrop
      ? setSelectedImage(undefined)
      : btn
      ? setSelectedImage(undefined)
      : selectedImage;
  };

  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImage}
        alt=""
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
}
