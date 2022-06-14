import React, { useEffect } from "react";
import { Nav, Button, Navbar, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout, whoami } from "../redux/actions/authActions";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    return navigate("/");
  };
  const linkService = () => {
    if (isAuthenticated) {
      dispatch(whoami());
      return navigate("/#ourservice");
    }
    return navigate("/#ourservice");
  };
  const linkWhyus = () => {
    if (isAuthenticated) {
      dispatch(whoami());
      return navigate("/#whyus");
    }
    return navigate("/#whyus");
  };
  const linkTestimonial = () => {
    if (isAuthenticated) {
      dispatch(whoami());
      return navigate("/#testimonial");
    }
    return navigate("/#testimonial");
  };
  const linkFaq = () => {
    if (isAuthenticated) {
      dispatch(whoami());
      return navigate("/#faq");
    }
    return navigate("/#faq");
  };
  const linkHome = () => {
    if (isAuthenticated) {
      dispatch(whoami());
      return navigate("/");
    }
    return navigate("/#faq");
  };
  const alertLogout = async () => {
    handleLogout();
  };
  const handleRegis = () => {
    return navigate("/register");
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-nav fw-bold"
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#" onClick={linkHome}>
            Binar Car Rental
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="/#ourservice"
                onClick={linkService}
                className="mx-3"
              >
                Our Service
              </Nav.Link>
              <Nav.Link href="/#whyus" onClick={linkWhyus} className="mx-3">
                Why Us
              </Nav.Link>
              <Nav.Link
                href="/#testimonial"
                onClick={linkTestimonial}
                className="mx-3"
              >
                Testimonial
              </Nav.Link>
              <Nav.Link href="/#faq" onClick={linkFaq} className="mx-3">
                FAQ
              </Nav.Link>
              {!window.localStorage.getItem("token") ? (
                <Button
                  variant="success"
                  className="mx-3"
                  onClick={handleRegis}
                >
                  Register
                </Button>
              ) : (
                <>
                  <Nav.Link className="mx-3">User {user.name}</Nav.Link>
                  <Button
                    variant="danger"
                    className="mx-3"
                    onClick={alertLogout}
                  >
                    Logout
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
