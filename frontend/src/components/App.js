import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import Login from './accounts/Login';
import Dashboard from './common/Dashboard';
import PrivateRoute from './common/PrivateRoute';
import Alerts from './layout/Alerts';
import Header from './layout/Header';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

import { Container } from 'react-bootstrap';

const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alerts />
              <Header />
              <Container fluid className="p-0">
                <Switch>
                  <PrivateRoute exact path='/' component={Dashboard} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </Container>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
