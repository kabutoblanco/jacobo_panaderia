import React, { Component, Fragment } from 'react';

//STYLESS
import { Row } from 'react-bootstrap';
import './Banner.css';

export class Banner extends Component {
  render() {
    return (
      <Fragment>
        <div id='banner' className='banner'>
          <Row className='m-auto'>
            <img
              src='../../../static/frontend/img/logo.webp'
              width={124 * 3.25}
              height={42 * 3.25}
              className='main-logo img-fluid'
              alt='Jacobo Panaderia'
            />
          </Row>
        </div>
      </Fragment>
    );
  }
}

export default Banner;
