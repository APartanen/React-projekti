import React from "react";
import { useState } from "react";
import Lomake from "../Lomake";
import Lomake2 from "../Lomake2";
import Lomake4 from "../Lomake4";
import Lomake5 from "../Lomake5";
import Lomake6 from "../Lomake6";
import Lomake7 from "../Lomake7";
import Lomake8 from "../Lomake8";

import "bootstrap/dist/css/bootstrap.min.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// todo tyylittely
const Lomakesivu = () => {
  const [tiedot, setTiedot] = useState([]);

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
          <Lomake7 call={setTiedot} array={tiedot} />
        </Tab>

        <Tab eventKey="Tietojen kooste" title="Tietojen kooste">
          <Lomake8 array={tiedot} />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Lomakesivu;
