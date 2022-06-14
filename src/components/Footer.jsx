import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import "../css/searchCar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTwitch,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Container>
      <div className="footer">
        <Row>
          <Col sm={12} md={6} lg={4} className="mb-1 mb-md-5">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col sm={12} md={6} lg={2} className="mb-3">
            <a className="mb-3" href="#">
              Our Services
            </a>
            <a className="mb-3" href="#">
              Why Us
            </a>
            <a className="mb-3" href="#">
              Testimonial
            </a>
            <a className="d-block" href="#">
              FAQ
            </a>
          </Col>
          <Col sm={12} md={6} lg={4} className="mb-3">
            <p>Connect with us</p>
            <FontAwesomeIcon icon={faFacebook} className="me-3" />
            <FontAwesomeIcon icon={faInstagram} className="me-3" />
            <FontAwesomeIcon icon={faTwitter} className="me-3" />
            <FontAwesomeIcon icon={faDiscord} className="me-3" />
            <FontAwesomeIcon icon={faTwitch} className="me-3" />
          </Col>
          <Col sm={12} md={6} lg={2} className="mb-3">
            <p>Copyright Binar 2022</p>
            <a href="#" className="fw-bold">
              Binar Car Rental
            </a>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Footer;
