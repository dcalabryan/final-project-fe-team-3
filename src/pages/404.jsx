import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

// Import components
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/missing.css";

const Missing = () => {
  return (
    <>
      {/* Navbar and Main Section */}
      <div className="bg-nav">
        <NavBar />
      </div>
      {/* Register Container */}
      <Container className="missing">
        <div className="page-wrap d-flex flex-row align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 text-center">
                <span className="display-1 d-block">404</span>
                <div className="mb-4 lead">
                  The page you are looking for was not found.
                </div>
                <a href="/" className="btn btn-link">
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* Footer Section */}
      <Footer />
    </>
  );
};
export default Missing;
