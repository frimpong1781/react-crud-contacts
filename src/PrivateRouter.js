import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, auth, ...rest}) => {
    return (
        <Route 
            {...rest} 
            render={(props) => 
                auth.isLoaded && !auth.isEmpty ? (
                    <Component {...rest} />
                ) : (
                    <Redirect  
                       to={{pathname: "login", state: {from: props.location}}}
                    />
                ) 
            } 
        />        
    );
};

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
})
export default connect(mapStateToProps) (PrivateRoute);
