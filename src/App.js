import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Container, Row, Col } from 'react-bootstrap';
import Contacts from './components/Contacts';
import AddContactForm from './components/AddContactForm';
import { logoutUser } from './actions/authActions';
import {connect} from 'react-redux';

class App extends Component {

  render() {
  return (
    <>
      <Container fluid style={{marginTop: "2rem"}}>
        <Row>
          <Col md="4">
            <h4>Add Contact</h4>
            <br/>
            <AddContactForm addContact={this.addNewContact} />
          </Col>
          <Col>
          <h4>All Contacts</h4>
          <button 
            className="btn btn-warning"
            onClick={() => this.props.logoutUser()}>Logout</button>
          <br/><br />
            <Contacts
              deleteContact={this.deleteContact} 
              editContact={this.editContact} 
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
}

export default connect(null, { logoutUser }) (App);
