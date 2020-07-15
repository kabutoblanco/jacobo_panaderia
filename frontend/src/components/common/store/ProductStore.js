import React, { Component } from 'react';
import { addCart } from '../../../actions/cart';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ProductStore extends Component {
  static propTypes = {
    addCart: PropTypes.func.isRequired,
  };

  state = {
    amount: 0,
    total: 0,
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onAddCart = () => {
    console.log(this.props)
    const product = {
      ...this.props.product,
      amount: this.state.amount,
      total: this.state.amount * this.props.product.price_sale,
    };
    this.props.addCart(product)
  };

  render() {
    return (
      <div className='my-card'>
        <div className='my-card-body'>
          <img
            className='img-fluid'
            src={'/static/frontend/img/pan1.jpg'}
            alt=''
          />
        </div>
        <div className='card-footer d-flex'>
          <div className='about'>
            {this.props.product.name} <br />
            <span>${this.props.product.price_sale}</span>
          </div>
          <div className='buy'>
            <input
              type='number'
              name='amount'
              id=''
              value={this.state.amount}
              onChange={this.onChange}
            />
            <button className='btn btn-primary' onClick={this.onAddCart}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { addCart })(ProductStore);
