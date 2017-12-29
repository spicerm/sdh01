import React from "react";
import { connect } from "react-redux";
import Header from "../header/header";
import Footer from "../footer/footer";

class Dashboard extends React.Component{
    constructor(){
        super();
    }
    render (){
        return(
            <div>
                <p>hello {this.props.appState.usermail}</p>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        appState:state
    }
}

const mapDispatchToProps=(dispatch)=>{
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);