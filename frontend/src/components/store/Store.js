import React, { Component } from 'react';

import Product from './Product';
import './Store.css';
import { addCart } from '../../actions/cart';
import { getProducts } from '../../actions/inventory';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Store extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    addCart: PropTypes.func.isRequired,
  };

  onUpdateProducts = (path) => {
    switch (path) {
      case '/favoritos':
        this.props.getProducts('pan', 1);
        break;
      case '/panes':
        this.props.getProducts('pan', 1);
        break;
      case '/pasteles':
        this.props.getProducts('pastel', 1);
        break;
      case '/galletas':
        this.props.getProducts('galleta', 1);
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    this.onUpdateProducts(this.props.match.path);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.path !== this.props.match.path)
      this.onUpdateProducts(this.props.match.path);
  }

  render() {
    const products = this.props.products.map((product) => (
      <Product key={product.id} product={product} />
    ));

    return (
      <div className='container'>
        <div className='pt-5 pb-5'>
          <h4 className='ml-a' style={{textTransform: 'uppercase'}}>{this.props.match.path.slice(1)}</h4>
          <div className='my-row'>{products}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.inventory.products,
});

export default connect(mapStateToProps, { addCart, getProducts })(Store);
