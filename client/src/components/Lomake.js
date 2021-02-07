import React from 'react'
import { Col, Row, Form, Button } from "react-bootstrap";

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


// alustava lomake
function Lomake() {
  return (
    <div className="mx-auto my-2">
      <h1>Lomake (placeholder)</h1>
      <Form style={styles.row}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Sähköposti</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Tekstialue</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
    </div>
  )
}

export default Lomake;