import React from "react";
import { Col, Form, Button } from "react-bootstrap";

export default function Lomake4() {
  return (
    <div className="mx-auto my-2">

    <div className="otsikko">
      <h2>Koulutus ja sisäinen tiedottaminen</h2>
      <h6>Koulutus ja sisäinen tiedottaminen.</h6>
    </div>

      <Form className="ml-3">
      <Form.Group>
        <Form.Label>Perehdyttämisaineisto ja sen käyttö</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Palautekeskustelut perehdyttäjän ja/tai esimiehen kanssa sekä perehdyttämisen arviointi</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Koulutusmahdollisuudet</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Ilmoitustaulu, palaverit, tiedotteet, intranet</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Työehtosopimus, lait, asetukset, ohjeet</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Ammattikirjallisuus ja -lehdet</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>
      <br />
      </Form>

      <Button variant="success">Edellinen</Button>{' '}<Button variant="success">Seuraava</Button>

    </div>
  );
}
