import React, { Component, Fragment } from 'react';

//REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavLateral from './NavLateral';

import { Container, Tab, Col, Nav, Row } from 'react-bootstrap';

export class Inventory extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    return <NavLateral height={this.props.height} />;
  }
}

const mapStateProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateProps)(Inventory);
