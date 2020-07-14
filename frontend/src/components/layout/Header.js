import React, { Component } from 'react';

//ROUTER
import { Link } from 'react-router-dom';

//FAVICON
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

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

  state = {
    option: false,
  };

  onLogout = () => {
    this.props.logout();
  };

  onLink = () => {
    this.setState({ option: true });
  };

  render() {
    const path = window.location.hash;
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Button variant='outline-success' onClick={this.onLogout}>
        Salir
      </Button>
    );
    const guestLinks = (
      <Nav className='justify-content-center w-100 main-menu'>
        <Link
          to='/inicio'
          className={path.endsWith('inicio') ? 'active-custom' : ''}
          onClick={this.onLink}>
          Inicio
        </Link>
        <Link
          to='/favoritos'
          className={path.endsWith('favoritos') ? 'active-custom' : ''}
          onClick={this.onLink}>
          Favoritos
        </Link>
        <Link
          to='/panes'
          className={path.endsWith('panes') ? 'active-custom' : ''}
          onClick={this.onLink}>
          Panes
        </Link>
        <Link
          to='/pasteles'
          className={path.endsWith('pasteles') ? 'active-custom' : ''}
          onClick={this.onLink}>
          Pasteles
        </Link>
        <Link
          to='/galletas'
          className={path.endsWith('galletas') ? 'active-custom' : ''}
          onClick={this.onLink}>
          Galletas
        </Link>
        <Link
          to='/carro'
          className={path.endsWith('carro') ? 'active-custom' : ''}
          onClick={this.onLink}>
          <div>
            <div className='cart'>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className='count-cart'>2</span>
            </div>
          </div>
        </Link>
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
