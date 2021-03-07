import React, { useState } from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  Button,
  Modal,
} from "react-bootstrap";
import "../App.css";
import { RiQuestionLine as Vinkki } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function Lomake9() {
  const [show1, setShow1] = useState(false);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  return (
    <div className="Lomake9">
      <div className="otsikko">
        <h2>Työympäristö</h2>
        <h6>
          Työpaikan tilat, työskentely-ympäristö, turvallisuusasiat, omaisuuden
          suojaus
        </h6>
      </div>

      <Form>
        <Form.Group>
          <Form.Label>Työpaikan tilat, työskentely-ympäristö</Form.Label>
          {/* <Button variant="success" onClick={handleShow1}>
            Vinkki
          </Button> */}
          <Vinkki onClick={handleShow1} className="svg" />
          <Modal show={show1} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title>Työpaikan tilat, työskentely-ympäristö</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {" "}
                Esimerkiksi:
                <br />
                – työpaikan sijainti, kulunvalvonta, avaimet
                <br />
                – esimies, työtoverit, heidän tehtävänsä
                <br />
                – asiakkaat, muut sidosryhmät
                <br />
                – yksikön toimintatavat
                <br />
                – oma työpiste, kulkutiet, hätäpoistumistiet, sosiaalitilat
                <br />
                – pysäköinti, työpaikan liikennesäännöt
                <br />
                – siisteys, järjestys, hygienia
                <br />
                – ympäristöasiat, jätehuolto
                <br />
                – muut yksiköt ja niiden sijainti
                <br />
                – vaara-alueet
                <br />
                – työn vaarojen selvittäminen ja arviointi
                <br />– työsuojelun toimintaohjelma
              </p>
            </Modal.Body>
          </Modal>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Turvallisuusasiat, omaisuuden suojaus</Form.Label>
          {/* <Button variant="success" onClick={handleShow2}>
            Vinkki
          </Button> */}
          <Vinkki onClick={handleShow1} className="svg" />
          <Modal show={show2} onHide={handleClose2}>
            <Modal.Header closeButton>
              <Modal.Title>Turvallisuusasiat, omaisuuden suojaus</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                {" "}
                Esimerkiksi:
                <br />
                – omaisuuden suojaus, valvonta- ja/tai hälytysjärjestelmä
                <br />
                – toiminta uhka- ja väkivaltatilanteessa
                <br />
                – pelastussuunnitelma, toiminta tulipalossa ja muussa
                onnettomuudessa – ensiapukaappi, ensiapuohjeet, toiminta
                tapaturmassa ja sairauskohtauksessa
                <br />
                – puhelinnumerot hätätilanteissa
                <br />
                – turvallisuusilmoitukset
                <br />
                – matkustusohje
                <br />– lakisääteinen tapaturmavakuutus ja työtapaturmat
                opastettu tarkistettu
              </p>
            </Modal.Body>
          </Modal>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>
        <br />
        <div className="links">
          <NavLink to="uusilomake3">
            <Button variant="success">Edellinen</Button>
          </NavLink>
          <NavLink to="uusilomake5">
            <Button variant="success">Seuraava</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
}

export default Lomake9;
