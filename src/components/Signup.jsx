import { useCallback } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { projectAuth } from "../firebase/config";

// eslint-disable-next-line react/prop-types
function Signup({ history }) {
    const handleSignup = useCallback ( async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await projectAuth.createUserWithEmailAndPassword(email.value, password.value);
            // eslint-disable-next-line react/prop-types
            history.push("/");
        } catch (err){
            alert(err);
        }
    }, [history]);

    return(
        <div className="singup-div">
            <h2 className="create-account"> Please create an account to access the page</h2>
            <p>Already have an accout? Click below to log in!</p>
            <Link to="/signin"><button className="login"> Login </button> </ Link>
            <form className="signup-form" onSubmit={handleSignup}>
                <label>
                    Email:
                    <input type="text" name="email" placeholder="yourname@email.com"/>
                </label>
                <label>
                    Password
                    <input type="password" name="password" placeholder="password" />
                </label>
                <button className="submit-signup" type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default withRouter(Signup);