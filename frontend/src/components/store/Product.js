import React, { Component } from 'react';

//REDUX
import { addCart } from '../../actions/cart';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//ICONS
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

//STYLESS
import { LazyLoadImage } from 'react-lazy-load-image-component';

export class Product extends Component {
  static propTypes = {
    addCart: PropTypes.func.isRequired,
  };

  state = {
    presentation: this.props.product.presentations[0],
    amount: 1,
    total: 0,
    price_sale: 0,
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState(
      {
        [event.target.name]: event.target.value,
      },
      () => {
        if (name === 'amount') {
          if (value < 0) this.setState({ amount: 1 });
        }
      }
    );
  };

  onBlur = (event) => {
    const { name, value } = event.target;
    if (name === 'amount' && (value === '' || value < 1)) {
      this.setState({ amount: 1 });
    }
  };

  onChangeSelect = (event) => {
    const value = JSON.parse(event.target.value);
    this.setState({
      [event.target.name]: value,
      price_sale: value.price_sale,
    });
  };

  onMore = () => {
    const { amount } = this.state;
    this.setState({ amount: parseInt(amount) + 1 });
  };

  onRest = () => {
    const { amount } = this.state;
    if (amount - 1 < 1) this.setState({ amount: 1 });
    else this.setState({ amount: parseInt(amount) - 1 });
  };

  onAddCart = () => {
    const product = {
      ...this.props.product,
      price_sale: this.state.presentation.price_sale,
      presentation: this.state.presentation,
      amount: this.state.amount,
      total: this.state.amount * this.state.presentation.price_sale,
    };
    this.props.addCart(product);
  };

  componentDidMount() {
    this.setState({
      presentation: this.props.product.presentations[0],
      price_sale: this.props.product.presentations[0].price_sale,
    });
  }

  render() {
    const noShopp = (
      <button className='btn btn-primary p-2' onClick={this.onAddCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className='ml-1 add'>AGREGAR</span>
      </button>
    );
    const isShopp = (
      <Link className='btn btn-primary p-2 m-0' to='/carro'>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className='ml-1 add'>VER CARRITO</span>
      </Link>
    );
    const found = this.props.products.find(
      (item) =>
        item.id === this.props.product.id &&
        item.presentation.id === this.state.presentation.id
    );
    return (
      <div className='my-card'>
        <div className='my-card-body'>
          <LazyLoadImage
            className='img-fluid'
            effect='opacity'
            src={this.props.product.image}
            alt=''
          />
        </div>
        <div className='card-footer'>
          <div className='about'>
            {this.props.product.name} <br />
            <span>${this.state.price_sale}</span>
          </div>
          <div className='control-select'>
            <select
              name='presentation'
              id=''
              value={JSON.stringify(this.state.presentation)}
              onChange={this.onChangeSelect}>
              {this.props.product.presentations.map((item) => (
                <option key={item.id} value={JSON.stringify(item)}>
                  {item.presentation.name}
                </option>
              ))}
            </select>
          </div>
          <div className='buy'>
            <div className='control-add d-flex'>
              <input
                type='number'
                name='amount'
                id=''
                value={this.state.amount}
                onChange={this.onChange}
                onBlur={this.onBlur}
              />
              <div className='control'>
                <button onClick={this.onMore}>+</button>
                <button onClick={this.onRest}>-</button>
              </div>
            </div>
            {found ? isShopp : noShopp}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
});

export default connect(mapStateToProps, { addCart })(Product);
