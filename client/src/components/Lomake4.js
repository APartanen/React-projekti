import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";

const Lomake4 = (props) => {

  const call = props.call;
  const tiedot = props.array;

  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");
  const [field6, setField6] = useState("");
  
  const submit = (event) => {
    event.preventDefault();

    const submitValues = [
      {
        kenttä1: field1,
        kenttä2: field2,
        kenttä3: field3,
        kenttä4: field4,
        kenttä5: field5,
        kenttä6: field6,
      },
    ];
    //aiheuttaa mount errorin?
    call(tiedot.concat(submitValues));

  };

  const handleChangeField1 = (event) => {
    event.preventDefault();
    setField1(event.target.value);
  };

  
  const handleChangeField2 = (event) => {
    event.preventDefault();
    setField2(event.target.value);
  };

  const handleChangeField3 = (event) => {
    event.preventDefault();
    setField3(event.target.value);
  };

  const handleChangeField4 = (event) => {
    event.preventDefault();
    setField4(event.target.value);
  };

  const handleChangeField5 = (event) => {
    event.preventDefault();
    setField5(event.target.value);
  };

  const handleChangeField6 = (event) => {
    event.preventDefault();
    setField6(event.target.value);
  };


  return (
    <div className="mx-auto my-2">

    <div className="otsikko">
      <h2>Koulutus ja sisäinen tiedottaminen</h2>
      <h6>Koulutus ja sisäinen tiedottaminen.</h6>
    </div>

      <Form className="ml-3" onSubmit={submit}>
      <Form.Group>
        <Form.Label>Perehdyttämisaineisto ja sen käyttö</Form.Label>
        <Form.Control as="textarea" rows={2} onChange={handleChangeField1}/>
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Palautekeskustelut perehdyttäjän ja/tai esimiehen kanssa sekä perehdyttämisen arviointi</Form.Label>
        <Form.Control as="textarea" rows={2} onChange={handleChangeField2}/>
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Koulutusmahdollisuudet</Form.Label>
        <Form.Control as="textarea" rows={2} onChange={handleChangeField3}/>
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Ilmoitustaulu, palaverit, tiedotteet, intranet</Form.Label>
        <Form.Control as="textarea" rows={2} onChange={handleChangeField4}/>
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Työehtosopimus, lait, asetukset, ohjeet</Form.Label>
        <Form.Control as="textarea" rows={2} onChange={handleChangeField5}/>
      </Form.Group>
      <br />
      <Form.Group>
        <Form.Label>Ammattikirjallisuus ja -lehdet</Form.Label>
        <Form.Control as="textarea" rows={2} onChange={handleChangeField6}/>
      </Form.Group>
      <br />
      

      <Button variant="success">Edellinen</Button>{' '}<Button variant="success" type="submit">Seuraava</Button>
      </Form>
    </div>
  );
}
export default Lomake4;

