import React, { Component } from 'react';

//REDUX
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';

//STYLESS
import { Col, Nav, Button, Row } from 'react-bootstrap';
import './Footer.css';

export class Footer extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
  };

  onLogout = () => {
    this.props.logout();
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const authLinks = (
      <Button variant='outline-success' onClick={this.onLogout}>
        Salir
      </Button>
    );
    const guestLinks = (
      <Nav className='justify-content-center w-100 main-menu'>
        <Nav.Link href='#inicio' className='active-custom'>
          Inicio
        </Nav.Link>
        <Nav.Link href='#favoritos'>Favoritos</Nav.Link>
        <Nav.Link href='#panes'>Panes</Nav.Link>
        <Nav.Link href='#pasteles'>Pasteles</Nav.Link>
        <Nav.Link href='#galletas'>Galletas</Nav.Link>
      </Nav>
    );
    return (
      <div className='footer'>
        <Row className='m-auto'>
          <Col className='p-3'>
            <h4>Información</h4>
            <p>Calle 73 DN # 1 - 81 B/ Villa del Norte</p>
            <p>317 448 46 35</p>
            <p>yvvelasco@gmail.com</p>
            <p>Popayán - Cauca - Colombia</p>
          </Col>
          <Col>
            <h4>Redes sociales</h4>
            <p>Facebook</p>
            <p>Instamgran</p>
            <p>YouTube</p>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Footer);
