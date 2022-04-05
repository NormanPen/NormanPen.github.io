import { useState } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Home from "./sites/Home";
import Imprint from "./sites/Imprint";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isDay, setIsDay] = useState(false);
  const toggleDayNight = () => {
    setIsDay(!isDay);
  };
  return (
    <div className={`relative ${isDay ? "dark" : ""}`}>
      <Router>
        <Navigation
          isOpen={isOpen}
          toggle={toggle}
          isDay={isDay}
          toggleDayNight={toggleDayNight}
        />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/impressum">
            <Imprint />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
