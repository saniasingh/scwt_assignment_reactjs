import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";
import AppButton from "../AppButton/AppButton";

import "./reachOut.css";

export const ReachOutComponent = () => {
  return (
    <div>
      <Container className="justify-content-center align-items-center">
        <section
          style={{
            background: "rgba(255, 229, 0 ,1)",
            borderRadius: "20px",
            margin: "30px 0 100px 0",
            padding: "50px",

          }}
        >
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
                    fontFamily: "Urbanist",
                    textAlign: "left",
                    color: "black",
                    fontSize: "18px",
                    // margin: "10px 10px 10px 56px",
                  }}
                >
                  Have something on mind? Drop us a message and we'll get back
                  to you as soon as possible.
                </p>
              </Col>
              <Col xs="auto" md={6} className="text-right">
                <AppButton type="submit" variant="dark" style={{margin: "40px 0 0 380px", textTransform: "none", fontSize: "16px"}}>
                  Get In Touch
                </AppButton>
              </Col>
            </Row>
          </Form>
        </section>
      </Container>
    </div>
  );
};
