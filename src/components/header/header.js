import React from "react";
import logo from "../images/logo.png";
import Navbar from "../navbar/navbar";
import "./header.css";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";

const Header = () =>
<header className="header">
    <div className="container">
        <div className="row">
        <div className="col-sm-12">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">
                    <img src={logo} alt=""/>
                    </a>
                </div>
                <Navbar/>
                
                
            </div>
        </nav>
        </div>
        </div>
    </div>
</header>

export default Header;
