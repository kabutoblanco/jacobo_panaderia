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
import CurrencyFormat from 'react-currency-format';
import ReactTable from 'react-table-6';
import {
  addBuy,
  getProducts,
  resetProducts,
  getBuys,
} from '../../actions/inventory';
import { connect } from 'react-redux';

import './index.css';

export class Buy extends Component {
  state = {
    amount: 0,
    payment: 0,
    product: {},
  };

  onAddBuy = () => {
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
    this.props.addBuy(data);
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
          this.setState({ payment: value * product.product.price_buy });
        }
      }
    );
  };

  componentDidMount() {
    this.props.getProducts('solo', 0);
    this.props.getBuys();
  }

  componentWillUnmount() {
    this.props.resetProducts();
  }

  render() {
    const { amount, payment } = this.state;
    const { products, buys } = this.props;
    const handleFocus = (event) => event.target.select();
    const columns = [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'No.',
        accesor: 'invoice',
        Cell: (props) => <span>{props.original.invoice}</span>,
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
        <Card className='mt-5 mb-2'>
          <Card.Header>Compra rápida</Card.Header>
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
                          payment: amount * value.product.price_buy,
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
                    <Button className='w-100' onClick={this.onAddBuy}>
                      +
                    </Button>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <span className='h5'>Compras del día</span>
        <ReactTable
          className='mt-2'
          data={buys}
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
  buys: state.inventory.buys,
});

export default connect(mapStateToProps, {
  addBuy,
  getProducts,
  resetProducts,
  getBuys,
})(Buy);
