import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homepage.css";
import { Col, Card, Row, Container } from "react-bootstrap";

import Jam from "../img/jam.jpg";
const CardProperty = ({}) => {
  //   const { image, name, category, price } = property;
  return (
    <>
      <Container>
        <Row>
          {/* for (let i=0; i < cars.length; i++) {  */}
          <Col sm={6} md={2} lg={2} className="my-2">
            <Card>
              <Card.Img src={Jam} alt="" style={{ height: "190px", objectFit: "cover" }} />
              <Card.Body style={{ fontSize: "14px" }}>
                <Card.Title style={{ color: "black" }}>Jam</Card.Title>
                <Card.Text style={{ color: "black" }}>akseoris</Card.Text>
                <Card.Text className="fw-bold" style={{ color: "black" }}>
                  Rp. 50000{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={2} lg={2} className="my-2">
            <Card>
              <Card.Img src={Jam} alt="" style={{ height: "190px", objectFit: "cover" }} />
              <Card.Body style={{ fontSize: "14px" }}>
                <Card.Title style={{ color: "black" }}>Jam</Card.Title>
                <Card.Text style={{ color: "black" }}>akseoris</Card.Text>
                <Card.Text className="fw-bold" style={{ color: "black" }}>
                  Rp. 50000{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={2} lg={2} className="my-2">
            <Card>
              <Card.Img src={Jam} alt="" style={{ height: "190px", objectFit: "cover" }} />
              <Card.Body style={{ fontSize: "14px" }}>
                <Card.Title style={{ color: "black" }}>Jam</Card.Title>
                <Card.Text style={{ color: "black" }}>akseoris</Card.Text>
                <Card.Text className="fw-bold" style={{ color: "black" }}>
                  Rp. 50000{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={2} lg={2} className="my-2">
            <Card>
              <Card.Img src={Jam} alt="" style={{ height: "190px", objectFit: "cover" }} />
              <Card.Body style={{ fontSize: "14px" }}>
                <Card.Title style={{ color: "black" }}>Jam</Card.Title>
                <Card.Text style={{ color: "black" }}>akseoris</Card.Text>
                <Card.Text className="fw-bold" style={{ color: "black" }}>
                  Rp. 50000{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={2} lg={2} className="my-2">
            <Card>
              <Card.Img src={Jam} alt="" style={{ height: "190px", objectFit: "cover" }} />
              <Card.Body style={{ fontSize: "14px" }}>
                <Card.Title style={{ color: "black" }}>Jam</Card.Title>
                <Card.Text style={{ color: "black" }}>akseoris</Card.Text>
                <Card.Text className="fw-bold" style={{ color: "black" }}>
                  Rp. 50000{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={2} lg={2} className="my-2">
            <Card>
              <Card.Img src={Jam} alt="" style={{ height: "190px", objectFit: "cover" }} />
              <Card.Body style={{ fontSize: "14px" }}>
                <Card.Title style={{ color: "black" }}>Jam</Card.Title>
                <Card.Text style={{ color: "black" }}>akseoris</Card.Text>
                <Card.Text className="fw-bold" style={{ color: "black" }}>
                  Rp. 50000{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={2} lg={2} className="my-2">
            <Card>
              <Card.Img src={Jam} alt="" style={{ height: "190px", objectFit: "cover" }} />
              <Card.Body style={{ fontSize: "14px" }}>
                <Card.Title style={{ color: "black" }}>Jam</Card.Title>
                <Card.Text style={{ color: "black" }}>akseoris</Card.Text>
                <Card.Text className="fw-bold" style={{ color: "black" }}>
                  Rp. 50000{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={2} lg={2} className="my-2">
            <Card>
              <Card.Img src={Jam} alt="" style={{ height: "190px", objectFit: "cover" }} />
              <Card.Body style={{ fontSize: "14px" }}>
                <Card.Title style={{ color: "black" }}>Jam</Card.Title>
                <Card.Text style={{ color: "black" }}>akseoris</Card.Text>
                <Card.Text className="fw-bold" style={{ color: "black" }}>
                  Rp. 50000{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} md={2} lg={2} className="my-2">
            <Card>
              <Card.Img src={Jam} alt="" style={{ height: "190px", objectFit: "cover" }} />
              <Card.Body style={{ fontSize: "14px" }}>
                <Card.Title style={{ color: "black" }}>Jam</Card.Title>
                <Card.Text style={{ color: "black" }}>akseoris</Card.Text>
                <Card.Text className="fw-bold" style={{ color: "black" }}>
                  Rp. 50000{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          {/* } */}
        </Row>
      </Container>
    </>
  );
};

export default CardProperty;
