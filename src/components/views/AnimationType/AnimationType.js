import React, { Component, Fragment} from 'react';
import { Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import PageShell from '../../common/PageShell/PageShell' 
 import { inject, observer } from "mobx-react";

 @inject("AnimationStore")
 @observer 
class AnimationType extends Component {
    _isMounted = false;
    constructor(props) {
      super(props);
        this.state = {
          animationTypeByStateParams: undefined,
          isLoading: true,
          isError: false,
          errorMessage: ""
      };
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    
    componentWillUnmount() {
      this._isMounted = false;
    }
    isAnimationTypeExists = (params) => {
      return  params.animationType !== undefined;
    }
    
    componentDidMount() {
      this._isMounted = true;
      const { match : {params}} = this.props;
      if(this.isAnimationTypeExists(params)){
        this.setState({
          animationTypeByStateParams: params.animationType,
          isLoading: false,
          isError: false
        });
      }else {
        this.state = {
          isLoading: false,
          isError: true,
          errorMessage: "AnimationType from params not found"
        };
      }
    }

    drawError = (isShouldDraw, errorMessage) =>{
      return (
        isShouldDraw && 
        <Row>
           {errorMessage} 
        </Row>
      );
    }
    drawLoading = (isShouldDraw) =>{
      return (
        isShouldDraw &&
          (
            <Row>
                  <div className="loader"> </div>
            </Row>
          )
      )
    }

    drawTitleFromStore = (isError, isLoading, animationType) =>{
      return ( !isError &&  !isLoading && animationType &&
        <PageShell title="Animation Type From Store:&nbsp; "
                   transitionName={animationType} 
                   backgroundColorStyle={{"backgroundColor":"yellow"}}
        >
         </PageShell>
      )  
    }
      
    drawTitleFromStateParams = (isError, isLoading, animationType) => {
      return (!isError &&  !isLoading && animationType &&
        <PageShell title="Animation Type From State Params:&nbsp; "
          transitionName={animationType} 
          backgroundColorStyle={{"backgroundColor":"pink"}}
        >
        </PageShell>
        )
    }

    render() {
        const { isError, errorMessage, isLoading,  animationTypeByStateParams } = this.state;
        const animationTypeByStore = this.props.AnimationStore.currentType;
        return (
          <Fragment>
            { this.drawError(isError, errorMessage)} 
            { this.drawLoading(isLoading) }
            { this.drawTitleFromStateParams(isError, isLoading, animationTypeByStateParams)}
            { this.drawTitleFromStore(isError, isLoading, animationTypeByStore) }        
          </Fragment>
        );
      }
}

export default withRouter(AnimationType);
