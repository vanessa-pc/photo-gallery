import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { projectAuth } from "../firebase/config";
import { AuthContext } from "./Authorization";

export function Intro(): JSX.Element {
  // const signIn = () => {
  //     swal("Signed in successfully!")
  // }
  const signOut = () => {
    projectAuth.signOut();
    swal("Signed out successfully!", "Going back to the login page", "success");
  };
  const user = useContext(AuthContext);
  return (
    <div className="intro">
      {/* {signIn()} */}
      {user && (
        <div className="welcome">
          <h1> ShutterUp!</h1>
          <div className="user-name">
            Welcome, {user.displayName || "user"}!{" "}
          </div>
          <div className="user-email">{user.email}</div>
          <Link to="/signin" className="signout-link">
            <button className="sing-out-btn" onClick={signOut}>
              {" "}
              Sign out
            </button>{" "}
          </Link>
        </div>
      )}
      <h2>Snap your shots </h2>
      <p>
        {" "}
        Click the 'plus' icon below to upload your captures as you go through
        this life and show yourself and your friends the testaments to why you
        are the best photographer you can be!
      </p>
    </div>
  );
}
