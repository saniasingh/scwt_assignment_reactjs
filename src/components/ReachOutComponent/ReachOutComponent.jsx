import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./reachOut.css";

export const ReachOutComponent = () => {
  return (
    <div>
      <Container className="justify-content-center align-items-center">
        <section className="main text-center align-content-center">
          <Form>
            <Row>
              <Col xs="auto" md={6}>
                <h3
                  style={{
                    fontFamily: "Urbanist",
                    fontSize: "50px",
                    lineHeight: "75px",
                    fontWeight: "800",
                    color: "black",
                    margin: "0",
                  }}
                >
                  Reach Out And Connect
                </h3>
                <p
                  className="description"
                  style={{
                    textAlign: "left",
                    color: "black",
                    fontSize: "18px",
                    margin: "10px 10px 10px 56px",
                  }}
                >
                  Have something on mind? Drop us a message and we'll get back
                  to you as soon as possible.
                </p>
              </Col>
              <Col xs="auto" md={6} className="text-right">
                <Button type="submit" variant="dark" className="btn">
                  Get In Touch
                </Button>
              </Col>
            </Row>
          </Form>
        </section>
      </Container>
    </div>
  );
};