import React, { Component } from 'react';

import { Nav }  from 'react-bootstrap'

export class NavLateral extends Component {
  render() {
    return (
      <Nav defaultActiveKey='/home' className='flex-column'>
        <Nav.Link href='/home'>Home</Nav.Link>
        <Nav.Link eventKey='link-1'>Productos</Nav.Link>
        <Nav.Link eventKey='link-2'>Balance</Nav.Link>
        <Nav.Link eventKey='disabled' disabled>
          Reportes
        </Nav.Link>
      </Nav>
    );
  }
}

export default NavLateral;
