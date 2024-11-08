/* eslint-disable react/prop-types */
import React from "react";
import Card from "react-bootstrap/Card";
import "./howItWork.css";


export const HowItWorkcard = ({ heading, icon, alt, title, description }) => {
  return (
    <Card
      style={{
        width: "259px",
        height: "279px",
        borderRadius: "20px",
        background:
          "linear-gradient(94.47deg, rgba(255, 229, 0, 0.3) 4.37%, rgba(151, 2, 250, 0.3) 99.39%)",
        // backgroundColor:"linear-gradient(94.47deg, #FFE500 4.37%, #9702FA 99.39%)",
        margin: "30px",
        padding: "2px 0",
      }}
    >
      <Card.Body>
        <Card.Title
          style={{
            fontSize: "50px",
            fontWeight: "800",
            lineHeight: "55px",
            opacity: "45%",
            color: "rgba(255, 255, 255, 1)",
          }}
        >
          {heading}
        </Card.Title>
        <Card.Img
          src={icon}
          style={{ width: "38px", height: "38px" }}
          alt={alt}
        ></Card.Img>
        <Card.Title style={{ margin: "8px 0", fontFamily: "Urbanist" }}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};
