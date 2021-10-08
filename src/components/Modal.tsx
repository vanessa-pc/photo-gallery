import React from "react";
import { motion } from "framer-motion";

import useStorage from "../utils/useStorage";
import { projectFirestore } from "../firebase/config";

export default function Modal({selectedImage, setSelectedImage}:{selectedImage: string|undefined; setSelectedImage: React.Dispatch<React.SetStateAction<string | undefined>>}):JSX.Element{
    
    const handleClick = (event:any) => {
      return (event.target.classList.contains('backdrop'))? setSelectedImage(undefined): selectedImage
    }

    return(
        <motion.div className="backdrop" onClick={handleClick}
          initial={{opacity:0}}
          animate={{opacity:1}}
          >
            <motion.img src={selectedImage} alt="enlarged size" 
              initial={{y: "-100vh"}}
              animate={{y: 0}}
              />
        </motion.div>
    )
}