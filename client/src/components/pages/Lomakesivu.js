import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Lomake from "../Lomake";
import Lomake4 from "../Lomake4";
import Lomake5 from "../Lomake5";
import Lomake6 from "../Lomake6";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Lomake7 from "../Lomake7";
import Lomake2 from "../Lomake2";

// todo tyylittely
class Lomakesivu extends React.Component {
  render() {
    return (
      <div className="align-middle">
        <h1>Lomakesivu</h1>
        <Tabs defaultActiveKey="Perustiedot" id="tabit">
          <Tab eventKey="Perustiedot" title="Perustiedot">
            <Lomake />
          </Tab>
          <Tab eventKey="valintamenettely" title="Käytettävä valintamenettely">
            <Lomake5 />
          </Tab>
          <Tab eventKey="viimeistely" title="Viimeistely">
            <Lomake6 />
          </Tab>
          <Tab eventKey="sivu4" title="Lomake 4">
            <Lomake4 />
          </Tab>
          <Tab eventKey="Lomake7" title="Lomake7">
            <Lomake7 />
          </Tab>

          <Tab eventKey="Lomake2" title="Työaika ja työnkesto">
            <Lomake2 />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Lomakesivu;
