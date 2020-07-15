import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

//ROUTER
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

//AUTHENTICATION
import Login from './accounts/Login';
import PrivateRoute from './common/PrivateRoute';

//STORE

//ADMINISTRATION
import Alerts from './layout/Alerts';
import Banner from './layout/Banner';
import Dashboard from './common/Dashboard';
import Footer from './layout/Footer';
import Header from './layout/Header';

//STORE
import Bread from '../components/common/store/Bread';
import Cake from '../components/common/store/Cake';
import Cookie from '../components/common/store/Cookie';
import Favorites from '../components/common/store/Favorites';
import Cart from '../components/common/store/Cart';
import Home from '../components/common/Home';

//REDUX
import store from '../store';
import { loadUser } from '../actions/auth';
import { getProducts } from '../actions/inventory';
import { Provider } from 'react-redux';

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
    store.dispatch(getProducts());
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
                className='p-0 app-main'
                style={{
                  minHeight: height + 'px',
                  height: 'fit-content',
                }}>
                <Switch>
                  <PrivateRoute exact path='/' component={Dashboard} />
                  <Route
                    exact
                    path='/inicio'
                    render={() => <Home height={height} />}
                  />
                  <Route exact path='/favoritos' component={Favorites} />
                  <Route exact path='/panes' component={Bread} />
                  <Route exact path='/pasteles' component={Cake} />
                  <Route exact path='/galletas' component={Cookie} />
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
