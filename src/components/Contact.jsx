import React, {useState} from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteContact} from '../actions/contactsActions';
import EditContactForm from './EditContactForm';

const Contact = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = (e) => {
        e.preventDefault();
        props.removeContact(props.contactInfo.id);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditContactForm contactInfo={props.contactInfo} closeModal={handleClose} />
                </Modal.Body>
            </Modal>

            <Col md="4" style={{ marginBottom: "1rem" }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">
                            Contact Name
                        </Card.Subtitle>
                        <Card.Title>{ props.contactInfo.first_name } {props.contactInfo.last_name} {props.contactInfo.middle_name}</Card.Title>
                        <Card.Text>
                            <p>Phone Number: {props.contactInfo.phone_number}</p>
                            <p>Postal Address: {props.contactInfo.address}</p>
                            <p>Email: {props.contactInfo.email}</p>
                            <p>Contact Type: {props.contactInfo.type}</p>
                        </Card.Text>
                        <Card.Link href="#" onClick={handleShow}>Edit Contact</Card.Link>
                        <Card.Link href="#">
                            <Button variant="danger" size="sm" onClick={handleDelete}>Delete Contact</Button>
                        </Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

const mapDispatchToProps = {
    removeContact: deleteContact
}

export default connect(null, mapDispatchToProps) (Contact);
