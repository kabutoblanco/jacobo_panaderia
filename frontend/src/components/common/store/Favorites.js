import React, { Component } from 'react';

import Product from './Product';
import './Store.css';

export class Favorites extends Component {
  render() {
    return (
      <div className='container'>
        <div className='pt-5 pb-5'>
          <h4 className='ml-a'>Favoritos</h4>
          <div className='my-row'>
            <Product img='../../../../static/frontend/img/pan1.jpg' />
            <Product img='../../../../static/frontend/img/pastel2.jpg' />
            <Product img='../../../../static/frontend/img/galleta2.jpg' />
            <Product img='../../../../static/frontend/img/pastel1.jpg' />
            <Product img='../../../../static/frontend/img/galleta1.jpg' />
          </div>
        </div>
      </div>
    );
  }
}

export default Favorites;
