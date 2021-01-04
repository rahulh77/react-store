import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './button';
import { ProductConsumer } from '../data/context';
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          console.log(value.detailProduct);
          const {
            id,
            title,
            img,
            price,
            company,
            inCart,
            info,
          } = value.detailProduct;
          return (
            <div className='container py-5'>
              <div className='row'>
                <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                  <h1>{title}</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col-10 mx-auto col-md-6 text-capitalize my-3'>
                  <img src={img} className='img-fluid' />
                </div>
                <div className='col-10 mx-auto col-md-6 text-capitalize my-3'>
                  <h2>Model: {title}</h2>
                  <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                    made by: {company}
                  </h4>
                  <h4 className='text-blue'>
                    <strong>price: ${price}</strong>
                  </h4>
                  <p className='text-capitalize font-weight-bold'>
                    some info about product:
                  </p>
                  <p className='text-muted lead'>{info}</p>
                </div>
                <Link to='/'>
                  <ButtonContainer>back to products</ButtonContainer>
                </Link>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
