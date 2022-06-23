import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Navbar, Nav, Button, Offcanvas, Stack, Dropdown, InputGroup, Form } from "react-bootstrap";
import { logout, whoami } from "../redux/actions/authActions";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Brand from "../img/Brand.png";
import Jam from "../img/jam.jpg";
import "../css/homepage.css";

const NavbarComponent = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(whoami());
    }
  }, [dispatch, isAuthenticated]);

  const handleLogout = () => {
    dispatch(logout());
  };

  setTimeout(() => {
    if (localStorage.getItem("token")) {
      dispatch(whoami());
    }
  }, 60000);

  return (
    <div className="navbar-component py-1">
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className="py-1">
          <Container>
            <Navbar.Brand href="/" className="bg-primary-darkblue px-5 text-white">
              <img src={Brand} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Second Hand</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 align-items-center">
                  {user ? (
                    <>
                      <Nav.Link href="/login" className="fw-bold">
                        <Button className="bg-button border-0">
                          <i class="bi bi-box-arrow-in-right me-1" /> Masuk
                        </Button>
                      </Nav.Link>
                    </>
                  ) : (
                    <>
                      {/* Search Box */}
                      <div className="search-box me-auto">
                        <InputGroup>
                          <Form.Control placeholder="Cari di sini ..." className="search-box" />
                          <Button variant="light" id="button-addon2" className="search-box">
                            <i class="bi bi-search"></i>
                          </Button>
                        </InputGroup>
                      </div>

                      {/* Menu */}
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="navbar-icon" href="/daftar-jual">
                          <i class="bi bi-list-ul fs-2"></i>
                        </Dropdown.Toggle>
                      </Dropdown>
                      {/* Notification */}
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="navbar-icon">
                          <i class="bi bi-bell fs-3" style={{ color: "#000000" }}></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/transaksi">
                            <Stack direction="horizontal" gap={3}>
                              <div>
                                <p className="my-auto" style={{ fontSize: "10px", color: "#BABABA" }}>
                                  Penawaran Produk
                                </p>
                                <h5 className="my-auto" style={{ fontSize: "12px", lineHeight: "22px" }}>
                                  Jam Tangan Casio
                                </h5>
                                <h5 className="my-auto" style={{ fontSize: "12px", lineHeight: "22px" }}>
                                  Rp. 250.000
                                </h5>
                                <h5 className="my-auto" style={{ fontSize: "12px", lineHeight: "22px" }}>
                                  Ditawar Rp.200.000
                                </h5>
                              </div>
                              <p className="align-self-start ms-auto" style={{ fontSize: "12px", color: "#BABABA" }}>
                                20 Apr, 14:04
                              </p>
                            </Stack>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      {/* Profile */}
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" className="navbar-icon">
                          <i class="bi bi-person fs-2"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="/transaksi">
                            <span class="bi bi-gear me-2" aria-hidden="true"></span>Edit Profile
                          </Dropdown.Item>
                          <Dropdown.Item href="/transaksi">
                            <span class="bi bi-cart2 me-2" aria-hidden="true"></span>Wishlist
                          </Dropdown.Item>
                          <Dropdown.Item href="/transaksi">
                            <span class="bi bi-clock-history me-2" aria-hidden="true"></span>History Transaksi
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default NavbarComponent;
