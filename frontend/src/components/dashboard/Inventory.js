import React, { Component } from 'react';

import { Container, Row, Card, Col } from 'react-bootstrap';
import ReactTable from 'react-table-6';

import './index.css';
import 'react-table-6/react-table.css';
import { getProducts } from '../../actions/inventory';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Inventory extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getProducts('pan', 2);
  }

  render() {
    const data = this.props.products;
    const columns = [
      {
        Header: 'Ref',
        accessor: 'ref',
      },
      {
        Header: 'Nombre',
        accessor: 'name',
        Cell: (props) => (
          <span className='capitalize'>{props.value}</span>
        ),
      },
      {
        id: 'estado',
        Header: 'Estado',
        accessor: (d) => (d.stock / d.capacity).toFixed(2),
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
              return {
                style: {
                  background:
                    rowInfo.row.stock < rowInfo.row.capacity / 2
                      ? 'rgba(251, 14, 4, 0.5)'
                      : 'rgba(89, 209, 104, 0.5)',
                },
              };
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

export default connect(mapStateToProps, { getProducts })(Inventory);
