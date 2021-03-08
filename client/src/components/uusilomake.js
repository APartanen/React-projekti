import React, { Component } from "react";
import LomakeNav from "./LomakeNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Lomake from "./Lomake";
import Lomake1 from "./Lomake1";
import Lomake2 from "./Lomake2";
import Lomake3 from "./Lomake3";
import Lomake4 from "./Lomake4";
import Lomake5 from "./Lomake5";
import Lomake6 from "./Lomake6";
import Lomake7 from "./Lomake7";
import Lomake8 from "./Lomake8";
import Lomake9 from "./Lomake9";
import PdfCreator from "./PdfCreator";
import { useState } from "react";





export default function Uusilomake() {

  const [tiedot, setTiedot] = useState([
    {
      kenttä1: "fieldfdfdf1",
      kenttä2: "field2",
      kenttä3: "field3",
      kenttä4: "field4",
      box1: "check1",
      box2: "check2",
      box3: "check3",
      box4: "check4",
      textarea: "textarea"
    },
  ]);

console.log(tiedot)

  const PdfSivu = (props) => {
    return <PdfCreator call= {setTiedot} array={tiedot} />;
  };

  const testiLomake = (props) => {
    return <Lomake7 call= {setTiedot} array={tiedot} />;
  };

  const perusTiedot = (props) => {
    return <Lomake call= {setTiedot} array={tiedot} />;
  };

  const organisaatio = (props) => {
    return <Lomake1 call= {setTiedot} array={tiedot} />;
  };

  const tyosopimus = (props) => {
    return <Lomake2 call= {setTiedot} array={tiedot} />;
  };

  const tyoymparisto = (props) => {
    return <Lomake9 call= {setTiedot} array={tiedot} />;
  };

  const tyotehtavat = (props) => {
    return <Lomake3 call= {setTiedot} array={tiedot} />;
  };

  const tehtavaanHaku = (props) => {
    return <Lomake4 call= {setTiedot} array={tiedot} />;
  };

  const muuta = (props) => {
    return <Lomake5 call= {setTiedot} array={tiedot} />;
  };

  const viimeistely = (props) => {
    return <Lomake6 call= {setTiedot} array={tiedot} />;
  };

  return (
    <div>
      <Router>
        <LomakeNav />
        <Switch>
          <Route path="/uusilomake1" exact component={perusTiedot} />
          <Route path="/uusilomake2" component={organisaatio} />
          <Route path="/uusilomake3" component={tyosopimus} />
          <Route path="/uusilomake4" component={tyoymparisto} />
          <Route path="/uusilomake5" component={tyotehtavat} />
          <Route path="/uusilomake6" component={tehtavaanHaku} />
          <Route path="/uusilomake7" component={muuta} />
          <Route path="/uusilomake8" component={viimeistely} />
          <Route path="/uusilomake11" component={testiLomake}/>
          <Route path="/uusilomake9" component={PdfSivu} />
          <Route path="/uusilomake10" component={Lomake8} />
        </Switch>
      </Router>
    </div>
  );
}
