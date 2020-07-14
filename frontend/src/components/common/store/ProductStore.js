import React, { Component } from 'react';

export class ProductStore extends Component {
  render() {
    return (
      <div className='my-card'>
        <div className='my-card-body'>
          <img
            className='img-fluid'
            src={this.props.img}
            alt=''
          />
        </div>
        <div className='card-footer d-flex'>
          <div className='about'>
            Pan coco <br />
            <span>$200</span>
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
