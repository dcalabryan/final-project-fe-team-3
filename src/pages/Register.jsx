import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

// Import components
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/searchCar.css";
import "../css/login.css";

import { register } from "../redux/actions/authActions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Name is required",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    } else if (email === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Email is required",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    } else if (
      email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) === null
    ) {
      Swal.fire({
        title: "Warning!!",
        text: "Email is not valid",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    } else if (password === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Password is required",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    } else {
      dispatch(register({ email, password, name }));
      return navigate("/login");
    }
  };

  const clickLogin = () => {
    return navigate("/login");
  };

  return (
    <>
      {/* Navbar and Main Section */}
      <div className="bg-nav">
        <NavBar />
      </div>
      {/* Register Container */}
      <Container className="form-login">
        <center>
          <h3>Register</h3>
        </center>
        <hr></hr>
        <Form onSubmit={registerSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Text className="text-muted">Enter your name</Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">Enter your email</Form.Text>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Text className="text-muted">
              Never share your password with anyone else!
            </Form.Text>
          </Form.Group>
          <Button type="submit" variant="primary" className=" w-100 mt-2 mb-3">
            Register
          </Button>
          <Form.Text className="text-muted">
            <center>
              Already have an account?{" "}
              <a href="#" onClick={clickLogin}>
                Login
              </a>
            </center>
          </Form.Text>
        </Form>
        <hr></hr>
      </Container>
      {/* Footer Section */}
      <Footer />
    </>
  );
};
export default Register;
