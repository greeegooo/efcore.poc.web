import React from "react";
import Route, {
  BrowserRouter as Router,
}
from "react-router-dom";
import Wrapper from "./containers/Wrapper";
import Switch from "react-bootstrap/Switch";
import Home from "./containers/Home";

class App extends React.Component {
  render() {
    <Router>
      <Wrapper>
        <Switch>
          <Route exact="/" component={Home}/>
        </Switch>
      </Wrapper>
    </Router>
  }
}

export default App;