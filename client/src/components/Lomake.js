import React, { useState } from 'react';
import { Col, Row, Form, Button, Container, Modal } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";


// alustava lomake
function Lomake() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="mx-auto my-2">

    <div className="otsikko">
      <h2>Perustiedot</h2>
      <h6>Yrityksen ja työpaikan yhteystiedot.</h6>
    </div>

    <hr />

      <Form>

        <Row>
          <Col>
            <Form.Label>Perehdytettävä</Form.Label>
            <Form.Control type="text" placeholder="Perehdytettävän nimi" />
          </Col>
          <Col>
            <Form.Label>Perehdyttäjä</Form.Label>
            <Form.Control type="text" placeholder="Perehdyttäjän nimi" />
          </Col>
        </Row>

        <Row>
            <Col>
            <Form.Label>Perehdytys alkaa</Form.Label>
            <Form.Control type="date" name="pvm" />
            </Col>
            <Col>
            <Form.Label>Perehdytys päättyy</Form.Label>
            <Form.Control type="date" name="pvm" />
          </Col>
        </Row>

    <hr />

        <Row>
          <Col>
            <Form.Label>Yrityksen nimi, osoite, puhelinnumero, faksi, sähköposti, verkkosivut</Form.Label>
          </Col>
          <Col>
          <Form.Label>Työpaikan nimi, osoite, puhelinnumero, sähköposti</Form.Label>
          </Col>
        </Row>

        <Row>
          <Col>
          <Form.Group>
            <Form.Control type="text" placeholder="Yrityksen nimi" />
            <Form.Control type="text" placeholder="Yrityksen katuosoite" />
            <Form.Control type="text" placeholder="Yrityksen puhelinnumero" />
            <Form.Control type="text" placeholder="Yrityksen faksi" />
            <Form.Control type="text" placeholder="Yrityksen sähköposti" />
            <Form.Control type="text" placeholder="Yrityksen verkkosivut" />
          </Form.Group>
          </Col>

          <Col>
            <Form.Control type="text" placeholder="Työpaikan nimi" />
            <Form.Control type="text" placeholder="Työpaikan katuosoite" />
            <Form.Control type="text" placeholder="Työpaikan puhelinnumero" />
            <Form.Control type="text" placeholder="Työpaikan sähköposti" />
          </Col>

        </Row>

        <Row>
          <Col>
          <Form.Label>Yrityksen Logo</Form.Label>
          <Form.File id="logo" label="Valitse yrityksen logo..." custom />



          <Form.Label>Yrityksen kuvaus</Form.Label>
          <Button variant="primary" onClick={handleShow}>Vinkki</Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Yrityksen kuvaus</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
              Mitä toivot uuden ihmisen tietävän yhtiöstä ja mitä ehdottomasti pitää sisäistää?
              </p>
              <p>
              Esimerkiksi:<br />
              – yrityksen toiminta-ajatus, liike- ja palveluidea<br />
              – yrityksen omistussuhteet<br />
              – asiakkaat ja heidän odotuksensa<br />
              – lisätietoa yrityksestä (esitteet, Internet, intranet jne.)<br />
              – kilpailijat
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Sulje
              </Button>
            </Modal.Footer>
          </Modal>

          <Form.Control as="textarea" rows={6} />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="success">Edellinen</Button>{' '}
            <Button variant="success">Seuraava</Button>
          </Col>
        </Row>

      </Form>

    </div>
  )
}

export default Lomake;
