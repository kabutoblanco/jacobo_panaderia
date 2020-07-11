import React, { Component } from 'react';

import { Row, Col, Card } from 'react-bootstrap';
import './Store.css';

export class Bread extends Component {
  render() {
    return (
      <div className='container'>
        <div className='mt-5 mb-5'>
          <h4 className='ml-a'>Panes</h4>
          <div className='my-row'>
            <div className='my-card'>
              <div className='my-card-body'>
                <img
                  className='img-fluid'
                  src='../../../../static/frontend/img/pan1.jpg'
                  alt=''
                />
              </div>
              <div className='card-footer'>
                Pan coco <br />
                <span>$200</span>
              </div>
            </div>
            <div className='my-card'>
              <div className='my-card-body'>
                <img
                  className='img-fluid'
                  src='../../../../static/frontend/img/pan2.png'
                  alt=''
                />
              </div>
              <div className='card-footer'>
                Pan integral <br />
                <span>$200</span>
              </div>
            </div>
            <div className='my-card'>
              <div className='my-card-body'>
                <img
                  className='img-fluid'
                  src='../../../../static/frontend/img/pan1.jpg'
                  alt=''
                />
              </div>
              <div className='card-footer'>
                Pan coco <br />
                <span>$200</span>
              </div>
            </div>
            <div className='my-card'>
              <div className='my-card-body'>
                <img
                  className='img-fluid'
                  src='../../../../static/frontend/img/pan1.jpg'
                  alt=''
                />
              </div>
              <div className='card-footer'>
                Pan coco <br />
                <span>$200</span>
              </div>
            </div>
            <div className='my-card'>
              <div className='my-card-body'>
                <img
                  className='img-fluid'
                  src='../../../../static/frontend/img/pan1.jpg'
                  alt=''
                />
              </div>
              <div className='card-footer'>
                Pan coco <br />
                <span>$200</span>
              </div>
            </div>
            <div className='my-card'>
              <div className='my-card-body'>
                <img
                  className='img-fluid'
                  src='../../../../static/frontend/img/pan1.jpg'
                  alt=''
                />
              </div>
              <div className='card-footer'>
                Pan coco <br />
                <span>$200</span>
              </div>
            </div>
            <div className='my-card'>
              <div className='my-card-body'>
                <img
                  className='img-fluid'
                  src='../../../../static/frontend/img/pan1.jpg'
                  alt=''
                />
              </div>
              <div className='card-footer'>
                Pan coco <br />
                <span>$200</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bread;
