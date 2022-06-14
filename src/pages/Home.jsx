import { Accordion, Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";

import Orang from "../img/orang.png";
import Rate from "../img/Rate.png";
import Testimony_1 from "../img/testimony_1.png";
import Testimony_2 from "../img/testimony_2.png";
import Check from "../img/ceklis.png";
import Oke from "../img/oke.png";
import Harga from "../img/harga.png";
import Jam from "../img/jam.png";
import Pro from "../img/pro.png";

import { Container, Row, Col, Carousel } from "react-bootstrap";

function Home() {
  return (
    <>
      <div>
        {/* Navbar */}
        <div className="bg-nav">
          <NavBar />
          <MainSection />
        </div>

        {/* Our Service */}
        <div id="ourservice" className="container mt-5">
          <div className="row">
            <div className="col-sm-12 col-md-6 grid-service ">
              <img alt="" src={Orang} className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-6 grid-service text-service">
              <h3>
                <b>Best Car Rental for any kind of trip in Karawang!</b>
              </h3>
              <p>
                Sewa mobil di Karawang bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <div className="d-flex flex-row">
                <div className="p-2">
                  <img src={Check} alt="" />
                </div>
                <div className="p-2">
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="p-2">
                  <img src={Check} alt="" />
                </div>
                <div className="p-2">Sewa Mobil Lepas Kunci di Bali 24 Jam</div>
              </div>
              <div className="d-flex flex-row">
                <div className="p-2">
                  <img src={Check} alt="" />
                </div>
                <div className="p-2">Sewa Mobil Jangka Panjang Bulanan</div>
              </div>
              <div className="d-flex flex-row">
                <div className="p-2">
                  <img src={Check} alt="" />
                </div>
                <div className="p-2">
                  Gratis Antar - Jemput Mobil di Bandara
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="p-2">
                  <img src={Check} alt="" />
                </div>
                <div className="p-2">
                  Layanan Airport Transfer / Drop In Out
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Us */}
        <section id="whyus" className="grid-service">
          <Container>
            <div className="whyus?">
              <h3>
                <b>Why Us?</b>
              </h3>
              <p>Mengapa harus pilih Binar Car Rental?</p>
            </div>
            <div className="row">
              <div className="col-sm-12 col-md-6 col-lg-3 mb-3 card-comp">
                <div className="card h-100">
                  <div className="card-body">
                    <img src={Oke} className="mb-4" alt="" />
                    <h5 className="card-title mb-3 fw-bold">Mobil Lengkap</h5>
                    <p className="card-text">
                      Tersedia banyak pilihan mobil, kondisi masih baru dan
                      bersih terawat
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 mb-3 card-comp">
                <div className="card h-100">
                  <div className="card-body">
                    <img src={Harga} className="mb-4" alt="" />
                    <h5 className="card-title mb-3 fw-bold">Harga Murah</h5>
                    <p className="card-text">
                      Harga murah dan bersaing, bisa bandingkan harga kami
                      dengan rental mobil lain
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 mb-3 card-comp">
                <div className="card h-100">
                  <div className="card-body">
                    <img src={Jam} className="mb-4" alt="" />
                    <h5 className="card-title mb-3 fw-bold">Layanan 24 Jam</h5>
                    <p className="card-text">
                      Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                      juga tersedia di akhir minggu
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-3 mb-3 card-comp">
                <div className="card h-100">
                  <div className="card-body">
                    <img src={Pro} className="mb-4" alt="" />
                    <h5 className="card-title mb-3 fw-bold">
                      Sopir Profesional
                    </h5>
                    <p className="card-text">
                      Sopir yang profesional, berpengalaman, jujur, ramah dan
                      selalu tepat waktu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Testimonial */}
        <section id="testimonial" className="py-5">
          <Container className="pt-4">
            <h2 className="h2 text-center">Testimonial</h2>
            <p className="text-center py-3">
              Berbagai review positif dari para pelanggan kami
            </p>
            <Carousel className="bg-testimonial">
              <Carousel.Item interval={2000}>
                <Row className="mx-4 my-5">
                  <Col lg={2} className="m-auto">
                    <img
                      src={Testimony_1}
                      className="d-block testimonial-img m-auto"
                      alt=""
                    />
                  </Col>
                  <Col lg={10}>
                    <img src={Rate} className="testimonial-rating" alt="" />
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className="testimonial-name">John Dee 32, Bromo</p>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Row className="mx-4 my-5">
                  <Col lg={2} className="m-auto">
                    <img
                      src={Testimony_2}
                      className="d-block testimonial-img m-auto"
                      alt=""
                    />
                  </Col>
                  <Col lg={10}>
                    <img src={Rate} className="testimonial-rating" alt="" />
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className="testimonial-name">John Dee 32, Bromo</p>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Row className="mx-4 my-5">
                  <Col lg={2} className="m-auto">
                    <img
                      src={Testimony_1}
                      className="d-block testimonial-img m-auto"
                      alt=""
                    />
                  </Col>
                  <Col lg={10}>
                    <img src={Rate} className="testimonial-rating" alt="" />
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <p className="testimonial-name">John Dee 32, Bromo</p>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Container>
        </section>

        {/* Getting Started */}
        <div className="container grid-service">
          <div className="jumbotron grid-rentcar">
            <div className="row">
              <div className="col-sm text-center text-light">
                <h1 className="pb-3 pt-5">Sewa Mobil di Karawang Sekarang</h1>
                <p className="spacing-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
                <Link to="/cars">
                  <Button variant="success" className="btn bg-btn mt-5 mb-5">
                    Mulai Sewa Mobil
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div id="faq" className="container grid-service grid-service1">
          <div className="row">
            <div className="col-sm faq">
              <h4>
                <b>Frequently Asked Question</b>
              </h4>
              <p className="pt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="col-sm">
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Apa saja syarat yang dibutuhkan untuk sewa mobil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quia possimus voluptatum inventore quo impedit, quis eius
                    rerum pariatur dolor, vel sit esse est asperiores, nihil
                    eligendi nesciunt quam voluptas recusandae.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Apakah persyaratan lepas kunci dan dengan supir berbeda?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                    animi cupiditate delectus doloribus consectetur culpa, cum
                    nisi est quam qui officiis incidunt ab laudantium. Rerum
                    quos quis accusamus amet reprehenderit.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident esse facere praesentium quidem necessitatibus,
                    repellendus nulla accusantium odio deleniti illum neque quod
                    repellat ullam in vel architecto voluptatem velit animi.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    Apakah ada biaya tambahan jika terlambat mengembalikkan
                    mobil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi illum ad non saepe ducimus eligendi voluptates aut,
                    distinctio minima earum repudiandae enim delectus. Tenetur
                    obcaecati laborum commodi enim natus officia.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>
                    Bagaimana jika terjadi kerusakan pada mobil?
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Cumque natus est amet mollitia sunt maiores nam quos iure
                    voluptate. Perferendis dolores eum quisquam quidem nisi nemo
                    minus aperiam illo obcaecati!
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
