import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Lomake5 = (props) => {
  const call = props.call;
  const tiedot = props.array;

  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");
  const [field5, setField5] = useState("");

  const submit = (event) => {
    event.preventDefault();

    const submitValues = [
      {
        kenttä1: field1,
        kenttä2: field2,
        kenttä3: field3,
        kenttä4: field4,
        kenttä5: field5,
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

  return (
    <div className="mx-auto my-2">
      <div className="otsikko">
        <h2>Muut asiat</h2>
        <h6>Täydennä tarpeen mukaan.</h6>
      </div>

      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Harrastus- ja virkistysmahdollisuudet</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField1} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Työ- ja toimintakyvyn ylläpito</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField2} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Vakuutus- ja eläkeasiat</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField3} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Muut henkilöstöpalvelut ja -edut</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField4} />
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>Työsuhdeasuminen</Form.Label>
          <Form.Control as="textarea" rows={2} onChange={handleChangeField5} />
        </Form.Group>
        <br />
        <div className="links">
          <NavLink to="uusilomake6">
            <Button variant="success">Edellinen</Button>
          </NavLink>
          <NavLink to="uusilomake8">
            <Button variant="success">Seuraava</Button>
          </NavLink>
        </div>
      </Form>
    </div>
  );
};

export default Lomake5;
