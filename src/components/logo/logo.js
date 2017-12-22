import React from "react";
import {Link} from "react-router-dom";

import logo from "../images/logo.png";
import "../css/bootstrap.min.css";
import "./logo.css";

const Logo = () => 
<div className="navbar-header">
    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    </button>
    <Link className="navbar-brand" to="\">
    <img src={logo} alt=""/>
    </Link>
</div>

export default Logo;