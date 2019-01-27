import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, HashRouter, Redirect,Route, Switch, withRouter } from "react-router-dom";
import { Container } from 'reactstrap';
import routes from '../../routes/routes';

class DefaultLayout extends Component {

  render() {
    return (        
        <Container fluid >
            <Router >
              <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={withRouter(route.component,"ZoomIn")}
                        />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/home" />
                </Switch>    
            </Router> 
        </Container>      
    );
  }
}

export default DefaultLayout;

