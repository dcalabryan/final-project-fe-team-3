import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homepage.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import Rate from "../img/img banner.png";

const Promo = () => {
  return (
    <section id="testimonial" className="py-5">
      <Container className="pt-4">
        <Carousel className="bg-aliceblue">
          <Carousel.Item interval={2000}>
            <Row className="justify-content-center">
              <Col lg={10}>
                <img src={Rate} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Row className="justify-content-center">
              <Col lg={10}>
                <img src={Rate} className="" alt="" />
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <Row className="justify-content-center">
              <Col lg={10}>
                <img src={Rate} className="" alt="" />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Promo;
