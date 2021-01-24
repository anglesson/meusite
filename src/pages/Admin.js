import React from 'react';
import './Admin.css';

import { 
  Nav, 
  Navbar, 
  NavDropdown, 
  Form, 
  FormControl, 
  Button, 
  Container, 
  Row, 
  Col, 
  Tabs, 
  Tab, Card 
} from 'react-bootstrap';

const Admin = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Meu Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container className="container-admin">
        <Row>
          <Col className="border-red">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Site">
                <p>Configure a aparência do site</p>
                <Card>
                  <Card.Header>Avatar</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Tab>
              <Tab eventKey="profile" title="Links">
                <p>Teste Tab Profile</p>
              </Tab>
              <Tab eventKey="contact" title="Estatística">
                <p>Teste Tab Contact</p>
              </Tab>
            </Tabs>
          </Col>
          <Col className="border-red">
            <div className="frame-container">
              <div className="frame-content">
                <iframe className="frame-preview" frameborder="0" width="100px" height="400px" >

                </iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;