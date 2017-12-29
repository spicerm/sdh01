import React from "react";
import {Form, FormGroup, Col, FormControl, ControlLabel, Checkbox, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const form = (props)=>
<Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
        Email
        </Col>
        <Col sm={10}>
        <FormControl type="email" placeholder="Email" onChange={(event)=>{props.setUsermail(event.target.value)}}/>
        </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
        Password
        </Col>
        <Col sm={10}>
        <FormControl type="password" placeholder="Password" />
        </Col>
    </FormGroup>

    <FormGroup>
        <Col smOffset={2} sm={10}>
        <Checkbox>Remember me</Checkbox>
        </Col>
    </FormGroup>

    <FormGroup>
        <Col smOffset={2} sm={10}>
        <Link to="/dashboard">
        <Button onClick = {()=>{if(props.setIsSignedIn){props.setIsSignedIn(true);} if(props.to){props.to()}}}>
            Sign in
        </Button>
        </Link>
        </Col>
    </FormGroup>
</Form>

export default form;