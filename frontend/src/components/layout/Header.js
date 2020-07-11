import React, { Component } from 'react';

//ROUTER
import { Link } from 'react-router-dom';

//REDUX
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

//STYLESS
import { Button, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  onLogout = () => {
    this.props.logout();
  };

  render() {
    let path = window.location;
    console.log(path);
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Button variant='outline-success' onClick={this.onLogout}>
        Salir
      </Button>
    );
    const guestLinks = (
      <Nav className='justify-content-center w-100 main-menu'>
        <Link to='/inicio' className='active-custom'>
          Inicio
        </Link>
        <Link to='/favoritos'>Favoritos</Link>
        <Link to='/panes'>Panes</Link>
        <Link to='/pasteles'>Pasteles</Link>
        <Link to='/galletas'>Galletas</Link>
      </Nav>
    );
    return (
      <div id='nav-top'>
        <Navbar expand='sm'>
          <Navbar.Toggle aria-controls='main-nav' />
          <Navbar.Collapse id='main-nav'>
            {isAuthenticated ? authLinks : guestLinks}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
