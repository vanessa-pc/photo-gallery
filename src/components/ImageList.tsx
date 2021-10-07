import React from "react";
import useFirestore from "../utils/useFirestore";

export default function ImageList({setSelectedImage}:{setSelectedImage:React.Dispatch<React.SetStateAction<string|undefined>>}):JSX.Element{

    const { docs } = useFirestore('images');
    console.log(docs)

    return(
        <div className="img-list">
            { docs && docs.map( (doc:any) => {
                return(
                    <div className="img" key={doc.id} 
                        onClick={() => setSelectedImage(doc.url)}>
                        <img src={doc.url} alt="small size" />
                    </div>
                )
            })}
        </div>
    )
}