import React from 'react';

import axios from 'axios';

import { Navbar, Container, Row, Col } from 'react-bootstrap';
import Form from './components/AddItem.js';
import Items from './components/Items.js';
// import { get } from 'mongoose';

// const axios = require('axios');

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      // formData: {}

    }
  }


  addItem = async (item) => {
    await axios.put(`${API_SERVER}/items/`, item);
    // const name = this.state.formData.name;
    // const description = this.state.formData.description;    
    this.getItems();
  }

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    this.setState( items );
  }

  async componentDidMount() {
    await this.getItems();
    console.log(this.state.items);
console.log(this.state.formData);


  }



  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">301 Final!</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col><h1>Our Items</h1></Col>
          </Row>
          <Row>
            <Col md="auto">
              <Form handleAddItem={this.addItem} />
            </Col>
            <Col>
              <Items itemsList={this.state.items} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}


export default App;
