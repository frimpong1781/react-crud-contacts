import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'

class EditContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // first_name: props.contactInfo.first_name,
            last_name: props.contactInfo.last_name,
            middle_name: props.contactInfo.middle_name,
            phone_number: props.contactInfo.phone_number,
            address: props.contactInfo.address,
            email: props.contactInfo.email,
            type: props.contactInfo.type,
            id: props.contactInfo.id,
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
        this.props.editContact(this.state.id, this.state)
        this.setState({
            first_name: "",
            last_name: "",
            middle_name: "",
            phone_number: "",
            address: "",
            email: "",
            type: ""
        })
        this.props.closeModal()
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter middle name" name="middle_name" value={this.state.middle_name} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter phone number" name="phone_number" value={this.state.phone_number} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Postal Address</Form.Label>
                    <Form.Control type="textarea" placeholder="Enter address" name="address" value={this.state.address} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Contact Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter type" name="type" value={this.state.type} onChange={this.handleChange} />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Edit Contact
                </Button>
            </Form>
        );
    }
}

export default EditContactForm;
