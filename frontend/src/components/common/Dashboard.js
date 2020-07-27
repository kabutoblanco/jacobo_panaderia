import React, { Component } from 'react';

import Inventory from '../inventory/Inventory';

class Dashboard extends Component {
  componentDidMount() {
    console.log('excelente');

    console.log(this.props.height + 'bien');
  }
  render() {
    return (
      <div style={{ height: this.props.height + 'px' }}>
        <Inventory height={this.props.height} />
      </div>
    );
  }
}

export default Dashboard;
