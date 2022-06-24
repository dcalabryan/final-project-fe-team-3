import React from "react";
import kamera from "../icons/Group 1.png";
import back from "../icons/fi_arrow-left.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export function FormInfoProfile() {
  return (
    <>
      <div>
        <Link to="/">
          <div className="gambarback">
            <img to="/" src={back} />
          </div>
        </Link>
        <div className="lengkapitext">
          <p style={{ textAlign: "center" }}>Lengkapi Info Akun</p>
        </div>
      </div>
      <section>
        <div style={{ alignContent: "center" }} className="foto">
          <label>
            <img src={kamera} />
            <input
              type="file"
              name="myfile"
              style={{ display: "none" }}
              accept="image/x-png,image/jpeg"
            />
          </label>
        </div>
      </section>
      <section>
        <div id="form">
          <form action="">
            <label className="label">Nama*</label>
            <br />
            <div className="mt-3">
              <input placeholder="Nama" className="placeholder" type="text" />
            </div>

            <br />
            <label className="label">Kota*</label>
            <br />
            <select>
              <option
                selected
                value
                className="label"
                style={{ textColor: "#d0d0d0" }}
              >
                Pilih Kota
              </option>
              <option value="aceh">Aceh</option>
              <option value="medan">Medan</option>

              <option value="jakarta">Jakarta</option>
            </select>
            <br />
            <label className="label">Alamat*</label>
            <br />
            <input
              type="textarea"
              name="textValue"
              placeholder="Contoh: Jalan Ikan Hiu 33"
              className="textarea"
            />
            <br />
            <label className="label">No Handphone*</label>
            <br />
            <input
              placeholder="Contoh: +628123456789"
              className="placeholder"
              type="text"
            />
            <br />
            <Button
              className="submit1 mb-5"
              type="submit"
              style={{ justifyContent: "center" }}
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
