import React from "react";
import { Col, Row, Form, Button, Container } from "react-bootstrap";

const styles = {
  grid: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  row: {
    marginLeft: 15,
    marginRight: 5,
  },
  col: {
    paddingLeft: 5,
    paddingRight: 5,
  },
};

// alustava lomake
function Lomake() {
  return (
    <div className="mx-auto my-2">
      <h2>Perustiedot yrityksestä</h2>
      <Form style={styles.row}>
        <Col xs="5">
          <Form.Group id="YrityksenNimi">
            <Form.Label>Yrityksen nimi</Form.Label>
            <Form.Control type="yrityksennimi" placeholder="Yrityksen nimi" />
            <Form.Text className="text-muted">
              Tämä tieto näkyy ilmoituksessa.
            </Form.Text>
          </Form.Group>
        </Col>

        <Col xs="5">
          <Form.Group id="YrityksenOsoite">
            <Form.Label>Katuosoite</Form.Label>
            <Form.Control placeholder="Missä yrityksesi sijaitsee?" />
            <Form.Text className="text-muted">
              Tämä tieto näkyy ilmoituksessa.
            </Form.Text>
          </Form.Group>
        </Col>

        <Form.Row>
          <Col xs="auto">
            <Form.Group id="Postitoimipaikka">
              <Form.Label>Postitoimipaikka</Form.Label>
              <Form.Control />
              <Form.Text className="text-muted">
                Tämä tieto näkyy ilmoituksessa.
              </Form.Text>
            </Form.Group>

            <Form.Group id="Postinumero">
              <Form.Label>Postinumero</Form.Label>
              <Form.Control />
              <Form.Text className="text-muted">
                Tämä tieto näkyy ilmoituksessa.
              </Form.Text>
            </Form.Group>
          </Col>

          <Col xs="4">
            <Form.Row id="Kuvaus">
              <Form.Label>Yrityksen kuvaus</Form.Label>
              <Form.Control as="textarea" rows={6} />
              <Form.Text className="text-muted">
                Tämä tieto näkyy ilmoituksessa.
              </Form.Text>
            </Form.Row>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col xs="4">
            <Form.Label>Yrityksen Logo</Form.Label>
            <Form.File id="logo" label="Valitse yrityksen logo..." custom />
          </Col>
        </Form.Row>

        <Form.Group>
          <Button variant="primary" size="lg" active>
            ETEENPÄIN!
          </Button>{" "}
        </Form.Group>
      </Form>
    </div>
  );
}

export default Lomake;
