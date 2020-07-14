import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Carousel, Button, Jumbotron } from 'react-bootstrap';
import './Common.css';

export class Home extends Component {
  render() {
    const { height } = this.props;
    return (
      <Carousel style={{ height: height + 'px' }}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='../../../static/frontend/img/galleta2.jpg'
            alt='First slide'
            height={height}
          />
          <Carousel.Caption>
            <h3>ENVIOS LOCALES</h3>
            <p>Productos 100% caseros.</p>
            <Link to='/favoritos'>
              <Button>ORDENA AHORA</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='../../../static/frontend/img/pan1.jpg'
            alt='Third slide'
            height={height}
          />

          <Carousel.Caption>
            <h3>ENVIOS LOCALES</h3>
            <p>Productos 100% caseros.</p>
            <Link to='/favoritos'>
              <Button>ORDENA AHORA</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='../../../static/frontend/img/galleta1.jpg'
            alt='Third slide'
            height={height}
          />

          <Carousel.Caption>
            <h3>ENVIOS LOCALES</h3>
            <p>Productos 100% caseros.</p>
            <Link to='/favoritos'>
              <Button>ORDENA AHORA</Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Home;
