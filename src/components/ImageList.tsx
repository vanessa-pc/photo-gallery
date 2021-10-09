import React from "react";
import useFirestore from "../utils/useFirestore";
import { motion } from "framer-motion";
import { projectFirestore } from "../firebase/config";

export default function ImageList({
  setSelectedImage,
}: {
  setSelectedImage: React.Dispatch<React.SetStateAction<string | undefined>>;
}): JSX.Element {
  const { docs } = useFirestore("images");
  console.log(docs);

  const handleDelete = (id: any) => {
    return projectFirestore.collection("images").doc(id).delete();
  };

  return (
    <div className="img-list">
      {docs &&
        docs.map((doc: any) => {
          return (
            <>
              <motion.div
                className="img"
                key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedImage(doc.url)}
              >
                <motion.img
                  src={doc.url}
                  alt=""
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
                <motion.button
                  className="deletebtn"
                  onClick={() => handleDelete(doc.id)}
                >
                  Delete
                </motion.button>
              </motion.div>
            </>
          );
        })}
    </div>
  );
}
