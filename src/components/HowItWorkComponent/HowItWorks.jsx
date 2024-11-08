import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { HowItWorkcard } from "./HowItWorkcard";
import howItWorkData from "./howItWorkData.json";

export const HowItWorks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log(howItWorkData.steps)
    setData(howItWorkData.steps);
  }, []);
  return (
    <div>
      <section style={{ justifyContent: "center", margin: "60px 100px" }}>
        <div style={{ display: "flex" }}>
          <p style={{ margin: "0 28px", fontSize: "36px", lineHeight: "55px" }}>
            Understanding the Mechanism
            <span
              style={{
                display: "block",
                fontSize: "56px",
                fontWeight: "800",
                lineHeight: "55px",
              }}
            >
              How It Works
            </span>
          </p>

          <Button type="submit" variant="dark" style={{ marginLeft: "40%" }}>
            Read More
          </Button>
        </div>

        <div
          style={{
            display: "flex",
          }}
        >
          {data.map((step, index) => (
            <HowItWorkcard
              key={index}
              heading={step.heading}
              icon={step.icon}
              alt={step.alt}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};