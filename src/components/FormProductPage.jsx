import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/pageProduct.css";
import { Card, Container, Button, Form, Navbar } from "react-bootstrap";
import { FiLogIn, FiBell, FiUser } from "react-icons/fi";
import { BsListUl } from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";

import ProductImage from "../img/Casio.png";
import UserImage from "../img/User.png";

export function NavbarProductPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const searchStyle = {
    backgroundColor: "rgba(238, 238, 238, 1)",
    border: "1px solid rgba(238, 238, 238, 1)",
  };

  const buttonStyle = {
    border: "1px solid rgba(0,0,0,0)",
    backgroundColor: "rgba(0,0,0,0)",
  };

  const buttonStyleV2 = {
    border: "1px solid rgba(0,0,0,0)",
    backgroundColor: "rgba(0,0,0,0)",
    width: "50px",
  };
  return (
    <Navbar expand="lg" className="py-3 home-nav navbar-is_login">
      <Container>
        <div className="box me-3"></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex me-auto">
            <Form.Control
              type="search"
              placeholder="Cari di sini..."
              className="me-2"
              aria-label="Search"
              style={searchStyle}
            />
          </Form>

          {isLoggedIn ? (
            <Button className=" d-flex gap-2" style={buttonStyle}>
              <FiLogIn className="align-self-center" />
              Masuk
            </Button>
          ) : (
            <div className="ms-auto d-flex navbar-items">
              <Button style={buttonStyle}>
                <BsListUl
                  style={{ fontSize: "20px" }}
                  className="align-self-center text-black"
                />
              </Button>
              <Dropdown>
                <Dropdown.Toggle
                  style={buttonStyleV2}
                  variant="success"
                  id="dropdown-basic"
                >
                  <FiBell
                    style={{ fontSize: "20px" }}
                    className="align-self-center text-black"
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Button style={buttonStyle}>
                <FiUser
                  style={{ fontSize: "20px" }}
                  className="align-self-center text-black"
                />
              </Button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function CarouselProduct() {
  return (
    <>
      <div className="slider-product">
        <OwlCarousel className="owl-theme" items={1} margin={10} nav>
          <div class="item">
            <img src={ProductImage} className="w-100" alt="" />
          </div>
          <div class="item">
            <img src={ProductImage} className="w-100" alt="" />
          </div>
          <div class="item">
            <img src={ProductImage} className="w-100" alt="" />
          </div>
          <div class="item">
            <img src={ProductImage} className="w-100" alt="" />
          </div>
          <div class="item">
            <img src={ProductImage} className="w-100" alt="" />
          </div>
        </OwlCarousel>
      </div>
    </>
  );
}

export function UserProfile() {
  const buttonStyle = {
    border: "1px solid rgba(113, 38, 181, 1)",
    backgroundColor: "rgba(113, 38, 181, 1)",
    color: "white",
    borderRadius: "16px",
    padding: "9px 0",
  };
  const buttonStyleV2 = {
    border: "1px solid rgba(113, 38, 181, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    color: "black",
    borderRadius: "16px",
    padding: "9px 0",
  };
  return (
    <>
      <div className="user-profile">
        <Card className="pb-2 text-black">
          <Card.Body>
            <Card.Title>Jam Tangan Casio</Card.Title>
            <Card.Text>Aksesoris</Card.Text>
            <Card.Title>Rp 250.000</Card.Title>
            <div className=" buttons-user">
              <div className="d-flex flex-column gap-3 mt-3">
                <Button className="w-100" style={buttonStyle}>
                  Terbitkan
                </Button>
                <Button className="w-100" style={buttonStyleV2}>
                  Edit
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
        <Card className="d-flex flex-row gap-3 px-3 py-3 mt-3 text-black">
          <Card.Img src={UserImage} style={{ width: "20%" }} />
          <div>
            <Card.Title>Nama Penjual</Card.Title>
            <Card.Text>Kota</Card.Text>
          </div>
        </Card>
      </div>
    </>
  );
}

export function ProductDesc() {
  return (
    <>
      <div className="mb-3 mt-4">
        <Card className="card-description text-black">
          <Container className="py-3">
            <h4 className="fw-bold text-black">Deskripsi</h4>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              reiciendis quam ipsa distinctio, non, molestiae libero iste
              aliquam, magnam obcaecati ratione deserunt facilis harum debitis?
              Iure quidem maxime quo sequi harum distinctio animi unde,
              doloribus aliquid autem dolores neque voluptas cupiditate est
              omnis nihil cum, debitis consequatur totam voluptatibus maiores.
            </p>

            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
              reiciendis quam ipsa distinctio, non, molestiae libero iste
              aliquam, magnam obcaecati ratione deserunt facilis harum debitis?
              Iure quidem maxime quo sequi harum distinctio animi unde,
              doloribus aliquid autem dolores neque voluptas cupiditate est
              omnis nihil cum, debitis consequatur totam voluptatibus maiores.
            </p>
          </Container>
        </Card>
      </div>
    </>
  );
}
