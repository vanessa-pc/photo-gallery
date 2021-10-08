import Main from "./components/Main";
import {BrowserRouter as Router , Route } from 'react-router-dom'
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { AuthProvider } from "./components/Authorization";
import PrivateRoute from "./components/PrivateRoute";

function App(): JSX.Element {

  return (
    <AuthProvider>
    <Router>
      <div>
        <PrivateRoute exact path="/" component={Main}  />
        <Route exact path="/signin" component={Signin}  />
        <Route exact path="/signup" component={Signup}  />
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
