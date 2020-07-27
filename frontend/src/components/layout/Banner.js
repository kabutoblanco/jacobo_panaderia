import React, { Component } from 'react';
import { connect } from 'react-redux';

//STYLESS
import { Row } from 'react-bootstrap';
import './Banner.css';

export class Banner extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return isAuthenticated ? (
      <div id='banner'></div>
    ) : (
      <div id='banner' className='banner'>
        <Row className='m-auto'>
          <img
            src='/static/frontend/img/logo.webp'
            width={124 * 3.25}
            height={42 * 3.25}
            className='main-logo img-fluid'
            alt='Jacobo Panaderia'
          />
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Banner);
