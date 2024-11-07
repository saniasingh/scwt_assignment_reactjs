import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export const Teams = () => {
  return (
    <div>
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ margin: "80px auto" }}
      >
        <Form>
          <Row className="d-flex flex-row">
            <Col style={{ margin: "0 310px 200px 0" }}>
              <div
                style={{
                  background:
                    "linear-gradient(110.97deg, #FFE500 -32.84%, #9702FA 109.18%)",
                  width: "351px",
                  height: "543px",
                  borderRadius: "39px",
                  opacity: "30%",
                }}
              ></div>
              <img
                src="./Group 47908.png"
                style={{ position: "absolute", top: "310px" }}
              />
            </Col>
            <Col>
              <p style={{ fontSize: "36px", lineHeight: "55px" }}>For Teams</p>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  lineHeight: "55px",
                }}
              >
                The #1 Platform for Teams,
                <span
                  style={{
                    display: "block",
                    WebkitTextStroke: "1px black",
                    color: "transparent",
                    lineHeight: "55px",
                    textShadow: "-7px 2px 4px rgba(255, 229, 0, 1)",
                  }}
                >
                  SMBs & Enterprises
                </span>
              </p>
              <p
                style={{
                  width: "551px",
                  height: "216px",
                  color: "rgba(105, 105, 105, 1)",
                  lineHeight: "36px",
                  fontSize: "18px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <Button>Read More</Button>
            </Col>
          </Row>
          <Row className="d-flex flex-row">
            <Col>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  lineHeight: "55px",
                }}
              >
                Measure, Monitor, and Manage
                <span
                  style={{
                    display: "block",
                    WebkitTextStroke: "1px black",
                    color: "transparent",
                    lineHeight: "55px",
                    textShadow: "-7px 2px 4px rgba(255, 229, 0, 1)",
                  }}
                >
                  Your Teams
                </span>
              </p>
              <Row>
                <Col>
                  <img
                    src="./Group.png"
                    alt="Logo"
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "2px 0px"
                    }}
                  />
                </Col>
                <Col>
                  <Row>Admin Control Panel</Row>
                  <Row>
                    Sed amet eveniet quo nihil autem ea odio officia. inventore
                    voluptatem
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col>
              <div
                style={{
                  background:
                    "linear-gradient(110.97deg, #FFE500 -32.84%, #9702FA 109.18%)",
                  transform: "rotate(180deg)",
                  transition: "transform 0.5s ease",
                  width: "351px",
                  height: "543px",
                  borderRadius: "39px",
                  opacity: "30%",
                  marginLeft: "32%",
                }}
              ></div>
              <img
                src="./Group 47911.png"
                style={{ position: "absolute", top: "1060px" }}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
