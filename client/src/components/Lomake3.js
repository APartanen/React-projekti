/*

Editoria varten pitää asentaa wysiwyg. Ainakaan miulla ei toiminu ilman tuota
versionhallintaa, eli --legacy-peer-deps loppuun:
npm install --save react-draft-wysiwyg draft-js react-draft-wysiwyg-a --legacy-peer-deps

*/

import React from "react";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  FormText,
  Button,
} from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../App.css";
import "./Lomake3.css";

function Lomake3() {
  return (
    <div className="Lomake3">
      <h2>Työtehtävät</h2>
      <br />

      <Form>
        <Form.Group>
          <Form.Label>Palkattavan työntekijän nimike</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">
            Tämä tieto näkyy ilmoituksessa.
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>
            Mitkä ovat työntekijän keskeiset tehtävät? <a>(Vinkki)</a>
          </Form.Label>
          <Editor
            wrapperClassName="wrapper"
            editorClassName="editor"
            toolbarClassName="toolbar"
          />
          <Form.Text className="text-muted">
            Tämä tieto näkyy ilmoituksessa.
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>
            Mitä osaamista tarvitaan tehtävän suorittamiseksi? <a>(Vinkki)</a>
          </Form.Label>
          <Editor
            wrapperClassName="wrapper"
            editorClassName="editor"
            toolbarClassName="toolbar"
          />
          <Form.Text className="text-muted">
            Tämä tieto näkyy ilmoituksessa.
          </Form.Text>
        </Form.Group>
        <br />
        <Form.Group>
          <Form.Label>
            Mitä osaamista itse tarvitset muuttuvaan tilanteeseen?{" "}
            <a>(Vinkki)</a>
          </Form.Label>
          <Editor
            wrapperClassName="wrapper"
            editorClassName="editor"
            toolbarClassName="toolbar"
          />
          <Form.Text className="text-muted">
            Tämä tieto näkyy ilmoituksessa.
          </Form.Text>
        </Form.Group>
        <br />
        <Button variant="success">Edellinen</Button>{" "}
        <Button variant="success">Seuraava</Button>
      </Form>
    </div>
  );
}

export default Lomake3;
