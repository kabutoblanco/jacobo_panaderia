import React, { Component } from 'react';

import {
  Button,
  Modal,
  Accordion,
  Card,
  Form,
  Row,
  Col,
} from 'react-bootstrap';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CurrencyFormat from 'react-currency-format';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { getProducts, getSales } from '../../actions/inventory';
var moment = require('moment');

export class SaleDetail extends Component {
  state = {
    amount: 0,
    payment: 0,
    product: {},
    show: false,
  };
  componentDidMount() {
    this.props.getProducts('solo', 0);
    this.props.getSales();
  }
  render() {
    const { product, amount, payment } = this.state;
    const { products, sales } = this.props;
    const handleFocus = (event) => event.target.select();
    return (
      <Modal
        size='lg'
        animation={true}
        show={this.props.show}
        onHide={this.props.handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Venta detallada</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion defaultActiveKey='0'>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                  Cliente
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col md={3} lg={3}>
                        <Form.Group>
                          <Form.Label>Cliente</Form.Label>
                          <Form.Control
                            type='number'
                            placeholder='Ej. 12'
                            name='amount'
                            value={amount}
                            onFocus={handleFocus}
                            onChange={this.onChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3} lg={3} style={{display: 'flex', alignItems: 'end'}}>
                        <Form.Group>
                          <Form.Check type='checkbox' label='Contado' />
                          <Form.Check type='checkbox' label='Credito' />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                  Pago <span className='sale-detail'>Total a pagar: </span>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='1'>
                <Card.Body><Form>
                    <Row>
                      <Col md={3} lg={3}>
                        <Form.Group>
                          <Form.Label>Monto</Form.Label>
                          <Form.Control
                            type='number'
                            placeholder='Ej. 12'
                            name='amount'
                            value={amount}
                            onFocus={handleFocus}
                            onChange={this.onChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form></Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                  Registro
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='2'>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col md={3} lg={4}>
                        <Form.Group>
                          <Form.Label>Producto</Form.Label>
                          <Autocomplete
                            id='combo-box-demo'
                            options={products}
                            getOptionLabel={(option) => {
                              return (
                                option.product.name +
                                ' ' +
                                option.presentation.name
                              );
                            }}
                            onChange={(event, value) => {
                              this.setState({
                                product: value,
                                payment: amount * value.price_sale,
                              });
                            }}
                            style={{ width: 300 }}
                            renderOption={(option) => (
                              <React.Fragment>
                                <div className='w-100'>
                                  <span>
                                    {option.product.name}{' '}
                                    {option.presentation.name}
                                  </span>
                                  <br />
                                  <span>${option.price_sale}</span>
                                  <hr />
                                </div>
                              </React.Fragment>
                            )}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                label='Combo box'
                                name='product'
                                variant='outlined'
                              />
                            )}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3} lg={3}>
                        <Form.Group>
                          <Form.Label>Cantidad</Form.Label>
                          <Form.Control
                            type='number'
                            placeholder='Ej. 12'
                            name='amount'
                            value={amount}
                            onFocus={handleFocus}
                            onChange={this.onChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3} lg={3}>
                        <Form.Group>
                          <Form.Label>Valor</Form.Label>
                          <Form.Control
                            type='number'
                            placeholder='Ej. 2000'
                            name='payment'
                            value={payment}
                            onFocus={handleFocus}
                            onChange={this.onChange}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={3} lg={2} className='align-self-end'>
                        <Form.Group>
                          <Button className='w-100' onClick={this.onAddSale}>
                            +
                          </Button>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={this.props.handleClose}>
            Cerrar
          </Button>
          <Button variant='primary' onClick={this.props.handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.inventory.products,
  sales: state.inventory.sales,
  is_success: state.inventory.is_success,
});

export default connect(mapStateToProps, {
  getProducts,
  getSales,
})(SaleDetail);
