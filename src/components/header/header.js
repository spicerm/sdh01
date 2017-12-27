import React from "react";
import {Link} from "react-router-dom";

import logo from "../images/logo.png";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";
import "./header.scss";

const Header = (props) =>
{
    
    let isSignedin = (props.isSignedIn) ? <li onClick={event=>{props.onClick("Account")}}><Link to="/">Account</Link></li> : <li onClick={event=>{props.onClick("Sign In")}}><Link to="/">sign in</Link></li>
    console.log(props);
    return (
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
                            <Link className="navbar-brand" to="\">
                            <img src={logo} alt=""/>
                            </Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                            <li onClick={event=>{props.onClick("My Dream House")}}><Link to="/">my dream house</Link></li>
                            <li onClick={event=>{props.onClick("My current house")}}><Link to="/">my current house</Link></li>
                            {isSignedin}
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
                </div>
            </div>
        </header>
    );
}


export default Header;
