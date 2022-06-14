import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/searchCar.css";
import Mobil from "../img/mobil.png";
import { whoami } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function MainSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCars = () => {
    dispatch(whoami());
    return navigate("/cars");
  };
  return (
    <>
      <Container className="d-flex">
        <Row>
          <Col sm={12} md={5} lg={5} className="main-section-left">
            <h3>
              <strong>Sewa & Rental Mobil Terbaik di Kawasan Karawang</strong>
            </h3>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {window.location.pathname === "/cars" ? (
              <></>
            ) : (
              <Button variant="success" onClick={handleCars}>
                Mulai Sewa Mobil
              </Button>
            )}
          </Col>
          <Col sm={12} md={7} lg={7} className="main-section-right">
            <img src={Mobil} className="img-fluid" alt="Car" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainSection;
