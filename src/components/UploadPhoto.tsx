import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

export default function UploadPhoto(): JSX.Element{
    
    const [image, setImage] = useState<File|null>(null)
    const [error, setError] = useState("")

    const success = (file: File) => {
        setImage(file)
        setError("")
    }
    const failure = () => {
        setImage(null) 
        alert("The file submitted is not an image!")
        setError("Please upload a file of type image.")
    }
    const uploadForm = (event: any) => {
        const fileSelected = event.target.files[0]
        console.log(fileSelected)

        return(fileSelected && fileSelected.type.includes("image/"))? success(fileSelected): failure()
    }
    

    return (
        <form action="">
            <input type="file" onChange={uploadForm}/>
            <div className="upload-result">
                {error && <div className="error"> {error} </div> }
                {image && <div className="success"> {image.name} </div> }
                { image && <ProgressBar image={image} setImage={setImage}/>}
            </div>
        </form>
    )
}