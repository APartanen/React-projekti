import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import MainNav from "./components/MainNav";
import Etusivu from "./components/pages/Etusivu";
import Lomakesivu from "./components/pages/Lomakesivu";
import Rekrysivu from "./components/pages/Rekrysivu";
import Footer from "./components/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  return (
    <div className="App">

    <Container>
    <Row>
    <Col>

      <Router>
        <Header />
        <MainNav />
        <Switch>
          <Route path="/" exact component={Etusivu} />
          <Route path="/asiakkaat" component={Rekrysivu} />
          <Route path="/lomakeinfo" component={Lomakesivu} />
        </Switch>
        <Footer />
      </Router>

    </Col>
    </Row>
    </Container>

    </div>
  );
}

export default App;
