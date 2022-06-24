import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/homepage.css";

import { Container, Button } from "react-bootstrap";

const Filter = () => {
  return (
    <Container>
      <div className="pt-2 d-flex justify-content-between">
        <h4 className="h4 fw-bold">Telusuri Kategori</h4>
      </div>
      <div className="py-3 d-flex justify-content-start">
        <Button className="btn btn-primary btn-filter-size me-3" id="filterAll">
          <i className="bi bi-search"></i> All
        </Button>
        <Button className="btn btn-primary btn-filter-size me-3" id="filterHobi">
          <i className="bi bi-search"></i> Hobi
        </Button>
        <Button className="btn btn-primary btn-filter-size me-3" id="filterKendaraan">
          <i className="bi bi-search"></i> Kendaraan
        </Button>
        <Button className="btn btn-primary btn-filter-size me-3" id="filterBaju">
          <i className="bi bi-search"></i> Baju
        </Button>
        <Button className="btn btn-primary btn-filter-size me-3" id="filterElektronik">
          <i className="bi bi-search"></i> Elektronik
        </Button>
        <Button className="btn btn-primary btn-filter-size me-3" id="filterKesehatan">
          <i className="bi bi-search"></i> Kesehatan
        </Button>
      </div>
    </Container>
  );
};

export default Filter;
