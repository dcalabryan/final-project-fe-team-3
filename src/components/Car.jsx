import React from "react";
import { Card } from "react-bootstrap";
import "../css/searchCar.css";
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faUser,
  faMoneyBill1,
} from "@fortawesome/free-regular-svg-icons";

const Car = ({ car }) => {
  const {
    manufacture,
    image,
    rent_per_day,
    capacity,
    description,
    transmission,
    year,
    model,
  } = car;

  return (
    <Card className="h-100">
      <Card.Body className="d-flex card-body">
        <Row>
          <img
            src={image}
            alt={(manufacture, model)}
            className="img-fluid img-car mb-3"
          />
          <br />
          <div className="text-card">
            <Card.Text>
              <Row className="mt-2">
                <Col xs={2} sm={1}>
                  <FontAwesomeIcon icon={faIdCard} className="me-3" />
                </Col>
                <Col xs={10} sm={11} className="fw-bold">
                  {manufacture} {model}
                </Col>
              </Row>
              <Row className="mt-2">
                <Col xs={2} sm={1}>
                  <FontAwesomeIcon icon={faUser} className="me-3" />
                </Col>
                <Col xs={10} sm={11}>
                  {capacity} seats, {transmission} transmission, {year}
                </Col>
              </Row>
              <Row className="mt-2">
                <Col xs={2} sm={1}>
                  <FontAwesomeIcon icon={faMoneyBill1} className="me-3" />
                </Col>
                <Col xs={10} sm={11}>
                  Rp. {rent_per_day} / day
                </Col>
              </Row>
            </Card.Text>
          </div>
          <Card.Text className="text">
            Description:
            <br />
            {description}
          </Card.Text>
          <Card.Text className="btn-card">
            <Button className="w-100 mx-auto" variant="success">
              Pilih mobil
            </Button>
          </Card.Text>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Car;
