import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import Button from "react-bootstrap/Button";

export const Customers = () => {
  return (
    <div>
      <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
        <Row className="mb-4 text-center">
          <div className="p-4">
            <h2
              style={{
                fontSize: "50px",
                lineHeight: "75px",
                fontWeight: "800",
                color: "black",
              }}
            >
              Check Out These{" "}
              <span
                style={{
                  WebkitTextStroke: "1px black",
                  color: "transparent",
                  lineHeight: "55px",
                  textShadow: "-7px 2px 4px rgba(255, 229, 0, 1)",
                }}
              >
                Customers
              </span>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: " rgba(105, 105, 105, 1)",
                width: "945px",
              }}
            >
              Companies big and small love digital business cards. We have
              onboarded over 25,000 teams including international banks,
              construction companies, retail, roofing, plumbing, marketing
              agencies, hospitals and many more.
            </p>
          </div>
        </Row>

        <Row className="text-center">
          <div>
            <BsArrowLeftCircleFill
              className="arrow-left"
              style={{ width: "3rem" }}
            />
            <img src="./image 118.png" alt="card image" />
            <BsArrowRightCircleFill
              className="arrow-right"
              style={{ width: "3rem" }}
            />
          </div>
          <div>
            <Form>
              <Row className="d-flex flex-row">
                <Col>
                  <Button style={{ textTransform: "none", padding: "0" }}>
                    Front/Back
                  </Button>
                </Col>
                <Col>
                  <Button
                    style={{
                      textTransform: "none",
                      background: "white",
                      color: "black",
                      textShadow: "0px #ccc",
                      border: "1px solid black",
                    }}
                  >
                    Design My Own
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Row>
      </Container>
    </div>
  );
};
