import { useState } from "react";
import ImageList from "./components/ImageList";
import { Intro } from "./components/Intro";
import Modal from "./components/Modal";
import UploadPhoto from "./components/UploadPhoto";

function App(): JSX.Element {
  const [selectedImage, setSelectedImage] =useState<string|undefined>(undefined)

  return (
    <div className="App">
    <Intro/>
    <UploadPhoto />
    <ImageList setSelectedImage={setSelectedImage}/>
    { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default App;
