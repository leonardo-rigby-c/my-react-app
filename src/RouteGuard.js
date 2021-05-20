import React from 'react';
import { Route, Redirect } from "react-router-dom";

const RouteGuard = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth != null
            ? <Component {...props} />
            : <Redirect to='/login' />

    )} />
)

export default RouteGuard;