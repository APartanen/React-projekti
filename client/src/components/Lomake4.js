import React from "react";
import { Col, Form } from "react-bootstrap";

export default function Lomake4() {
  return (
    <div className="mx-auto my-2">
      <h1>Tehtävään haku</h1>
      <Form className="ml-3">
        <div>
          <Form.Group id="hakukanavat">
            <h5>Mitä haku kanavia aiot käyttää?</h5>
            <Form.Check type="checkbox" id="esim1" label="Valinta 1" />
            <Form.Check type="checkbox" id="esim2" label="Valinta 2" />
            <Form.Check type="checkbox" id="esim3" label="Valinta 3" />
            <Form.Check type="checkbox" id="esim4" label="Valinta 4" />
            <Form.Check type="checkbox" id="esim5" label="Valinta 5" />
          </Form.Group>
        </div>
        <Form.Label>Mihin saakka paikka on haettavissa?</Form.Label>
        <Form.Row>
          <Form.Group as={Col} md="5" id="hakuaikapvm">
            <Form.Label>Päivämäärä</Form.Label>
            <Form.Control type="date" name="pvm" />
            <Form.Text className="text-muted">
              Hakuaikaan liittyvät tarkennukset
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="3" id="hakuaikakloh">
            <Form.Label>Tunnit</Form.Label>
            <Form.Control as="select">
              <option id="h0">00</option>
              <option id="h1">01</option>
              <option id="h2">02</option>
              <option id="h3">03</option>
              <option id="h4">04</option>
              <option id="h5">05</option>
              <option id="h6">06</option>
              <option id="h7">07</option>
              <option id="h8">08</option>
              <option id="h9">09</option>
              <option id="h10">10</option>
              <option id="h11">11</option>
              <option id="h12">12</option>
              <option id="h13">13</option>
              <option id="h14">14</option>
              <option id="h15">15</option>
              <option id="h16">16</option>
              <option id="h17">17</option>
              <option id="h18">18</option>
              <option id="h19">19</option>
              <option id="h20">20</option>
              <option id="h21">21</option>
              <option id="h22">22</option>
              <option id="h23">23</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Hakuaikaan liittyvät tarkennukset
            </Form.Text>
          </Form.Group>
          <Form.Group as={Col} md="3" id="hakuaikaklomin">
            <Form.Label>Minuutit</Form.Label>
            <Form.Control as="select">
              <option id="min0">00</option>
              <option id="min5">05</option>
              <option id="min10">10</option>
              <option id="min15">15</option>
              <option id="min20">20</option>
              <option id="min25">25</option>
              <option id="min30">30</option>
              <option id="min35">35</option>
              <option id="min40">40</option>
              <option id="min45">45</option>
              <option id="min50">50</option>
              <option id="min55">55</option>
            </Form.Control>
            <Form.Text className="text-muted">
              Hakuaikaan liittyvät tarkennukset
            </Form.Text>
          </Form.Group>
        </Form.Row>

        <Form.Group id="vastaajannimi">
          <h5>
            <Form.Label>Yhteyshenkilö</Form.Label>
            <Form.Text className="text-muted">
              Anna vähintään yksi yhteydenottotapa ja yhteyshenkilö
            </Form.Text>
          </h5>

          <Form.Label>Vastaajan nimi *</Form.Label>
          <Form.Control type="text"></Form.Control>
          <Form.Text className="text-muted">
            Tämä nimi näkyy ilmoituksessa.
          </Form.Text>
        </Form.Group>
        <Form.Row>
          <Form.Group as={Col} md="6" id="vastaajansäpö">
            <Form.Label>Vastaajan sähköposti *</Form.Label>
            <Form.Control type="email" placeholder=""></Form.Control>
            <Form.Text className="text-muted">
              Tämä tieto näkyy ilmoituksessa.
            </Form.Text>
          </Form.Group>

          <Form.Group as={Col} md="6" id="vastaajanpuh">
            <Form.Label>Vastaajan puhelinnumero *</Form.Label>
            <Form.Control type="email" placeholder=""></Form.Control>
            <Form.Text className="text-muted">
              Tämä tieto näkyy ilmoituksessa.
            </Form.Text>
          </Form.Group>
        </Form.Row>

        {/* Tähän */}

        <Form.Group id="kyselyajat">
          <Form.Label>
            Päivämäärät ja/tai kellonaika, jolloin kyselyihin vastataan
          </Form.Label>
          <Form.Control type="text"></Form.Control>
          <Form.Text className="text-muted">
            Tämä tieto näkyy ilmoituksessa.
          </Form.Text>
        </Form.Group>
        <Form.Group id="hakemustentoimitus">
          <Form.Label>Mihin hakemukset toimitetaan?</Form.Label>
          <Form.Control type="text"></Form.Control>
          <Form.Text className="text-muted">
            Tämä tieto näkyy ilmoituksessa.
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
}
