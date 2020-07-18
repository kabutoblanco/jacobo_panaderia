import React, { Component } from 'react';

import { setCart, deleteCart } from '../../actions/cart';
import { connect } from 'react-redux';

export class Product extends Component {
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
    this.props.deleteCart(
      this.props.product.id,
      this.props.product.presentation.id
    );
  };

  render() {
    return (
      <>
        <td className='d-flex' style={{ border: 'none' }}>
          <div className='my-card-body position-relative'>
            <img
              className='img-fluid'
              style={{ maxWidth: '100px' }}
              src={this.props.product.image}
              alt=''
            />
            <div className='delete' onClick={this.onDeleteCart}>
              x
            </div>
          </div>
          <div className='card-footer d-flex' style={{maxWidth: '100px'}}>
            <div className='about-cart d-flex'>
              <span className='d-inline align-self-center text-over'>
                {this.props.product.name}
              </span>
            </div>
          </div>
        </td>
        <td className=''>
          <span>${this.props.product.price_sale}</span>
        </td>
        <td>
          <div className='buy-cart'>
            <div className='control-add d-flex'>
              <input
                type='number'
                name='amount'
                id=''
                value={this.state.amount}
                onChange={this.onChange}
              />
              <div className='control'>
                <button onClick={this.onMore}>+</button>
                <button onClick={this.onRest}>-</button>
              </div>
            </div>
          </div>
        </td>
        <td>
          <span className='d-inline align-self-center'>
            ${this.state.total}
          </span>
        </td>
      </>
    );
  }
}

export default connect(null, { setCart, deleteCart })(Product);
