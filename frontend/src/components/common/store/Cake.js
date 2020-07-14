import React, { Component } from 'react';

import Product from './Product';
import './Store.css';

export class Cake extends Component {
  render() {
    return (
      <div className='container'>
        <div className='pt-5 pb-5'>
          <h4 className='ml-a'>Pasteles</h4>
          <div className='my-row'>
            <Product img='../../../../static/frontend/img/pastel1.jpg' />
            <Product img='../../../../static/frontend/img/pastel2.jpg' />
            <Product img='../../../../static/frontend/img/pastel2.jpg' />
            <Product img='../../../../static/frontend/img/pastel1.jpg' />
          </div>
        </div>
      </div>
    );
  }
}

export default Cake;
