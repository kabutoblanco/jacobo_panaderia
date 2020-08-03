import React, { Component } from 'react';

import {
  Container,
  Table,
  Form,
  Row,
  Col,
  Button,
  Card,
} from 'react-bootstrap';

export class Buy extends Component {
  render() {
    return (
      <Container>
        <Card className='mt-5 mb-2'>
          <Card.Header>Compra rápida</Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={3} lg={4}>
                  <Form.Group>
                    <Form.Label>Producto</Form.Label>
                    <Form.Control placeholder='Elije un producto' />
                  </Form.Group>
                </Col>
                <Col md={3} lg={3}>
                  <Form.Group>
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control placeholder='Ej. 12' />
                  </Form.Group>
                </Col>
                <Col md={3} lg={3}>
                  <Form.Group>
                    <Form.Label>Valor</Form.Label>
                    <Form.Control placeholder='Ej. 2000' />
                  </Form.Group>
                </Col>
                <Col md={3} lg={2} className='align-self-end'>
                  <Form.Group>
                    <Button className='w-100'>+</Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <span className='h5'>Compras del día</span>
        <Table striped bordered hover variant='dark'>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan='2'>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Buy;
