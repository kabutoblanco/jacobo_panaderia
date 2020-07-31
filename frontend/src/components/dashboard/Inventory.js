import React, { Component } from 'react';

import { Container, Row, Card, Col } from 'react-bootstrap';
import { HorizontalBar } from 'react-chartjs-2';

import './index.css';

export class Inventory extends Component {
  render() {
    const data = {
      type: 'horizontalBar',
      labels: ['Escasos'],
      datasets: [
        {
          label: 'Pan cacho',
          data: [65],
          backgroundColor: ['red'],
          indexAxis: 'x',
        },
        {
          label: 'Pan coco',
          data: [65],
          backgroundColor: ['blue'],
          indexAxis: 'x',
        },
        {
          label: 'Panbazo',
          data: [65],
          backgroundColor: ['green'],
          indexAxis: 'x',
        },
        {
          label: 'Pan bogotano',
          data: [65],
          backgroundColor: ['gray'],
          indexAxis: 'x',
        },
      ],
    };
    const options = {
      responsive: true,
    };
    return (
      <Container className='h-100 container-overflow'>
        <span>Productos escasos</span>
        <Row>
          <Col>
            <Card>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <HorizontalBar data={data} options={options} />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <HorizontalBar data={data} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <span>Productos más vendidos</span>
        <Row>
          <Col>
            <Card>
              <Card.Header>Quote</Card.Header>
              <Card.Body>
                <HorizontalBar data={data} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Inventory;
