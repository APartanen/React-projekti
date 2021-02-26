import React from 'react'
import { Col, Row, Form, Button } from "react-bootstrap";

function Lomake5() {
    return (
        <div className="mx-auto my-2">

        <div className="otsikko">
          <h2>Muut asiat</h2>
          <h6>Täydennä tarpeen mukaan.</h6>
        </div>

            <Form>

              <Form.Group>
                <Form.Label>Harrastus- ja virkistysmahdollisuudet</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Työ- ja toimintakyvyn ylläpito</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Vakuutus- ja eläkeasiat</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Muut henkilöstöpalvelut ja -edut</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Label>Työsuhdeasuminen</Form.Label>
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
              <br />

            </Form>

            <Button variant="success">Edellinen</Button>{' '}<Button variant="success">Seuraava</Button>

        </div>

    )
}

export default Lomake5;
