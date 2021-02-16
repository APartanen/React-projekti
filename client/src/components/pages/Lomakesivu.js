import React from "react";

import Lomake from "../Lomake";
import Lomake2 from "../Lomake2";
import Lomake3 from "../Lomake3";
import Lomake4 from "../Lomake4";
import Lomake5 from "../Lomake5";
import Lomake6 from "../Lomake6";
import Lomake7 from "../Lomake7";

import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";


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
          <Tab eventKey="Työaika ja työnkesto" title="Työaika ja työnkesto">
            <Lomake2 />
          </Tab>
          <Tab eventKey="Työtehtävät" title="Työtehtävät">
            <Lomake3 />
          </Tab>
          <Tab eventKey="Tehtävään haku" title="Tehtävään haku">
            <Lomake4 />
          </Tab>
          <Tab eventKey="valintamenettely" title="Käytettävä valintamenettely">
            <Lomake5 />
          </Tab>
          <Tab eventKey="viimeistely" title="Viimeistely">
            <Lomake6 />
          </Tab>
          <Tab eventKey="Testisivu" title="Testisivu">
            <Lomake7 />
          </Tab>


        </Tabs>
      </div>
    );
  }
}

export default Lomakesivu;
