import React from 'react';
import {connect} from 'react-redux';
import {Container, Row} from 'react-bootstrap';
import Contact from './Contact';

const Contacts = (props) => {
    return (
        <Container>
            <Row>
                {props.contactsData.map((contact) => {
                    return (
                        <Contact 
                          contactInfo={contact} 
                          key={contact.id} 
                          deleteContact={props.deleteContact} 
                          editContact={props.editContact}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    contactsData: state.contactsState.contacts
})
export default connect(mapStateToProps) (Contacts);
