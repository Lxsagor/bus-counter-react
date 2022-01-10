import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ component, ...rest }) => {
    const routeComponent = (props) => {
        return React.createElement(component, props);
    };
    return <Route {...rest} render={routeComponent} />;
};
export default PublicRoute;
