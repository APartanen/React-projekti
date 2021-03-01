import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link } from "react-router-dom";
import "./Lomake2.css";
import { Form, Dropdown, Modal, Button } from "react-bootstrap";

const Lomake2 = (props) => {

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  
  return (
    <div>
      <div className="screen">
        <div className="otsikko">
          <h2>Työsopimus</h2>
          <h6>Työaika, työnkesto, sopimustyyppi.</h6>
        </div>

        <label>
          Työsopimuksen tyyppi
        </label>

        <div className="lomake">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Määräaikainen
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            ></input>
            <label className="form-check-label" htmlFor="flexCheckDefault">
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
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Tarvittaessa töihin kutsuttava
            </label>
          </div>
        </div>

        <label>
          Työsopimuksen kesto
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
            </label>

            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=""
            ></input>
          </div>
        </form>
        <Dropdown>
          <label>
            Työaika
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

        <Form.Group>
          <Form.Label>Palkka-asiat</Form.Label>
          <Button variant="success" onClick={handleShow1}>Vinkki</Button>
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Palkka</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p> Esimerkiksi:<br />
            – palkan määräytyminen<br />
            – palkka ja palkanmaksu<br />
            – lisät, sairausajan palkka<br />
            – loma-ajan palkka, lomaraha ja -korvaukset<br />
            – verokortti<br />
            – luontaisedut<br />
            – matkakulut
            </p>
            </Modal.Body>
          </Modal>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Työsuhteen päättyminen</Form.Label>
          <Button variant="success" onClick={handleShow2}>Vinkki</Button>
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>Työsuhteen päättyminen</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p> Esimerkiksi:<br />
            – irtisanomisaika<br />
            – vuosilomakorvaus<br />
            – lopputilin maksaminen<br />
            – työtodistus<br />
            </p>
            </Modal.Body>
          </Modal>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Työterveyshuolto</Form.Label>
          <Button variant="success" onClick={handleShow3}>Vinkki</Button>
          <Modal show={show3} onHide={handleClose3}>
            <Modal.Header closeButton>
              <Modal.Title>Työterveyshuolto</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p> Esimerkiksi:<br />
            - työterveyshuollon palvelut, työhöntulotarkastus<br />
            – työpaikkaselvitys<br />
            – terveystarkastukset erityistä sairastumisen vaaraa aiheuttavat työt
            </p>
            </Modal.Body>
          </Modal>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <br />

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
