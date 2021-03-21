import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Form, Button} from 'react-bootstrap';
import { signupUser} from '../actions/authActions';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name] : e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.signup(this.state)
        this.setState({
            username: "",
            email: "",
            password: "",
        });
    };

    render() {
        const {username, email, password} = this.state;
        return (
            <div style={{width: "40%", margin: "auto", marginTop: "60px" }}>
                <h1>Signup Here</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter user name" name="username" value={username} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Signup
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = {
    signup: signupUser
};

export default connect(null, mapDispatchToProps) (Signup);


