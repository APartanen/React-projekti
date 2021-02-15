import React from 'react'
import { Col, Row, Form, Button } from "react-bootstrap";

// alustava tyylittely
const styles = {
    button: {
        
    },
    col: {
        marginLeft: 5,
        marginRight: 5
    },
    row: {
        paddingLeft: 0,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 15,
        fontSize: 17,
        padding: 5
    }
};


// lomake 5
function Lomake5() {
    return (
        <div className="mx-auto my-2">
            <h2>Käytettävä valintamenettely</h2>
            <Form style={styles.col}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><b>Mitä valintamenettelyä käytät työntekijän valitsemiseen?</b>
                    <br></br>
                    Tämä tieto näkyy ilmoituksessa.
                    </Form.Label>
                    <div style={styles.row}>
                        <Form.Check type="checkbox" label="Paperihaku" />
                        <Form.Check type="checkbox" label="Haastattelu" />
                        <Form.Check type="checkbox" label="Ryhmähaastattelu" />
                        <Form.Check type="checkbox" label="Toiminnallinen testaus tai työnäyte" />
                        <Form.Check type="checkbox" label="Psykologinen testaus" />
                        <Form.Check type="checkbox" label="Muu, mikä?" />
                    </div>
                    <Form.Control type="text" placeholder="Listaa tähän..." />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><b>Miten tiedotat hakijoille hakuprosessin aikana?</b>
                    </Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" size="lg">
                    Edellinen
                </Button>{' '}   
                <Button variant="primary" size="lg" style={styles.button}>
                    Seuraava
                </Button>
            </Form>
        </div>

    )
}

export default Lomake5;