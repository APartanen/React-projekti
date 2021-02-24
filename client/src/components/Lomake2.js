import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Lomake2.css";
import { Form, Dropdown } from "react-bootstrap";

export default function Lomake2() {
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  return (
    <div>
      <div className="screen">
        <div className="otsikko">
          <h1>Työaika ja työnkesto</h1>
          <h6>Arvioi, kuinka paljon työtä sinulla on tarjota työntekijälle.</h6>
        </div>

        <label>
          Työsopimuksen tyyppi *
          <small id="emailHelp" className="form-text text-muted">
            Tämä tieto näkyy ilmoituksessa.
          </small>
        </label>

        <div className="lomake">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label">Määräaikainen</label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label">
              Toistaiseksi voimassa oleva
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label">
              Tarvittaessa töihin kutsuttava
            </label>
          </div>
        </div>

        <label>
          Työsopimuksen kesto *
          <small className="form-text text-muted">
            Tämä tieto näkyy ilmoituksessa.
          </small>
        </label>

        <div className="date">
          <div>
            <Form.Label>Työ alkaa</Form.Label>
            <Form.Control type="date" name="pvm" />
          </div>
          <div>
            <Form.Label>Työ päättyy</Form.Label>
            <Form.Control type="date" name="pvm" />
          </div>
        </div>
        <form className="tunnit1">
          <div className="form-group" className="tunnit2">
            <label>
              Tuntien määrä / viikko
              <small className="form-text text-muted">
                Tämä tieto näkyy ilmoituksessa.
              </small>
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=""
            ></input>
            <small className="form-text text-muted"></small>
          </div>
        </form>
        <Dropdown>
          <label>
            Työaika *
            <small className="form-text text-muted">
              Tämä tieto näkyy ilmoituksessa.
            </small>
          </label>
          <br></br>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Valitse
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Osa-aikainen</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Kokoaikainen</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="links">
        <Link to="Lomakeinfo">
          <button type="button" className="btn btn-outline-success">
            Edellinen
          </button>
        </Link>
        <button type="button" className="btn btn-outline-success">
          Seuraava
        </button>
      </div>
    </div>
  );
}
