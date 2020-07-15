import React, { Component } from 'react';

import { setCart, deleteCart } from '../../../actions/cart';
import { connect } from 'react-redux';

export class ProductCart extends Component {
  state = {
    amount: this.props.product.amount,
    total: this.props.product.total,
  };

  onChange = (event) => {
    const { name } = event.target;
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        if (name === 'amount') {
          this.onSetCart();
        }
      }
    );
  };

  onSetCart = () => {
    this.setState(
      {
        total: this.state.amount * this.props.product.price_sale,
      },
      () => {
        this.props.product.amount = this.state.amount;
        this.props.product.total = this.state.total;
        this.props.setCart({
          amount: this.state.amount,
          total: this.state.total,
        });
      }
    );
  };

  onDeleteCart = () => {
    console.log('delete cart')
    this.props.deleteCart(this.props.product.id);
  };

  render() {
    return (
      <div className='my-card d-flex product-cart positio relative'>
        <div className='delete' onClick={this.onDeleteCart}>
          x
        </div>
        <div className='my-card-body'>
          <img
            className='img-fluid'
            src={this.props.product.image}
            alt=''
          />
        </div>
        <div className='card-footer d-flex'>
          <div className='about d-flex'>
            <span className='d-inline align-self-center'>
              {this.props.product.name}
            </span>
            <span className='d-inline align-self-center ml-2'>
              ${this.props.product.price_sale}
            </span>
          </div>
          <div className='buy'>
            <input
              type='number'
              name='amount'
              id=''
              value={this.state.amount}
              onChange={this.onChange}
            />
          </div>
          <div className='about d-flex w-0'>
            <span className='d-inline align-self-center ml-2'>
              ${this.state.total}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setCart, deleteCart })(ProductCart);
