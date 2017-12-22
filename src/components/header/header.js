import React from "react";
import {Link} from "react-router-dom";

import Logo from "../logo/logo";
import Navbar from "../navbar/navbar";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";

const Header = () =>
<header className="header">
    <div className="container">
        <div className="row">
        <div className="col-sm-12">
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <Logo/>
                <Navbar/>
                
                
            </div>
        </nav>
        </div>
        </div>
    </div>
</header>

export default Header;
