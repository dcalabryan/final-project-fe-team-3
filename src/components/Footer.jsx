import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homepage.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container, Button } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <footer className="my-5 fixed-bottom">
      <Container>
        <div className="fw-light">
          <Button type="submit" className="bg-button-footer flex-grow-1 pe-3">
            <i class="bi bi-plus" aria-hidden="true">
              Jual
            </i>
          </Button>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
