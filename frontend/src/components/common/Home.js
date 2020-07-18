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
            <h3 style={{color: 'white', textShadow: '0 0 5px #000'}}>HASTA 25% DE DESCUENTO POR COMPRAS ON-LINE</h3>
            <p style={{color: 'black', textShadow: '0 0 5px #fff'}}>No aplica para productos de tienda.</p>
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
            <h3>CUPONES DE DESCUENTO POR COMPRAS ACUMULADAS</h3>
            <p>Aplica para todos los productos.</p>
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
            <h3>ENVIOS A TODA LA CIUDAD POR COMPRAS MAYORES 50 MIL</h3>
            <p>Menores a este tope solo para barrios en la comunda 2.</p>
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
