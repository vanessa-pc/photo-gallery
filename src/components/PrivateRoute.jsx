import React, { useContext } from "react";
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from "./Authorization";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({component: RouteComponent, ...rest}) =>{
    const {user} = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps => 
            !user ? (
                <RouteComponent {...routeProps} />
            ): (
                <Redirect to={"/signin"} />
            )}
        />
    );
}

export default PrivateRoute;