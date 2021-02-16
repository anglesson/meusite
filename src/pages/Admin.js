import React from 'react';
import './Admin.css';
import Avatar from '../components/Avatar/Avatar';

import avatar from '../assets/img/avatar.jpg';

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
  Tab,
  Card,
  InputGroup
} from 'react-bootstrap';

const Admin = () => {
  const handleAppear = (event) => {
    event.preventDefault();
  }
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
        </Navbar.Collapse>
      </Navbar>
      <Container className="container-admin">
        <Row>
          <Col>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Site">
                <Container>
                  <Card.Body style={{ textAlign: "initial" }}>
                    <Form onSubmit={handleAppear}>
                      <label>Avatar</label>
                      <Row>
                        <Col>
                          <Avatar avatar={avatar} />
                        </Col>
                      </Row>
                      <label htmlFor="basic-url">Seu link</label>
                      <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                          <InputGroup.Text id="basic-addon3">
                            https://meusite.in/
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl id="basic-url" aria-describedby="basic-addon3" />
                      </InputGroup>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" placeholder="Título" />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmal" >
                        <Form.Label forHtml="back_color" >Fundo</Form.Label>s
                        <Form.Control id="back_color" type="color" placeholder="Nome" />
                      </Form.Group>
                      <Form.Group className="align-items-right">
                        <Button type="submit">Salvar</Button>
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Container>
              </Tab>
              <Tab eventKey="profile" title="Links">
                <p>Teste Tab Profile</p>
              </Tab>
              <Tab eventKey="contact" title="Estatística">
                <p>Teste Tab Contact</p>
              </Tab>
            </Tabs>
          </Col>
          <Col>
            <Container>
              <Row className="justify-content-md-center">
                <div className="frame-container">
                  <div className="frame-content">
                    <iframe title="MeuSiteFrame" className="frame-preview" src="/anglesson" frameborder="0" width="100px" height="400px" >
                    </iframe>
                  </div>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;