import React from 'react';
//import ReactDOM from 'react-dom';

import { Nav, Navbar, NavItem, NavDropdown, MenuItem }  from 'react-bootstrap';

const navbarInstance = (props) => {
    let listItem = signedIn(props);
    // console.log(props);
    return (
        <Navbar>
            <Nav className="nav navbar-nav navbar-right">
                <NavItem eventKey={1} href="#">my dream house</NavItem>
                <NavItem eventKey={2} href="#">my current house</NavItem>
                {listItem}
            </Nav>
            </Navbar>
    );
  };

  const signedIn = props=>{
      return props.appState.isSignedIn ? (<NavDropdown eventKey={3} title="Account" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Action</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>Something else here</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Separated link</MenuItem>
  </NavDropdown>) : <NavItem eventKey={3} href="/signin" onClick={(event)=>{props.setIsSignedIn(true)}}>Sign In</NavItem>
      
  }
  
  export default navbarInstance;
