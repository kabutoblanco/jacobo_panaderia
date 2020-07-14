import React, { Component } from 'react';

export class ProductCart extends Component {
  render() {
    return (
      <div className='my-card d-flex product-cart positio relative'>
        <div className="delete">x</div>
        <div className='my-card-body'>
          <img className='img-fluid' src={this.props.img} alt='' />
        </div>
        <div className='card-footer d-flex'>
          <div className='about d-flex'>
            <span className='d-inline align-self-center'>Pan coco</span>
            <span className='d-inline align-self-center ml-2'>$200</span>
          </div>
          <div className='buy'>
            <input type='number' name='' id='' />
          </div>
          <div className='about d-flex w-0'>
            <span className='d-inline align-self-center ml-2'>$400</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCart;
