import React from "react";
import { Navbar, Button, Form, Container } from "react-bootstrap";
import "../css/infoProduct.css";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";

export function BlankNavV2() {
  return (
    <Navbar expand="lg" className="py-3 blank-navV2">
      <Container>
        <div className="box me-3"></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export function InfoProductForm() {
  const buttonStyle = {
    borderRadius: "16px",
    backgroundColor: "rgba(113, 38, 181, 1)",
    border: "1px solid rgba(113, 38, 181, 1)",
  };

  const buttonStyleV2 = {
    borderRadius: "16px",
    backgroundColor: "rgba(113, 38, 181, 0)",
    border: "1px solid rgba(113, 38, 181, 1)",
  };

  const buttonUpload = {
    borderRadius: "12px",
    backgroundColor: "rgba(226, 212, 240, 0)",
    border: "2px dashed rgba(226, 212, 240, 1)",
  };

  const formStyle = {
    borderRadius: "12px",
  };
  return (
    <>
      <Container className="form-info-product">
        <Link
          to="/"
          className="text-black position-absolute "
          style={{ left: "25%" }}
        >
          <IoMdArrowBack style={{ fontSize: "20px" }} />
        </Link>
        <h5 className="text-center">Lengkapi Detail Product</h5>

        <Form>
          <div className="w-50 form-body">
            <Form.Group className="mb-2">
              <Form.Label>Nama Product</Form.Label>
              <Form.Control
                style={formStyle}
                placeholder="Nama Produk"
                className="py-2"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Harga Produk</Form.Label>
              <Form.Control
                style={formStyle}
                placeholder="Rp 0,00"
                className="py-2"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Kategori</Form.Label>
              <Form.Select style={formStyle}>
                <option hidden>Pilih Kategori</option>
                <option>Hobi</option>
                <option>Kendaraan</option>
                <option>Baju</option>
                <option>Elektronik</option>
                <option>Kesehatan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control
                style={formStyle}
                as="textarea"
                placeholder="Contoh: Jalan Ikan Hiu 33"
                className="py-2"
              />
            </Form.Group>

            <Form.Group className="mb-3 upload-product d-flex flex-column ">
              <Form.Label>Foto Produk</Form.Label>
              <Button
                variant="secondary"
                style={buttonUpload}
                className="upload-image-product  "
              >
                <AiOutlinePlus
                  style={{ fontSize: "24px", color: "rgba(138, 138, 138, 1)" }}
                />
                <Form.Control type="file" />
              </Button>
            </Form.Group>

            <div className="d-flex gap-3">
              <Button
                type="submit"
                style={buttonStyleV2}
                className="w-50 py-2 text-black"
              >
                Preview
              </Button>
              <Button
                type="submit"
                style={buttonStyle}
                className="w-50 py-2 text-light"
              >
                Terbitkan
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  );
}
