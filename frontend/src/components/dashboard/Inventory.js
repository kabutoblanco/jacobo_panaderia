import React, { Component } from 'react';

import { Container, Row, Card, Col } from 'react-bootstrap';
import ReactTable from 'react-table-6';

import './index.css';
import 'react-table-6/react-table.css';
import { getProducts, resetProducts } from '../../actions/inventory';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Inventory extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getProducts('pan', 2);
  }

  componentWillUnmount() {
    this.props.resetProducts();
  }

  render() {
    const data = this.props.products;
    const columns = [
      {
        Header: 'Nombre',
        accessor: 'name',
        Cell: (props) => <span className='capitalize'>{props.value}</span>,
      },
      {
        id: 'estado',
        Header: 'Stock %',
        accessor: (d) => d.stock / d.capacity,
        Cell: (props) => <span>{(props.value * 100).toFixed(2)}%</span>,
      },
      {
        Header: 'Stock',
        accessor: 'stock',
      },
      {
        Header: 'Capacidad',
        accessor: 'capacity',
      },
    ];
    return (
      <Container className='h-100 py-5'>
        <span className='h4'>Lista de productos</span>
        <ReactTable
          getTdProps={(state, rowInfo, column, instance) => {
            if (rowInfo !== undefined) {
              const { row } = rowInfo;
              const fourth = row.capacity * 0.25;
              const middle = row.capacity * 0.5;
              const threeQuarters = row.capacity * 0.75;
              let color = 'white';
              if (row.stock <= fourth) {
                color = 'rgba(251, 14, 4, 0.75)';
              } else if (row.stock > fourth && row.stock <= middle) {
                color = 'rgba(251, 14, 4, 0.5)';
              } else if (row.stock > middle && row.stock <= threeQuarters) {
                color = 'rgba(219, 216, 43, 0.5)';
              } else if (row.stock > threeQuarters) {
                color = 'rgba(89, 209, 104, 0.5)';
              }
              return { style: { background: color } };
            } else {
              return { style: { background: 'white' } };
            }
          }}
          className='mt-2'
          data={data}
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
});

export default connect(mapStateToProps, { getProducts, resetProducts })(
  Inventory
);
