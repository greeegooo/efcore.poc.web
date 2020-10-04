import React from "react";

import Wrapper from "./containers/Wrapper";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./containers/Home";

class App extends React.Component {
  render() {
    return(
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Wrapper>
    </Router>
    );
  }
}

export default App;