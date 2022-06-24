import React from "react";
import { NavbarProductPage } from "../components/FormProductPage";
import {
  CarouselProduct,
  UserProfile,
  ProductDesc,
} from "../components/FormProductPage";
import { Container, Row, Col } from "react-bootstrap";

export default function PageProduct() {
  return (
    <>
      <div>
        <NavbarProductPage />
      </div>
      <Container className="mt-5" style={{ width: "70%" }}>
        <Row>
          <Col md={8}>
            <div>
              <CarouselProduct />
            </div>
          </Col>
          <Col md={4}>
            <div>
              <UserProfile />
            </div>
          </Col>
          <Col md={8}>
            <div>
              <ProductDesc />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
