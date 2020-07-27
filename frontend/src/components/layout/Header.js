import React, { Component } from 'react';

//ROUTER
import { Link } from 'react-router-dom';

//ICONS
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    select: false,
  };

  onLogout = () => {
    this.props.logout();
  };

  onLink = () => {
    this.setState({ option: true, select: false });
  };

  render() {
    const path = window.location.hash;
    const { isAuthenticated } = this.props.auth;
    const { width } = this.props;
    const authLinks = (
      <Button variant='outline-success' onClick={this.onLogout}>
        Salir
      </Button>
    );
    const guestLinks = (
      <Nav className='main-menu'>
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
          <div className='cart cart-inner'>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span
              className='count-cart'
              style={{
                display: this.props.products.length > 0 ? 'inline' : 'none',
              }}>
              {this.props.products.length}
            </span>
          </div>
        </Link>
      </Nav>
    );
    return (
      <div id='nav-top' style={{maxHeight: '43px'}} >
        <Navbar expand='sm' expanded={this.state.select}>
          <Navbar.Toggle
            aria-controls='main-nav'
            onClick={() => this.setState({ select: !this.state.select })}
          />
          <Link
            to='/carro'
            className={path.endsWith('carro') ? 'active-custom' : ''}
            onClick={this.onLink}>
            <div
              className='cart cart-top'
              style={{
                display: !isAuthenticated && width <= 575 ? 'inline' : 'none',
              }}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span
                className='count-cart'
                style={{
                  display: this.props.products.length > 0 ? 'inline' : 'none',
                }}>
                {this.props.products.length}
              </span>
            </div>
          </Link>
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
  products: state.cart.products,
});

export default connect(mapStateToProps, { logout })(Header);
