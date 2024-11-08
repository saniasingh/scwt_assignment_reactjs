// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./navbar.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import React from "react";

export const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="onetaag_logo 1.png"
            width={"70px"}
            height={"70px"}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-4">
            <Nav.Link
              href="#home"
              className="me-4"
              style={{ margin: "0 8px" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#home"
              className="me-4"
              style={{ margin: "0 8px" }}
            >
              For Team
            </Nav.Link>
            <Nav.Link
              href="#home"
              className="me-4 fw-bold"
              style={{ margin: "0 8px" }}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="#home"
              className="me-4 fw-bold"
              style={{ margin: "0 8px" }}
            >
              Why Us
            </Nav.Link>
            <Nav.Link
              href="#home"
              className="me-4 fw-bold"
              style={{ margin: "0 22px" }}
            >
              Share
            </Nav.Link>
            <Nav.Link
              href="#home"
              className="me-4 fw-bold"
              style={{ margin: "0 22px" }}
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              href="#home"
              className="me-4 fw-bold"
              style={{ margin: "0 22px" }}
            >
              Testimonials
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form>
          <Row>
            <Col xs="auto" md={6}>
              <Button
                type="submit"
                variant="dark"
                style={{
                  textTransform: "none",
                  fontSize: "15px",
                  lineHeight: "20px",
                }}
              >
                Login
              </Button>
            </Col>
            <Col xs="auto" md={4}>
              <Button
                type="submit"
                variant="dark"
                style={{
                  width: "172px",
                  fontSize: "14px",
                  padding: "0 20px",
                  textTransform: "none",
                  lineHeight: "20px",
                  padding: "0px",
                }}
              >
                Onetaag for Teams
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
};
