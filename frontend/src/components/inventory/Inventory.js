import React, { Component, Fragment } from 'react';

//REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavLateral from './NavLateral';

import { Container, Tab, Col, Nav, Row, Sonnet } from 'react-bootstrap';

export class Inventory extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Fragment>
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row className='w-100'>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <h1>perro</h1>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <h1>perra</h1>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Fragment>
    );
  }
}

const mapStateProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateProps)(Inventory);
