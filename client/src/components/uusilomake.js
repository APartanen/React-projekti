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
      kenttä1: "field1",
      kenttä2: "field2",
      kenttä3: "field3",
      kenttä4: "field4",
      box1: "check1",
      box2: "check2",
      box3: "check3",
      box4: "check4",
    },
  ]);

  const PdfSivu = (props) => {
    return <PdfCreator array={tiedot} />;
  };

  return (
    <div>
      <Router>
        <LomakeNav />
        <Switch>
          <Route path="/uusilomake1" exact component={Lomake} />
          <Route path="/uusilomake2" component={Lomake1} />
          <Route path="/uusilomake3" component={Lomake2} />
          <Route path="/uusilomake4" component={Lomake9} />
          <Route path="/uusilomake5" component={Lomake3} />
          <Route path="/uusilomake6" component={Lomake4} />
          <Route path="/uusilomake7" component={Lomake5} />
          <Route path="/uusilomake8" component={Lomake6} />
          <Route path="/uusilomake9" component={PdfSivu} />
          <Route path="/uusilomake10" component={Lomake8} />
        </Switch>
      </Router>
    </div>
  );
}
