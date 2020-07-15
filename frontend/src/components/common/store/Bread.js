import React, { Component } from 'react';

import ProductStore from './ProductStore';
import './Store.css';
import { addCart } from '../../../actions/cart';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Bread extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    addCart: PropTypes.func.isRequired,
  };

  componentDidMount() {
    // this.props.getProducts();
  }

  render() {
    const products = this.props.products.map((product) => (
      <ProductStore key={product.id} product={product} />
    ));

    return (
      <div className='container'>
        <div className='pt-5 pb-5'>
          <h4 className='ml-a'>Panes</h4>
          <div className='my-row'>{products}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.inventory.products,
});

export default connect(mapStateToProps, { addCart })(Bread);
