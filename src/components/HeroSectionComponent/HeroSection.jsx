// import Container from "react-bootstrap/Container";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import AppButton from "../AppButton/AppButton";
import "./heroSection.css";

import React from "react";

export const HeroSection = () => {
  return (
    <div>
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <Form
          className="px-4 py-4"
          style={{ margin: "90px 0px 30px 0", position: "relative" }}
        >
          <Row>
            <Col style={{ marginLeft: "50px" }}>
              <Row>
                <p
                  style={{
                    fontFamily: "Urbanist",
                    color: "Black",
                    fontSize: "72px",
                    lineHeight: "86px",
                    fontWeight: "800",
                  }}
                >
                  Digital Business Cards More Than
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
                    Just Cards
                  </span>
                </p>
              </Row>
              <Row>
                <p
                  className="para2"
                  style={{
                    fontFamily: "Inter",

                    fontSize: "18px",
                    fontFamily: "Inter",
                    fontWeight: "400",
                    color: "rgba(115, 115, 122, 1)",
                    lineHeight: "40px",
                  }}
                >
                  Imagine a digital toolset that transforms your business <br />
                  interactions—where each connection is a step towards greater{" "}
                  <br />
                  visibility and success.
                </p>
              </Row>
              <Row>
                <AppButton
                  style={{
                    margin: "50px 0px 0 0px",
                    width: "250px",
                    height: "50px",
                    fontSize: "16px",
                    lineHeight: "31px",
                  }}
                >
                  Create Your Free Profile
                </AppButton>
                <AppButton
                  variant="outlined"
                  style={{
                    margin: "50px 0px 0 50px",
                    width: "143px",
                    height: "50px",
                    fontSize: "16px",
                    textTransform: "none",
                    lineHeight: "31px",
                  }}
                >
                  For Teams
                </AppButton>
              </Row>
            </Col>

            <Col style={{ position: "relative", marginRight: "28px" }}>
              <div
                style={{
                  background:
                    "linear-gradient(110.97deg, #FFE500 -32.84%, #9702FA 109.18%)",
                  width: "486",
                  height: "454px",
                  borderRadius: "39px",
                  opacity: "30%",
                  margin: "10px 0 0 80px",
                }}
              ></div>
              <img
                src="./Group 47906 copy 1.png"
                style={{ position: "absolute", top: "-110px", right: "10px" }}
              />
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
