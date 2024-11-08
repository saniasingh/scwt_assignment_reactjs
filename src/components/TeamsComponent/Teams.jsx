import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AppButton from "../AppButton/AppButton";

export const Teams = () => {
  return (
    <div>
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ margin: "80px auto" }}
      >
        <Form>
          <Row className="d-flex flex-row">
            <Col style={{ margin: "0 90px 100px 0", position: "relative" }}>
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
                style={{ position: "absolute", top: "70px" }}
              />
            </Col>
            <Col style={{ margin: "60px" }}>
              <p
                style={{
                  fontSize: "36px",
                  lineHeight: "55px",
                  fontFamily: "Urbanist",
                }}
              >
                For Teams
              </p>
              <p
                style={{
                  fontFamily: "Urbanist",
                  fontSize: "36px",
                  fontWeight: "800",
                  lineHeight: "55px",
                }}
              >
                The #1 Platform for Teams,
                <span
                  style={{
                    fontFamily: "Urbanist",

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
                  fontFamily: "Inter",
                  width: "551px",
                  height: "150px",
                  color: "rgba(105, 105, 105, 1)",
                  lineHeight: "34px",
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
              <AppButton style={{ fontSize: "16px" }}>Read More</AppButton>
            </Col>
          </Row>
          <Row className="d-flex flex-row">
            <Col style={{ marginTop: "60px" }}>
              <p
                style={{
                  fontFamily: "Urbanist",
                  fontSize: "36px",
                  fontWeight: "800",
                  lineHeight: "55px",
                }}
              >
                Measure, Monitor, and Manage
                <span
                  style={{
                    fontFamily: "Urbanist",

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
              <Row style={{ margin: "10px 0" }}>
                <Col className="py-1">
                  <img
                    src="./admin_control.png"
                    alt="Logo"
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "2px 0px",
                    }}
                  />
                </Col>

                <Col md={10}>
                  <Row
                    style={{
                      fontFamily: "Urbanist",

                      margin: "8px 0",
                      color: "black",
                      fontSize: "22px",
                      fontWeight: "800",
                      lineHeight: "20px",
                    }}
                  >
                    Admin Control Panel
                  </Row>

                  <Row
                    style={{
                      fontFamily: "Urbanist",

                      margin: "8px 0",

                      color: "rgba(105, 105, 105, 1)",
                      fontSize: "16px",
                      fontWeight: "00",
                      lineHeight: "22px",
                    }}
                  >
                    Sed amet eveniet quo nihil autem ea odio officia. inventore
                    voluptatem
                  </Row>
                </Col>
              </Row>
              <Row style={{ margin: "10px 0" }}>
                <Col className="py-1">
                  <img
                    src="./track_performance.png"
                    alt="Logo"
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "2px 0px",
                    }}
                  />
                </Col>
                <Col md={10}>
                  <Row
                    style={{
                      fontFamily: "Urbanist",

                      margin: "8px 0",
                      color: "black",
                      fontSize: "22px",
                      fontWeight: "800",
                      lineHeight: "20px",
                    }}
                  >
                    Track performance Metrics
                  </Row>

                  <Row
                    style={{
                      fontFamily: "Urbanist",

                      margin: "8px 0",
                      color: "rgba(105, 105, 105, 1)",
                      fontSize: "16px",
                      fontWeight: "00",
                      lineHeight: "22px",
                    }}
                  >
                    Qui corrupti debitis aut rerum doloremque qui consequatur
                    dolore
                  </Row>
                </Col>
              </Row>
              <Row style={{ margin: "10px 0" }}>
                <Col className="py-1">
                  <img
                    src="./filler_logo.png"
                    alt="Logo"
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "2px 0px",
                    }}
                  />
                </Col>
                <Col md={10}>
                  <Row
                    style={{
                      margin: "8px 0",
                      fontFamily: "Urbanist",
                      color: "black",
                      fontSize: "22px",
                      fontWeight: "800",
                      lineHeight: "20px",
                    }}
                  >
                    Control User Profile
                  </Row>

                  <Row
                    style={{
                      margin: "8px 0",
                      fontFamily: "Urbanist",
                      color: "rgba(105, 105, 105, 1)",
                      fontSize: "16px",
                      fontWeight: "00",
                      lineHeight: "22px",
                    }}
                  >
                    Est modi omnis qui illum accusamus qui galisum voluptatem
                    aut laudantium
                  </Row>
                </Col>
              </Row>
              <Row style={{ margin: "10px 0" }}>
                <Col className="py-1">
                  <img
                    src="./filler_logo.png"
                    alt="Logo"
                    style={{
                      width: "50px",
                      height: "50px",
                      margin: "2px 0px",
                      textShadow: "2px 2px 2px yellow",
                    }}
                  />
                </Col>
                <Col md={10}>
                  <Row
                    style={{
                      margin: "8px 0",
                      fontFamily: "Urbanist",
                      color: "black",
                      fontSize: "22px",
                      fontWeight: "800",
                      lineHeight: "20px",
                    }}
                  >
                    Monitor Your Teams
                  </Row>

                  <Row
                    style={{
                      margin: "8px 0",
                      fontFamily: "Urbanist",
                      color: "rgba(105, 105, 105, 1)",
                      fontSize: "16px",
                      fontWeight: "00",
                      lineHeight: "22px",
                    }}
                  >
                    labore et laboriosam recusandae est magni iure rem error
                    accusamus
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col style={{ position: "relative" }}>
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
                style={{ position: "absolute", top: "75px" }}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
