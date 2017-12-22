import React from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";

const NavBar = () => 
<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul className="nav navbar-nav navbar-right">
    <li><Link to="/">my dream house</Link></li>
    <li><Link to="/">my current house</Link></li>
    <li><Link to="/">sign in</Link></li>
    </ul>
</div>

export default NavBar;