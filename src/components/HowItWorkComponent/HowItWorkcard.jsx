import React from "react";
import Card from "react-bootstrap/Card";
import { steps } from "./howItWorkData.json";

export const HowItWorkcard = () => {
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
          Step 1
        </Card.Title>
        {/* <Card.Img src={data.src} alt={data.alt} /> */}
        <Card.Img
          src="./Group 47917.png"
          style={{ width: "38px", height: "38px" }}
        ></Card.Img>
        <Card.Title style={{ margin: "8px 0" }}>Order</Card.Title>
        <Card.Text>
          Select a card and add-ons. Complete the order process and payment.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

/* <div style={{display: "flex"}}>
        {data.map((item, idx) => {
        return (
            <p key={idx}>{item.heading}</p> 
        )
      })}
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}

          ></img>
        );
      })}
      {data.map((item, idx) => {
        return (
            <p key={idx}>{item.title}</p> 
        )
      })}
    </div> */
