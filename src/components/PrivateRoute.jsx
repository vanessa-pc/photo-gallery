import { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from "./Authorization";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({component: RouteComponent, ...rest}) =>{
    
    let user;
    if (useContext(AuthContext) === null){
        user = null
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        user = {user} = useContext(AuthContext) 
    }
    return (
        <Route
            {...rest}
            render={routeProps => 
            // eslint-disable-next-line no-extra-boolean-cast
            !!user ? (
                <RouteComponent {...routeProps} />
            ): (
                <Redirect to={"/signin"} />
            )}
        />
    );
}

export default PrivateRoute;