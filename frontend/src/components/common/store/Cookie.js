import React, { Component } from 'react';

import ProductStore from './ProductStore';
import './Store.css';

export class Cookie extends Component {
  render() {
    return (
      <div className='container'>
        <div className='pt-5 pb-5'>
          <h4 className='ml-a'>Galletas</h4>
          <div className='my-row'>
            <ProductStore img='../../../../static/frontend/img/galleta1.jpg' />
            <ProductStore img='../../../../static/frontend/img/galleta1.jpg' />
            <ProductStore img='../../../../static/frontend/img/galleta2.jpg' />
            <ProductStore img='../../../../static/frontend/img/galleta2.jpg' />
            <ProductStore img='../../../../static/frontend/img/galleta1.jpg' />
          </div>
        </div>
      </div>
    );
  }
}

export default Cookie;
