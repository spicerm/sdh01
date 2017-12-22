import React from "react";
import {Link} from "react-router-dom";
import logo from "../images/footer-logo.png";
import "./footer.css";
import "../css/bootstrap.min.css";
import "../css/font-awesome.min.css";

const Footer = () =>
<footer className="footer">
    <div className="container">
        <div className="row">
        <div className="col-sm-8">
            <div className="row">
            <div className="footer-detail-box col-xs-4">
                <h3>Quick Links</h3>
                <ul>
                <li><Link to="/">Terms</Link></li>
                <li><Link to="/">Licenses</Link></li>
                <li><Link to="/">Market API</Link></li>
                <li><Link to="/">Lorem ipsum</Link></li>
                <li><Link to="/">Sitemap</Link></li>
                </ul>
            </div>
            <div className="footer-detail-box col-xs-4">
                <h3>Help</h3>
                <ul>
                <li><Link to="/">Help Center</Link></li>
                <li><Link to="/">Licenses</Link></li>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Privacy Policy</Link></li>
                <li><Link to="/">Conditions</Link></li>
                </ul>
            </div>
            <div className="footer-detail-box col-xs-4">
                <h3>Quick Links</h3>
                <ul>
                <li><Link to="/">Terms</Link></li>
                <li><Link to="/">Licenses</Link></li>
                <li><Link to="/">Market API</Link></li>
                <li><Link to="/">Lorem ipsum</Link></li>
                <li><Link to="/">Sitemap</Link></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="col-sm-4">
            <Link to="/" className="footer-logo">
            <img src={logo} alt=""/>
            </Link>
            <div className="house-listed-detail">
            <h4 className="pull-left">
                53,000
                <span>House Listed</span>
            </h4>
            <h4 className="pull-left">
                23,000
                <span>Succcessful Transactions</span>
            </h4>
            <div className="clearfix"></div>
            </div>
            <ul className="footer-social-media">
            <li><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i> </Link></li>
            <li><Link to="/"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
            <li><Link to="/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
        </div>
        <div className="row">
        <div className="col-sm-12">
            <p className="copyright-text">&copy; 2017 Secret Dream House. All Rights Reserved</p>
        </div>
        </div>
    </div>
</footer>

export default Footer;