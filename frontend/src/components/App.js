import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

//ROUTER
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//AUTHENTICATION
import Login from './accounts/Login';
import PrivateRoute from './common/PrivateRoute';

//ADMINISTRATION
import Alerts from './layout/Alerts';
import Banner from './layout/Banner';
import Dashboard from './common/Dashboard';
import Footer from './layout/Footer';
import Header from './layout/Header';

//STORE
import Store from './store/Store';
import Cart from './cart/Cart';
import Home from './common/Home';

//REDUX
import { loadUser } from '../actions/auth';
import { Provider } from 'react-redux';
import store from '../store';

//ALERTS
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

//STYLESS
import { Container } from 'react-bootstrap';
import './App.css';

const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  state = {
    height: 0,
  };

  componentDidMount() {
    store.dispatch(loadUser());
    this.handleResize();
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  handleResize = () => {
    const hBanner = document.getElementById('banner').clientHeight;
    const hNavbar = document.getElementById('nav-top').clientHeight;
    const hWindow = window.innerHeight;
    this.setState({ height: hWindow - hBanner - hNavbar });
  };

  render() {
    const { height } = this.state;
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Alerts />
              <Banner />
              <Header />
              <Container
                fluid
                className='app-main'
                style={{
                  minHeight: height + 'px',
                }}>
                <Switch>
                  <PrivateRoute exact path='/' component={Dashboard} />
                  <Route
                    exact
                    path='/inicio'
                    render={() => <Home height={height} />}
                  />
                  <Route
                    exact
                    path={['/favoritos', '/panes', '/pasteles', '/galletas']}
                    component={Store}
                  />
                  <Route exact path='/carro' component={Cart} />
                  <Route exact path='/login' component={Login} />
                </Switch>
              </Container>
              <Footer />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
