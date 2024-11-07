/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { forwardRef, useRef, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Form from "react-bootstrap/Form";
import { IconContext } from "react-icons";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import AppButton from "../AppButton/AppButton";

const CustomerCarousel = forwardRef(({ activeIndex, onSelect }, ref) => {
  const handleSelect = (selectedIndex) => {
    onSelect(selectedIndex);
  };
  return (
    <Carousel
      ref={ref}
      activeIndex={activeIndex}
      onSelect={handleSelect}
      indicators=""
      prevIcon=""
      nextIcon=""
    >
      <Carousel.Item>
        <Image
          style={{
            padding: 8,
          }}
          src="./image 118.png"
          alt="card image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{
            padding: 8,
          }}
          src="./image 118.png"
          alt="card image"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          style={{
            padding: 8,
          }}
          src="./image 118.png"
          alt="card image"
        />
      </Carousel.Item>
    </Carousel>
  );
});

export const Customers = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleCarouselSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
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

        <IconContext.Provider value={{ color: "black", size: "40px" }}>
          <Row className="align-items-center justify-content-center">
            <Col>
              <BsArrowLeft onClick={handlePrev} />
            </Col>
            <Col>
              <CustomerCarousel
                ref={carouselRef}
                activeIndex={index}
                onSelect={handleCarouselSelect}
              />
            </Col>
            <Col>
              <BsArrowRight onClick={handleNext} />
            </Col>
          </Row>
        </IconContext.Provider>

        <Form>
          <Row className="d-flex flex-row ">
            <Col>
              <AppButton>Front/Back</AppButton>
            </Col>
            <Col>
              <AppButton variant="outlined">Design My Own</AppButton>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};