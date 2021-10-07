import React from "react";

export default function Modal({selectedImage, setSelectedImage}:{selectedImage: string|undefined; setSelectedImage: React.Dispatch<React.SetStateAction<string | undefined>>}):JSX.Element{
    
    const handleClick = (event:any) => {
        
        return (event.target.classList.contains('backdrop'))? setSelectedImage(undefined): selectedImage
    }
    
    return(
        <div className="backdrop" onClick={handleClick}>
            <img src={selectedImage} alt="enlarged size" />
        </div>
    )
}