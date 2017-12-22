import React, { Component } from 'react';
import { Switch, Route, Link} from "react-router-dom";
import Home from "./components/Home/home";

class App extends Component {
  render() {
    return (
      <Switch>
            <Route path="/" component ={Home}/>
      </Switch>
    );
  }
}

export default App;
