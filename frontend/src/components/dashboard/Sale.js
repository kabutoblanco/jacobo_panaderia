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
import CurrencyFormat from 'react-currency-format';
import TextField from '@material-ui/core/TextField';
import ReactTable from 'react-table-6';
import {
  addSale,
  getProducts,
  resetProducts,
  getSales,
} from '../../actions/inventory';
import { connect } from 'react-redux';
var moment = require('moment');

import './index.css';

export class Sale extends Component {
  state = {
    amount: 0,
    payment: 0,
    product: {},
  };

  onAddSale = () => {
    const { product, amount, payment } = this.state;
    const ref = new Date().toLocaleString();
    const data = {
      action: {
        user: null,
        invoice: ref,
        duties_list: [],
      },
      details: [
        {
          product: product.product.id,
          presentation: product.id,
          amount: parseFloat(amount),
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
    this.props.addSale(data);
  };

  onChange = (event) => {
    let { name, value } = event.target;
    const { product } = this.state;
    if (value === '') value = 0;
    this.setState(
      {
        [name]: value,
      },
      () => {
        if (name === 'amount') {
          this.setState({ payment: value * product.price_sale });
        }
      }
    );
  };

  componentDidMount() {
    this.props.getProducts('solo', 0);
    this.props.getSales();
  }

  componentWillUnmount() {
    this.props.resetProducts();
  }

  render() {
    const { amount, payment } = this.state;
    const { products, sales } = this.props;
    const total = sales.reduce(function (a, b) {
      return a + b.total;
    }, 0);
    const handleFocus = (event) => event.target.select();
    const columns = [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Fecha',
        accesor: 'date',
        Cell: (props) => (
          <span>
            {moment(props.original.date)
              .add(5, 'hours')
              .format('YYYY-MM-DD hh:mm A')}
          </span>
        ),
      },
      {
        Header: 'Total',
        accessor: 'total',
        Cell: (props) => (
          <CurrencyFormat
            value={props.value}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        ),
      },
    ];
    return (
      <Container>
        <Card className='mt-5 mb-3'>
          <Card.Header>Venta rápida</Card.Header>
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
                          option.product.name + ' ' + option.presentation.name
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
        </Card>
        <span className='h5'>
          Ventas del día:{'  '}
          <CurrencyFormat
            value={total}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'}
          />
        </span>
        <ReactTable
          className='mt-3 mb-2'
          data={sales}
          columns={columns}
          defaultPageSize={5}
          previousText='Atras'
          nextText='Siguiente'
          pageText='Página'
          ofText='de'
          rowsText='filas'
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.inventory.products,
  sales: state.inventory.sales,
  is_success: state.inventory.is_success,
});

export default connect(mapStateToProps, {
  addSale,
  getProducts,
  getSales,
  resetProducts,
})(Sale);
