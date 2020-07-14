import React, { Component } from 'react';

import Product from './Product';
import './Store.css';

export class Bread extends Component {
  render() {
    return (
      <div className='container'>
        <div className='pt-5 pb-5'>
          <h4 className='ml-a'>Panes</h4>
          <div className='my-row'>
            <Product img='../../../../static/frontend/img/pan1.jpg' />
            <Product img='../../../../static/frontend/img/pan2.png' />
            <Product img='../../../../static/frontend/img/pan1.jpg' />
            <Product img='../../../../static/frontend/img/pan2.png' />
            <Product img='../../../../static/frontend/img/pan1.jpg' />
            <Product img='../../../../static/frontend/img/pan2.png' />
          </div>
        </div>
      </div>
    );
  }
}

export default Bread;
