import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { getFilteredCars } from "../redux/actions/carActions";
import { whoAmI } from "../redux/actions/authActions";

// Import components
import NavBar from "../components/Navbar";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer";
import Car from "../components/Car";

import "../css/searchCar.css";

function SearchCar(props) {
  const dispatch = useDispatch();
  const { cars, error } = useSelector((state) => state.car);
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: "Warning!!",
        text: error,
        icon: "warning",
        confirmButtonText: "Ok",
      });
    }
  }, [error]);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passenger, setPassenger] = useState("");
  const [driver, setDriver] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (driver === "" || date === "" || time === "") {
      Swal.fire({
        title: "Warning!!",
        text: "Data driver, date and time are required",
        icon: "warning",
        confirmButtonText: "Ok",
      });
    }
    const dateTime = Date.parse(`${date} ${time}`);
    if (dateTime < Date.now()) {
      Swal.fire({
        title: "Warning!!",
        text: "Data date and time must be greater than current date and time",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (date !== "" && time !== "" && passenger === "") {
      dispatch(getFilteredCars({ date, time }));
    } else if (
      date !== "" &&
      time !== "" &&
      driver !== "" &&
      passenger !== ""
    ) {
      dispatch(getFilteredCars({ date, time, passenger }));
    }
  };

  return (
    <>
      {/* Navbar and Main Section */}
      <div className="bg-nav">
        <NavBar />
        <MainSection />
      </div>
      {/* Search Container */}
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row className="search p-4 row-cols-md-auto mx-auto mb-4">
            <Col md={6} sm={12} lg className="p-2 mb-2 mx-auto">
              <Form.Label>Tipe Driver</Form.Label>
              <Form.Select
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
              >
                <option defaultValue={1}>Pilih Tipe Driver</option>
                <option value="1">Dengan Sopir</option>
                <option value="2">Tanpa Sopir (Lepas Kunci)</option>
              </Form.Select>
            </Col>
            <Col md={6} sm={12} lg className="p-2 mb-2 mx-auto">
              <Form.Label>Tanggal</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              ></Form.Control>
            </Col>
            <Col md={6} sm={12} lg className="p-2 mb-2 mx-auto">
              <Form.Label>Waktu Jemput/Ambil</Form.Label>
              <Form.Control
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              ></Form.Control>
            </Col>
            <Col md={6} sm={12} lg className="p-2 mb-2 mx-auto">
              <Form.Label>Jumlah Penumpang (optional)</Form.Label>
              <Form.Control
                type="number"
                placeholder="Jumlah Penumpang"
                className="passenger"
                value={passenger}
                onChange={(e) => setPassenger(e.target.value)}
              ></Form.Control>
            </Col>
            <Col md={12} sm={12} lg={2} className="p-2 mb-2 m-auto">
              <Button variant="success" type="submit" className="w-100">
                Cari Mobil
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Container>
        <>
          {!handleSubmit ? (
            <></>
          ) : (
            <>
              <Row className="my-4">
                {cars.length === 0 ? (
                  <></>
                ) : (
                  cars.car.map((cars) => (
                    <Col key={cars.id} md={6} sm={12} lg={4} className="my-2">
                      <Car car={cars} />
                    </Col>
                  ))
                )}
              </Row>
            </>
          )}
        </>
      </Container>
      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default SearchCar;
