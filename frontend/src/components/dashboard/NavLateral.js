import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './index.css';

export class NavLateral extends Component {
  render() {
    return (
      <div className='navlateral' style={{ top: '43px', position: 'fixed', left: '0' }}>
        <Nav
          defaultActiveKey='/ventas'
          className='flex-column nav-lateral'
          style={{
            height: this.props.height + 'px',
          }}>
          <Link to='/ventas' className='first-menu'>VENTAS</Link>
          <Link to='/compras'>COMPRAS</Link>
          <Link to='/inventario'>INVENTARIO</Link>
        </Nav>
      </div>
    );
  }
}

export default NavLateral;
