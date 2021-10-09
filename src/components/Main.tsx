import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { projectAuth } from "../firebase/config";
import { AuthContext } from "./Authorization";
import ImageList from "./ImageList";
import { Intro } from "./Intro";
import Modal from "./Modal";
import UploadPhoto from "./UploadPhoto";



function Main(): JSX.Element {
  const [selectedImage, setSelectedImage] =useState<string|undefined>(undefined)
  
  const user = useContext(AuthContext)
   return (
    <div className="App">
    <Intro/>
    {user && <div className="welcome">
      Welcome, {user.displayName || "user"}! 
      <small>{user.email}</small>
      </div>}
 
    <Link to="/signin"><button className="sing-out" onClick={()=> projectAuth.signOut()}> Sign out</button> </Link>
    <UploadPhoto />
    <ImageList setSelectedImage={setSelectedImage}/>
    { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
    </div>
  );
}

export default Main;