import React, { Component, Fragment, Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

//ROUTER
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//AUTHENTICATION
const Login = lazy(() => import('./accounts/Login'));
const PrivateRoute = lazy(() => import('./common/PrivateRoute'));

//ADMINISTRATION
const Alerts = lazy(() => import('./layout/Alerts'));
import Banner from './layout/Banner';
import Header from './layout/Header';
import ProgressAction from './layout/ProgressAction';
const Dashboard = lazy(() => import('./common/Dashboard'));
const Footer = lazy(() => import('./layout/Footer'));

//STORE
const Store = lazy(() => import('./store/Store'));
const Cart = lazy(() => import('./cart/Cart'));
const Home = lazy(() => import('./common/Home'));

//REDUX
import { loadUser } from '../actions/auth';
import { loadCart } from '../actions/cart';
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
    hWindow: 0,
    height: 0,
    width: 0,
  };

  componentDidMount() {
    store.dispatch(loadUser());
    store.dispatch(loadCart());
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
    const wWindow = window.innerWidth;
    const height = hWindow - hNavbar;

    this.setState({
      height: hWindow - hBanner - hNavbar,
      width: wWindow,
      hWindow: height,
    });
  };

  render() {
    const { height, width, hWindow } = this.state;

    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <ProgressAction />
            <Banner />
            <Header height={hWindow} width={width} />
            <Suspense fallback={<div>Loading...</div>}>
              <Fragment>
                <Alerts />
                <Container
                  fluid
                  className='app-main'
                  style={{
                    minHeight: height + 'px',
                  }}
                >
                  <Switch>
                    <PrivateRoute
                      exact
                      path={['/', '/ventas', '/compras', '/inventario']}
                      component={Dashboard}
                      height={hWindow}
                    />
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
                    <Route
                      exact
                      path='/carro'
                      render={() => <Cart height={height} />}
                    />
                    <Route exact path='/login' component={Login} />
                  </Switch>
                </Container>
                <Footer />
              </Fragment>
            </Suspense>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
