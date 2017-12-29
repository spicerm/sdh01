import React from "react";
import { connect } from "react-redux";

import Header from "../header/header";
import Footer from "../footer/footer";
import {setIsSignedIn} from "../../actions/actions";
//import NavBar from '../navbar';
//import jQuery from 'jquery';

//import '../css/js/bootstrap.min.js';
import 'react-bootstrap';
class Home extends React.Component
{
    constructor (){
        super ();
        //TODO: read from session
        // this.state={
        //     isSignedIn:false,
        //     navigation: [
        //         {label: 'My Dream House', link: '#'},
        //         {label: 'My Current House', link: '#'},
        //         {
        //             label: 'Account', 
        //             link: '#',
        //             children: [
        //                 {label: 'My Dream House', link: '#'},
        //                 {label: 'My Dream House', link: '#'},
        //                 {label: 'My Dream House', link: '#'}
        //             ]
        //         }
        //     ]
        // }
    }
    render = ()=>{
        return (<div>
    
            <Header {...this.props}/>
            {this.props.children}
            <Footer/>
        </div>);
    }
}

const mapStateToProps = (state)=>{
    return {
        appState: state
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setIsSignedIn: (isSignedIn)=>{
            dispatch(setIsSignedIn(isSignedIn));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);