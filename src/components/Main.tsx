import { useState } from "react";
import ImageList from "./ImageList";
import { Intro } from "./Intro";
import Modal from "./Modal";
import UploadPhoto from "./UploadPhoto";


function Main(): JSX.Element {
  const [selectedImage, setSelectedImage] =useState<string|undefined>(undefined)
  
   return (
     <>
    <div className="App">
    <Intro/> 
    <UploadPhoto />
    <ImageList setSelectedImage={setSelectedImage}/>
    { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
    </>
  );
}

export default Main;