import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { useGoogleLogin } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/login.css";

import { login, loginWithGoogle } from "../redux/actions/authActions";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Email is required",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (password === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Password is required",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (email !== "" && password !== "") {
      dispatch(login({ email, password }));
      return navigate("/");
    }
  };

  const clickRegister = () => {
    navigate("/register");
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch(loginWithGoogle(tokenResponse.access_token));
    },
    onError: (error) => {
      alert(error);
    },
  });

  return (
    <>
      {/* Navbar and Main Section */}
      <div className="bg-nav">
        <NavBar />
        {/* <MainSection /> */}
      </div>
      {/* Search Container */}
      <Container className="form-login">
        <center>
          <h1>Login</h1>
        </center>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3 mb-3">
            Submit
          </Button>
          <Form.Text className="text-muted">
            <center>
              Don't have an account?{" "}
              <a href="#" onClick={clickRegister}>
                Register
              </a>
              <div className="mb-2 mt-2">Or</div>
              <div className="d-grid">
                <div className="m-auto">
                  <Button variant="success" onClick={() => googleLogin()}>
                    <FontAwesomeIcon icon={faGoogle} /> Sign in with Google
                  </Button>
                </div>
              </div>
            </center>
          </Form.Text>
        </Form>
        <hr />
      </Container>
      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Login;
