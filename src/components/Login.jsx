import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import { loginUser } from '../actions/authActions';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.login(this.state.email, this.state.password)
        this.setState({
            email: "",
            password: "",
        });
    };

    render() {
        const { email, password } = this.state;
        const { auth } = this.props;

        if (auth.isLoaded && !auth.isEmpty) {
            return <Redirect to="/" />;
        }
        return (
            <div style={{width: "40%", margin: "auto", marginTop: "60px" }}>
                <h1>Login Here</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.firebase.auth,
})

const mapDispatchToProps = {
    login: loginUser
};

export default connect(mapStateToProps, mapDispatchToProps) (Login);


