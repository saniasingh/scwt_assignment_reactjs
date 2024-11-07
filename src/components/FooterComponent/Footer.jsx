import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MDBIcon } from "mdb-react-ui-kit";
import "./footer.css";

export const Footer = () => {
  return (
    <div>
      <Container className="container">
        <Form>
          <Row>
            <Col xs="auto" md={4}>
              <img
                src="onetaag_logo 1.png"
                width={"100px"}
                height={"106px"}
                alt="logo"
              />
              <p style={{ margin: "10px 10px 10px 0px", lineHeight: "36px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
              </p>
              <div style={{ marginBottom: "20px" }}>
                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="facebook" />
                </a>

                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="instagram" />
                </a>

                <a href="" className="me-4 text-reset">
                  <MDBIcon fab icon="telegram" />
                </a>
              </div>
            </Col>
            <Col xs="auto" md={4}>
              <h3
                style={{
                  
                }}
              >
                Quick Nav
              </h3>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Features
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Why Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Testimonials
                </a>
              </p>
            </Col>
            <Col xs="auto" md={4}>
              <h3
                style={{
                  margin: "32px 0",
                  fontFamily: "Urbanist",
                  fontSize: "28px",
                  fontWeight: "800",
                  lineHeight: "33.6px",
                  textAlign: "left",
                }}
              >
                Solution
              </h3>
              <p>
                <a href="#!" className="text-reset">
                  <MDBIcon fas icon="location-arrow" />
                  <span> 918 Abner Road, Hudson</span>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <MDBIcon fas icon="envelope" />
                  <span> example@mail.com</span>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <MDBIcon fas icon="phone" />
                  <span> +1234567890</span>
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  <MDBIcon fas icon="clock" />
                  <span> 07.00 AM - 23.00 PM</span>
                </a>
              </p>
            </Col>
          </Row>
        </Form>

        <section className="text-center p-4 border-top">
          <div style={{ fontFamily: "poppins" }}>
            <span className="top-border"></span>
            <span style={{ fontSize: "14px" }}>
              Copyright 2024 © Onetaag. All rights reserved. | Terms And
              Conditions | Privacy Policy{" "}
            </span>
          </div>
        </section>
      </Container>
    </div>
  );
};
