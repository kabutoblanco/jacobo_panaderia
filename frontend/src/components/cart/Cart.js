import React, { Component } from 'react';

import Product from './Product';
import './Cart.css';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Cart extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
  };

  state = {
    price_subtotal: this.props.products.reduce(function (a, b) {
      return a + b.total;
    }, 0),
    price_shipping: 0,
    price_total: 0,
  };

  componentDidMount() {
    this.setState({
      price_total: this.state.price_subtotal + this.state.price_shipping,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      const price_subtotal = this.props.products.reduce(function (a, b) {
        return a + b.total;
      }, 0);
      const price_total = price_subtotal + this.state.price_shipping;
      this.setState({
        price_subtotal: price_subtotal,
        price_total: price_total,
      });
    }
  }

  render() {
    const products = this.props.products.map((product) => (
      <tr key={product.id.toString() + product.presentation.id.toString()}>
        <Product
          key={product.id.toString() + product.presentation.id.toString()}
          product={product}
        />
      </tr>
    ));
    return (
      <div className='container'>
        <div className='pt-5 pb-5'>
          <h4 className='ml-a'>Mi carrito</h4>
          <div className='my-row'>
            <div className='col-md-8 p-0'>
              {this.props.products.length === 0 ? (
                <span className='p-2'>Carrito vacio</span>
              ) : (
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>{products}</tbody>
                </Table>
              )}
            </div>
            <div className='col-md-4 p-0'>
              <div className='card invoce'>
                <div className='card-body'>
                  <div>
                    <span className='d-block'>
                      Subtotal{' '}
                      <span className='float-right'>
                        ${this.state.price_subtotal}
                      </span>
                    </span>
                    <span className='d-block'>
                      Envio{' '}
                      <span className='float-right'>
                        ${this.state.price_shipping}
                      </span>
                    </span>
                    <hr />
                    <span className='d-block total'>
                      Total{' '}
                      <span className='float-right'>
                        ${this.state.price_total}
                      </span>
                    </span>
                    <button className='btn btn-primary mt-3 w-100'>
                      FINALIZAR COMPRA
                    </button>
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

const mapStateToProps = (state) => ({
  products: state.cart.products,
});

export default connect(mapStateToProps)(Cart);
