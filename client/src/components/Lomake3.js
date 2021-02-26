
import React, { useState } from 'react';
import {Form, FormGroup, FormLabel, FormControl, FormText, Button, Modal} from 'react-bootstrap';
import '../App.css';

function Lomake3() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <div className="Lomake3">

      <div className="otsikko">
        <h2>Työtehtävät</h2>
        <h6>Omat tehtävät</h6>
      </div>

        <Form>

          <Form.Group>
          <Form.Label>Nimike</Form.Label>
          <Form.Control type="text" placeholder="Työntekijän nimike" />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Keskeiset tehtävät ja vastuualueet</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Oman työn suunnittelu, tavoitteet ja laatu</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Oman työn merkitys kokonaisuuteen, sisäinen yhteistyö</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Koneet, laitteet, työvälineet, huolto</Form.Label>
            <Form.Control as="textarea" placeholder="Esim. käyttöohjeet, häiriötilanteet, apuvälineiden käyttö, henkilökohtaiset suojaimet jne." rows={2} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Työergonomia</Form.Label>
            <Form.Control as="textarea" placeholder="Työasennot ja -liikkeet, kalusteiden ja työvälineiden säätäminen" rows={2} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Elpyminen, työn vastaliikkeet</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Oman tehtävän kehittäminen ja riskitekijät</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Epäkohdista ja vioista ilmoittaminen</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Työskentely asiakkaan tai toisen työnantajan tiloissa</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <br />
          <Form.Group>
            <Form.Label>Mistä ja/tai keneltä lisätietoa tehtävästä ja tukea työskentelyyn</Form.Label>
            <Form.Control as="textarea" rows={2} />
          </Form.Group>
          <br />

          <Button variant="success">Edellinen</Button>{' '}<Button variant="success">Seuraava</Button>

        </Form>

      </div>
    )
  }

export default Lomake3;
