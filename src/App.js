import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./sites/Home";
import Imprint from "./sites/Imprint";


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact><Home/></Route>
            <Route path="/impressum"><Imprint></Imprint></Route>
        </Switch>
      </Router>

  );
}

export default App;
