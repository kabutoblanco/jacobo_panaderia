import React, { Component } from 'react';

export class ProductStore extends Component {
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
            <input type='number' name='' id='' />
            <button className='btn btn-primary'>COMPRAR</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductStore;
