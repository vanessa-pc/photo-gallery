import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadPhoto(): JSX.Element{
    
    const [image, setImage] = useState<File|undefined>(undefined)
    const [error, setError] = useState("")

    const success = (file: File) => {
        setImage(file)
        setError("")
    }
    const failure = () => {
        setImage(undefined) 
        alert("The file submitted is not an image!")
        setError("Please upload a file of type image.")
    }
    const uploadForm = (event: any) => {
        const fileSelected = event.target.files[0]
        console.log(fileSelected)

        return(fileSelected && fileSelected.type.includes("image/"))? success(fileSelected): failure()
    }
    

    return (
        <form >
            <label>
            <input type="file" onChange={uploadForm}/>
            <span>+</span>
            </label>
            <div className="upload-result">
                {error && <div className="error"> {error} </div> }
                {image && <div> {image.name} </div> }
                { image && <ProgressBar image={image} setImage={setImage}/>}
            </div>
        </form>
    )
}