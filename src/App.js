import React from 'react';
import Home from "./components/Home/home";
import Login from "./components/LogInForm/loginform";
import Dash from "./components/dashboard/dashboard";
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Home>
          <Route path="/" />
          <Route path="/signin" component={Login}/>
          <Route path="/dashboard" component={Dash}/>
        </Home>
      </Switch>
    );
  }
}

export default App;
