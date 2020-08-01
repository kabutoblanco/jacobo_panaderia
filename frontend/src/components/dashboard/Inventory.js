import React, { Component } from 'react';

import { Container, Row, Card, Col } from 'react-bootstrap';
import ReactTable from 'react-table-6';

import './index.css';
import 'react-table-6/react-table.css';

export class Inventory extends Component {
  render() {
    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
        friend: {
          name: 'Jason Maurer',
          age: 23,
        },
      },
    ];
    const columns = [
      {
        Header: 'Ref',
        accessor: 'name', // String-based value accessors!
      },
      {
        Header: 'Nombre',
        accessor: 'age',
        Cell: (props) => <span className='number'>{props.value}</span>, // Custom cell components!
      },
      {
        id: 'friendName', // Required because our accessor is not a string
        Header: 'Stock',
        accessor: (d) => d.friend.name, // Custom value accessors!
      },
      {
        Header: (props) => <span>Friend Age</span>, // Custom header components!
        accessor: 'friend.age',
      },
    ];
    return (
      <Container className='h-100 py-5'>
        <span className='h4'>Lista de productos</span>
        <ReactTable
          getTrProps={(state, rowInfo, column) => {
            return {
              style: {
                background: rowInfo.row.age > 20 ? 'green' : 'red',
              },
            };
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

export default Inventory;
