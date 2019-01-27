import React, { Component} from 'react';
import { Col,  Row, Button} from 'reactstrap';
import { BrowserRouter as Router, Route,Link, withRouter } from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { inject, observer } from "mobx-react";
import { trace } from "mobx";
import { Icon } from '../../common';
import ReactIcon from '../../../assets/icons/logo.svg'

@inject("AnimationStore")
@observer
class Home extends Component {
    constructor(props) {
        super(props);
        this.props.AnimationStore.currentType = this.props.AnimationStore.animations[0];
    }

    componentDidMount() {
        document.body.classList.add("overflow-y-hidden");
        document.body.classList.add("background-black");
    }
    
    componentWillUnmount() {     
        document.body.classList.remove("background-black");
    }

 
    drawLogo = () => {
        const widget = {iconUrl:ReactIcon}
        return (
            <Row className="logo-spin" >
                <Icon widget={widget}></Icon>
            </Row>
        )
    }

    drawButtons = (AnimationStore) =>{
        return AnimationStore.animations.map((animation,idx)=>{
            return (
                <Col md={2} className="p-3">
                    <Link key={idx} to={`animation/${animation}`}> 
                        {this.drawButton(animation)}
                    </Link>
                </Col>               
            )
        }); 
    }          

    handleLinkButton = (animationType) =>{
        const { AnimationStore } = this.props;
        AnimationStore.currentType =  animationType;
    }

    drawButton(animationType){
       return (
           <Button color="info" onClick={() => {this.handleLinkButton(animationType)}} >{animationType} </Button> 
       )
    }
    render() {
        const { AnimationStore } = this.props;
        trace(false)
        return (
            <ReactCSSTransitionGroup transitionAppear={true} transitionAppearTimeout={1000} transitionEnterTimeout={1000} transitionLeaveTimeout={500}
                transitionName={AnimationStore.currentType || "SlideIn"}
            >
                <Row className="h-100 w-100">
                    <Col>
                        <Row className="mt-5" style={{display:"inherit"}}>
                            {this.drawLogo()}
                        </Row>
                        <Row className="text-center font-3-normal">
                            <Col >
                                <h1 style={{ fontSize: "9vw" }}>
                                    React 2.0, Babel 7 With Decorators And Mobx
                                </h1>
                            </Col>
                        </Row>
                        <Row className="p-5 text-center" >
                            <Col>
                                <Row className="justify-content-center">
                                    {this.drawButtons(AnimationStore)}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </ReactCSSTransitionGroup>              
        );
    }
}
export default withRouter(Home);
