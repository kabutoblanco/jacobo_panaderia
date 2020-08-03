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
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { getProducts, resetProducts } from '../../actions/inventory';
import { connect } from 'react-redux';

import './index.css';

export class Sale extends Component {
  state = {
    amount: 0,
    payment: 0,
    product: {},
  };

  onSaveSale = () => {
    const { product, amount, payment } = this.state;
    const ref = new Date().toLocaleString();
    data = {
      action: {
        user: null,
        invoice: ref,
        duties_list: [],
      },
      details: [
        {
          product: product.product.id,
          presentation: product.presentation.id,
          amount: amount,
        },
      ],
      pays: [
        {
          code: ref,
          user: null,
          payment: payment,
        },
      ],
    };
  };

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onUpdatePayment = () => {};

  componentDidMount() {
    this.props.getProducts('solo', 0);
  }

  componentWillUnmount() {
    this.props.resetProducts();
  }

  render() {
    return (
      <Container>
        <Card className='mt-5 mb-2'>
          <Card.Header>Venta rápida</Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col md={3} lg={4}>
                  <Form.Group>
                    <Form.Label>Producto</Form.Label>
                    <Autocomplete
                      id='combo-box-demo'
                      options={this.props.products}
                      getOptionLabel={(option) => {
                        return (
                          option.product.name + ' ' + option.presentation.name
                        );
                      }}
                      onChange={(event, value) => {
                        this.setState({ product: value }, () =>
                          this.onUpdatePayment
                        );
                      }}
                      style={{ width: 300 }}
                      renderOption={(option) => (
                        <React.Fragment>
                          <div className='w-100'>
                            <span>
                              {option.product.name} {option.presentation.name}
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
                      placeholder='Ej. 12'
                      value={this.state.amount}
                      onChange={this.onChange, this.onUpdatePayment}
                    />
                  </Form.Group>
                </Col>
                <Col md={3} lg={3}>
                  <Form.Group>
                    <Form.Label>Valor</Form.Label>
                    <Form.Control
                      placeholder='Ej. 2000'
                      value={this.state.payment}
                      onChange={this.onChange}
                    />
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
        <span className='h5'>Ventas del día</span>
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

const mapStateToProps = (state) => ({
  products: state.inventory.products,
});

export default connect(mapStateToProps, { getProducts, resetProducts })(Sale);
