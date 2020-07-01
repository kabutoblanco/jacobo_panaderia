import React, { Component } from 'react';

import { logout } from '../../actions/auth';

import {
  Navbar,
  Nav,
  Form,
  NavDropdown,
  FormControl,
  Button,
} from 'react-bootstrap';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  onLogout = () => {
    this.props.logout();
  };  

  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Button variant='outline-success' onClick={this.onLogout}>Salir</Button>
    )
    const guestLinks = (
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
    )
    return (
      <Navbar bg='light' expand='lg'>
        <Navbar.Brand href='#home'>Jacobo Panadería</Navbar.Brand>
        {isAuthenticated ? (
          authLinks
        ) : (
          <></>
        )}
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
