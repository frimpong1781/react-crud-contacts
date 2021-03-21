import React from 'react';
import { compose } from 'redux';
import {connect} from 'react-redux';
import { firestoreConnect } from "react-redux-firebase";
import {Container, Row} from 'react-bootstrap';
import Contact from './Contact';

const Contacts = ({ firestoreData, requested, requesting, ...props }) => {
    let whatToDisplay;
    if (requesting) whatToDisplay = <p>Loading...</p>;
    else if (requested && firestoreData.length === 0)
      whatToDisplay = <p>No contacts added</p>;
    else if (requested && firestoreData.length > 0)
      whatToDisplay = firestoreData.map((contact) => {
        return <Contact contactInfo={contact} key={contact.id} editContact={props.editContact} />
      });

    return (
        <Container>
            <Row>{whatToDisplay}</Row>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    contactsData: state.contactsState.contacts,
    firestoreData: state.firestore.ordered.contacts,
    requesting: state.firestore.status.requesting.contacts,
    requested: state.firestore.status.requested.contacts,
  });

  export default compose(
    connect(mapStateToProps),
    firestoreConnect(["contacts"])
  )(Contacts);

