import { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { projectAuth } from "../firebase/config";
import { AuthContext } from "./Authorization";

// eslint-disable-next-line react/prop-types
function Signin({ history }) {
  const handleSignin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await projectAuth.signInWithEmailAndPassword(
          email.value,
          password.value
        );
        // eslint-disable-next-line react/prop-types
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  let user;
  if (useContext(AuthContext) === null) {
    user = null;
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    ({ user } = useContext(AuthContext));
  }
  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signin-div">
      <h2> Please log in below </h2>
      <form className="signin-form" onSubmit={handleSignin}>
        <label>
          Email:
          <input type="text" name="email" placeholder="yourname@email.com" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="password" />
        </label>
        <button className="submit-signup" type="submit">
          Sign In
        </button>
      </form>
      <p>Don't have an accout? Click below to sign up!</p>
      <Link to="/signup">
        <button className="signup"> Sign up </button>{" "}
      </Link>
    </div>
  );
}

export default withRouter(Signin);
