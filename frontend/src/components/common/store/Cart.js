import React, { Component } from 'react';

import ProductCart from './ProductCart';
import { ListGroup } from 'react-bootstrap';
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
      console.log(price_subtotal);
      this.setState({
        price_subtotal: price_subtotal,
        price_total: price_total,
      });
    }
  }

  render() {
    const products = this.props.products.map((product) => (
      <ListGroup.Item key={product.id}>
        <ProductCart key={product.id} product={product} />
      </ListGroup.Item>
    ));
    return (
      <div className='container'>
        <div className='pt-5 pb-5'>
          <h4 className='ml-a'>Mi carrito</h4>
          <div className='my-row'>
            <div className='col-md-8 p-0'>
              <ListGroup className='container-cart'>
                <ListGroup.Item
                  key={-1}
                  style={{
                    display:
                      this.props.products.length === 0 ? 'inline' : 'none',
                  }}>
                  <span className='p-2'>Carrito vacio</span>
                </ListGroup.Item>
                {products}
              </ListGroup>
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
