import React, { useEffect } from "react";
import useStorage from "../utils/useStorage";

export default function ProgressBar({image, setImage}:{image: File; setImage: React.Dispatch<React.SetStateAction<File | null>>}):JSX.Element{
    
    const {url, progress} = useStorage(image)
    console.log(progress, url);

    useEffect( ()=> {
        if (url) setImage(null)
    }, [url, setImage])

    return(
        <div className="progress-bar" style={{width: progress+ '%'}}></div>
    )
}