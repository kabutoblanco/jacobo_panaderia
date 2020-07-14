import React, { Component } from 'react';

import Product from './Product';
import { ListGroup } from 'react-bootstrap';

export class Cart extends Component {
  render() {
    return (
      <div className='container'>
        <div className='pt-5 pb-5'>
          <h4 className='ml-a'>Mi carrito</h4>
          <div className='my-row'>
            <div className='col-md-8 p-0'>
              <ListGroup>
                <ListGroup.Item>
                  <Product img='/static/frontend/img/pan1.jpg'/>
                </ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </div>
            <div className='col-md-4 p-0'>
              <div className='card invoce'>
                <div className='card-body'>
                  <div className=''>Hola perros</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
