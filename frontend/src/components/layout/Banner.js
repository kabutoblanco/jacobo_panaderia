import React, { Component } from 'react';

//REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//STYLESS
import { Navbar, Nav, Button, Row } from 'react-bootstrap';
import './Header.css';

export class Banner extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <>
        <div id='banner' className='banner'>
          <Row className='m-auto'>
            <img
              src='../../../static/frontend/img/logo.png'
              width={124 * 3.25}
              height={42 * 3.25}
              className='d-block align-top main-logo img-fluid'
              alt='Jacobo Panaderia'
            />
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Banner);
