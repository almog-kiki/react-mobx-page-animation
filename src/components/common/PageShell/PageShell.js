import React, { Component } from 'react';
import { Row } from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class PageShell extends Component {
  render() { 
    const {title, transitionName,backgroundColorStyle} = this.props;
    return (
      <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={ 1000 }
          transitionEnterTimeout={ 1000 }
          transitionLeaveTimeout={ 500 }
          transitionName={transitionName || "SlideIn"}
        >      
           <Row style={backgroundColorStyle}>
             <h1>{title}</h1> <h1>{transitionName}</h1>
           </Row>
        </ReactCSSTransitionGroup>
      )
  }  
}

export default PageShell;

