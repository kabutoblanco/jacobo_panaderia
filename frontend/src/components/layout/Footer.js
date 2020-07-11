import React, { Component } from 'react';

//REDUX
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

//STYLESS
import { Navbar, Nav, Button, Row } from 'react-bootstrap';
import './Header.css';

export class Footer extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  onLogout = () => {
    this.props.logout();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Button variant='outline-success' onClick={this.onLogout}>
        Salir
      </Button>
    );
    const guestLinks = (
      <Nav className='justify-content-center w-100 main-menu'>
        <Nav.Link href='#inicio' className='active-custom'>
          Inicio
        </Nav.Link>
        <Nav.Link href='#favoritos'>Favoritos</Nav.Link>
        <Nav.Link href='#panes'>Panes</Nav.Link>
        <Nav.Link href='#pasteles'>Pasteles</Nav.Link>
        <Nav.Link href='#galletas'>Galletas</Nav.Link>
      </Nav>
    );
    return (
      <div className='banner'>
        <Row className='m-auto'>
          <img
            src='../../../static/frontend/img/logo.png'
            width={124 * 3.25}
            height={42 * 3.25}
            className='d-block align-top main-logo img-fluid'
            alt='Jacobo Panaderia'
          />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
