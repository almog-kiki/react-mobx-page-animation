import React, { Component } from 'react';
import { Row,Col } from 'reactstrap';
import Placeholder from './placeholder_90.png';


class Icon extends Component {
    constructor(props) {
      super(props);
        this.state = {
          isLoading: true,
          isError: false,
      };
    }      
    
    handleImageLoaded() {
      this.setState({ isLoading: false, isError: false });
    }
  
    handleImageErrored(event) {
      this.setState({ isLoading: false, isError: true});
      event.target.src = Placeholder;
    }

    getIconUrl(widget){
      //return "https://cdn3.iconfinder.com/data/icons/iconano-web-stuff/512/109-External-512.png"
      return widget.iconUrl;
    }

    draw = (widget) => {      
        var iconUrl = this.getIconUrl(widget);
        // Icon is a url image
        return (     
          <Row className="h-100 align-items-center">
              <Col style={{"textAlign":"center"}}>
                  <img 
                       src={iconUrl}
                       onLoad = {this.handleImageLoaded.bind(this)}
                       onError = {this.handleImageErrored.bind(this)}
                   />     
              </Col>                
          </Row>                
         )                
    }
    
    render() {
        const { widget } = this.props;        
        return (      
          <Col>
          {this.draw(widget)}             
          </Col>              
        );
      }
}
export default Icon;
  



