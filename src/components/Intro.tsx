import swal from "sweetalert";

export function Intro(): JSX.Element {
    // const signIn = () => {
    //     swal("Signed in successfully!")
    // }
    return (
        <div className="intro">
            {/* {signIn()} */}
            <h1> ShutterUp!</h1>
            <h2>Snap your shots: </h2>
            <p>Check out below the testaments to why you are the best photographer you can be</p>
        </div>
    );
  }