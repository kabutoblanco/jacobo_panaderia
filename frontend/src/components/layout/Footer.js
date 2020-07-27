import React, { Component } from 'react';
import { connect } from 'react-redux';

//ICONS
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//STYLESS
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

export class Footer extends Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    return isAuthenticated ? (
      <></>
    ) : (
      <div className='footer'>
        <Row className='m-auto'>
          <Col className='p-3'>
            <h4>Información</h4>
            <p>Calle 73 DN # 1 - 81 B/ Villa del Norte</p>
            <p>317 448 46 35</p>
            <p>yvvelasco8@gmail.com</p>
            <p>Popayán - Cauca - Colombia</p>
          </Col>
          <Col>
            <h4>Redes sociales</h4>
            <p>
              <FontAwesomeIcon icon={faFacebook} />
              <span className='ml-1'>Facebook</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faInstagram} />
              <span className='ml-1'>Instamgran</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faYoutube} />
              <span className='ml-1'>YouTube</span>
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Footer);
