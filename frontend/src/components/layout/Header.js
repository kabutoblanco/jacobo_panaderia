import React, { Component } from 'react';

//ROUTER
import { Link } from 'react-router-dom';
import NavLateral from '../dashboard/NavLateral';

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
      <>
        <Button
          variant='outline-success'
          className='p-0 btn-salir float-right'
          onClick={this.onLogout}>
          SALIR
        </Button>
        <input type='checkbox' name='' id='expand-menu' />
        <label className='label-menu' htmlFor='expand-menu'>
          <img src='/static/frontend/img/menu.png' height='15' alt='' />
        </label>
        <NavLateral height={this.props.height} />
      </>
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
      <div id='nav-top' style={{ height: '43px' }}>
        <Navbar
          expand='sm'
          expanded={this.state.select}
          style={{
            display: isAuthenticated ? 'block' : 'flex',
            height: isAuthenticated ? '43px' : 'auto',
          }}>
          {!isAuthenticated ? (
            <Navbar.Toggle
              aria-controls='main-nav'
              onClick={() => this.setState({ select: !this.state.select })}
            />
          ) : (
            authLinks
          )}
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
            {isAuthenticated ? <></> : guestLinks}
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
