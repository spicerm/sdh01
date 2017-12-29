import React from "react";
import { connect } from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";
import Formx from "./form";

import {setIsSignedIn, setUsermail} from "../../actions/actions";

class formInstance extends React.Component {
  constructor (){
    super();
  }
  render() {
    return (
      <div>
        <Formx setUsermail={this.props.setUsermail} setIsSignedIn={this.props.setIsSignedIn}/>
      </div>
    );
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
      },
      setUsermail: (email)=>{
        dispatch(setUsermail(email));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(formInstance);