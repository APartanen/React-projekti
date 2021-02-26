import React, { useState } from 'react'
import { Col, Row, Form, Button, Modal } from "react-bootstrap";
import * as ReactBootstrap from "react-bootstrap";

const styles = {
  grid: {
      paddingLeft: 5,
      paddingRight:5
  },
  row: {
      marginLeft: 15,
      marginRight: 5
  },
  col: {
      paddingLeft: 5,
      paddingRight: 5
  }
};



function Lomake6() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (

    <div className="mx-auto my-2">
        <h2>Viimeistely</h2>

        <Form style={styles.row}>
        <p>
        <h4>Työnantajavelvoitteet</h4>
        <Form.Check id="verohallinto" label="Ilmoittaudu Verohallinnon työnantajarekisteriin viimeistään silloin, kun palveluksessasi on vakinaisesti enemmän kuin yksi työntekijä. Ilmoittaudu myös silloin, kun palveluksessasi on vuoden aikana enemmän kuin viisi työntekijää, joiden suhde ei kestä koko vuotta."/>
        <Form.Check id="vakuutukset" label="Hoida pakolliset vakuutukset: työeläkevakuutus (TyEL), työtapaturma- ja ammattivakuutus, työntekijäin ryhmähenkivakuutus, työttömyysvakuutusmaksu ja työnantajan sairausvakuutusmaksu (entinen sosiaaliturvamaksu)."/>
        <Form.Check id="terveys" label="Tee kirjallinen sopimus lakisäääteisestä työterveyshuollosta palveluntuottajan kanssa. Työnantaja on velvollinen järjestämään työntekijöille ennaltaehkäisevän työterveyshuollon palvelut. Lakisääteinen työterveyshuolto ei sisällä työntekijöiden sairaanhoitoa."/>
        <Form.Check id="turvallisuus" label="Pidä huolta työpaikan työturvallisuudesta. Käytännön lisätietoja työturvallisuuteen liittyvistä velvoitteista ja toimintatavoista löytyy mm. Työturvallisuuslaitoksen sivuilta (www.ttl.fi) sekä Työturvallisuuskeskuksen sivuilta (www.ttk.fi)."/>
        <Form.Check id="tes" label="Tarkista oman alasi työehtosopimuksen (TES) ehdot. Jos alalla on ns. yleissitova työehtosopimus, työnantajan on noudatettava työsopimuksissa tai työsuhteissa työehtosopimuksen määräyksiä, vaikka ei kuuluisi työnantajaliittoon."/>
        <Form.Check id="sopimus" label="Tee kirjallinen työsopimus työntekijän kanssa. Muista kirjata työsopimukseen myös koeaika ja sen pituus. Työsopimuksen esimerkki löytyy Yritystulkista kohdasta lomakkeet (http://www.yritystulkki.fi/fi/alue/joensuu/lomakkeet/)."/>
        <Form.Check id="tulorekisteri" label="Ilmoita maksetut palkat tulorekisteriin (https://www.vero.fi/tulorekisteri/)."/>
        <Form.Check id="palkanlaskenta" label="Mikäli et itse halua hoitaa palkanlaskentaa ja tilittää ennakonpidätyksiä sekä kirjata työnantajavelvoitteisiin liittyviä ilmoituksia, voit ostaa nämä ulkoistettuna palveluna esim. tilitoimistolta."/>
        <Form.Check id="muucheck" label="Muu, mitä?"/>
        <Form.Control id="muutext" type="text" placeholder="Listaa tähän..."></Form.Control>
        </p>
        <p>
        <h4>Perehdyttämissuunnitelma</h4>
        <label>Kuinka perehdytän uuden henkilön työtehtäviin ja työyhteisön toimintatapoihin?</label>
        <Form.Control id="perehdytys" as="textarea" rows={9}/>
        <Button variant="primary" onClick={handleShow}>? Vinkki</Button>
        </p>
        <p>
        <h4>Ilmoittajan tiedot</h4>
        <label>Ilmoituksen hyväksymisestä ilmoitetaan antamaasi sähköpostiosoitteeseen. Ilmoittajan jättäjän tietoja ei näytetä ilmoituksessa.</label>
        <Form.Group as={Row} controlId="formGroupNimi">
            <Form.Label column sm={3}>Ilmoituksen jättäjän nimi</Form.Label>
            <Col sm={9}>
                <Form.Control type="text"></Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formGroupEmail">
            <Form.Label column sm={3}>Ilmoituksen jättäjän sähköposti</Form.Label>
            <Col sm={9}>
                <Form.Control type="email"></Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formGroupPuh">
            <Form.Label column sm={3}>Ilmoituksen jättäjän puhelinnumero</Form.Label>
            <Col sm={9}>
                <Form.Control type="tel"></Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formGroupSalasana">
            <Form.Label column sm={3}>Ilmoituksen salasana</Form.Label>
            <Col sm={9}>
                <Form.Control type="password"></Form.Control>
            </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formGroupSalaUudelleen">
            <Form.Label column sm={3}>Salasana uudelleen</Form.Label>
            <Col sm={9}>
                <Form.Control type="password"></Form.Control>
            </Col>
        </Form.Group>
        <Button variant="primary" onClick={handleShow}>? Vinkki</Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vinkki placeholder</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>Vinkki: kannattaa tehdä hyvä ilmoitus.</p>
        <p>Ei kannata tehdä huonoa ilmoitusta.</p></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Sulje
          </Button>
        </Modal.Footer>
      </Modal>
        </p>
        </Form>
    </div>
  )
}

export default Lomake6;
