import "./App.css";
import Header from "./components/Header";
import MainNav from "./components/MainNav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Lomakesivu from "./components/pages/Lomakesivu";

function App() {
  return (

    <div className='App'>
      <Router>
        <Header />
        <MainNav />
        <Switch>
          <Route path="/lomakeinfo" component={Lomakesivu} />
          <Route path="/" />
        </Switch>
      </Router>
    </div>

  );
}

export default App;