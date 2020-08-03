import React, { Component } from 'react';

import Sale from '../dashboard/Sale';
import Buy from '../dashboard/Buy';
import Inventory from '../dashboard/Inventory';

class Dashboard extends Component {
  onUpdateProducts = () => {
    const path = this.props.match.path;
    switch (path) {
      case '/ventas':
        return <Sale />;
      case '/compras':
        return <Buy />;
      case '/inventario':
        return <Inventory />;
      default:
        return <></>;
    }
  };

  render() {
    return (
      <div style={{ height: this.props.height + 'px' }}>
        <this.onUpdateProducts />
      </div>
    );
  }
}

export default Dashboard;
