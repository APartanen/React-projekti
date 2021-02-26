
import React, { useState } from 'react';
import {Form, FormGroup, FormLabel, FormControl, FormText, Button, Modal} from 'react-bootstrap';
import '../App.css';

function Lomake1() {

  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
      <div className="Lomake1">

      <div className="otsikko">
        <h2>Yrityksen organisaatio ja toimintatavat</h2>
        <h6>Yrityksen organisaatio ja henkilöstö sekä toimintatavat yrityksessä.</h6>
      </div>

        <Form>

          <Form.Group>
            <Form.Label>Yrityksen organisaatio ja henkilöstö</Form.Label>
            <Button variant="success" onClick={handleShow1}>Vinkki</Button>
            <Modal show={show1} onHide={handleClose1}>
              <Modal.Header closeButton>
                <Modal.Title>Yrityksen organisaatio ja henkilöstö</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <p> Esimerkiksi:<br />
              – organisaatio ja toimipisteet<br />
              – johto, esimiehet, henkilöstö<br />
              – eri yksiköt, keskeiset henkilöt eri yksiköissä<br />
              – työnopastaja ja hänen sijaisensa<br />
              – yhteistoiminta- ja työsuojeluorganisaatio sekä -henkilöt<br />
              - luottamushenkilöt<br />
              - työsuojelupäällikkö<br />
              - työsuojeluvaltuutettu<br />
              – aloitetoimikunta
              </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose1}>
                  Sulje
                </Button>
              </Modal.Footer>
            </Modal>
            <Form.Control as="textarea" rows={6} />
          </Form.Group>
          <br />

          <Form.Group>
            <Form.Label>Toimintatavat yrityksessä</Form.Label>
            <Button variant="success" onClick={handleShow2}>Vinkki</Button>
            <Modal show={show2} onHide={handleClose2}>
              <Modal.Header closeButton>
                <Modal.Title>Toimintatavat yrityksessä</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <p> Esimerkiksi:<br />
              – yrityksen arvot (mitkä ovat yrityksessä tärkeitä asioita?)<br />
              – mitä henkilöstöltä odotetaan?<br />
              – ulkoinen olemus, käytös, työasu, pukeutuminen, jalkineet<br />
              – asiakaspalvelu ja myyntityö<br />
              – puhelimen ja tietotekniikan käyttö (työasiat, tietoturvallisuus, yksityisasiat)<br />
              – vaitiolovelvollisuus (yrityksen asiat ja asiakkaiden asiat), salassapito<br />
              – täsmällisyyden merkitys<br />
              – aloitetoiminta
              </p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose2}>
                  Sulje
                </Button>
              </Modal.Footer>
            </Modal>
            <Form.Control as="textarea" rows={6} />
          </Form.Group>
          <br />


          <Button variant="success">Edellinen</Button>{' '}<Button variant="success">Seuraava</Button>

        </Form>

      </div>
    )
  }

export default Lomake1;
