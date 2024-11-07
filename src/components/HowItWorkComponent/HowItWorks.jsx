import React from "react";
import Button from "react-bootstrap/Button";

import { HowItWorkcard } from "./HowItWorkcard";

export const HowItWorks = () => {
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
          <HowItWorkcard />
          <HowItWorkcard />
          <HowItWorkcard />
          <HowItWorkcard />
        </div>
      </section>
    </div>
  );
};
