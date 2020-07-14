import React, { Component } from 'react';

import ProductCart from './ProductCart';
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
                  <ProductCart img='/static/frontend/img/pan1.jpg' />
                </ListGroup.Item>
                <ListGroup.Item>
                  <ProductCart img='/static/frontend/img/galleta1.jpg' />
                </ListGroup.Item>
                <ListGroup.Item>
                  <ProductCart img='/static/frontend/img/pastel1.jpg' />
                </ListGroup.Item>
              </ListGroup>
            </div>
            <div className='col-md-4 p-0'>
              <div className='card invoce'>
                <div className='card-body'>
                  <div>
                    <span className='d-block'>
                      Subtotal <span className='float-right'>$6000</span>
                    </span>
                    <span className='d-block'>
                      Envio <span className='float-right'>$1000</span>
                    </span>
                    <hr />
                    <span className='d-block'>
                      Total <span className='float-right'>$7000</span>
                    </span>
                    <button className='btn btn-primary mt-3 w-100'>FINALIZAR COMPRA</button>
                  </div>
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
