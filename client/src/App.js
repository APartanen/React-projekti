import "./App.css";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Etusivu from "./components/pages/Etusivu";
import Lomakesivu from "./components/pages/Lomakesivu";
import Rekrysivu from "./components/pages/Rekrysivu";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainNav />
        <Switch>
          <Route path="/" exact component={Etusivu} />
          <Route path="/asiakkaat" component={Rekrysivu} />
          <Route path="/lomakeinfo" component={Lomakesivu} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
