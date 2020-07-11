import React, { Component } from 'react';

// REDUX
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

//CUSTOM
import Bread from './store/Bread';
import Cake from './store/Cake';
import Cookie from './store/Cookie';
import Favorites from './store/Favorites';

export class Store extends Component {
  static propTypes = {
    option: PropTypes.number.isRequired,
  };

  store = () => {
    console.log(this.props.option);
    switch (this.props.option) {
      case 1:
        return <Favorites />;
      case 2:
        return <Bread />;
      case 3:
        return <Cookie />;
      case 4:
        return <Cake />;
      default:
        return <></>;
    }
  };

  render() {
    const path = window.location.pathname;
    console.log(path)
    return (
      <div>
        <this.store />
      </div>
    );
  }
}

const mapStateProps = (state) => ({
  option: state.option,
});

export default connect(mapStateProps)(Store);
