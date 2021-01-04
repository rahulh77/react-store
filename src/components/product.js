import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../data/context';

export default class Product extends Component {
  render() {
    const { id, title, img, price, company, inCart } = this.props.product;
    return (
      <ProductWrapper className='col-9 mx-auto col-md-6 col-lg-3 my-3'>
        <div className='card'>
          <div
            className='img-container p-5'
            onClick={() => console.log('product details')}
          >
            <Link to='/details'>
              <img src={img} alt='product' className='card-img-top' />
            </Link>
            <button
              className='cart-btn'
              disabled={inCart}
              onClick={() => console.log(title)}
            >
              {inCart ? (
                <p className='text-capitalize mb-0' disabled>
                  in cart
                </p>
              ) : (
                <i className='fas fa-cart-plus' />
              )}
            </button>
          </div>
          {/* card footer */}
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>{title}</p>
            <div className='h5 text-blue mb-0'>${price}</div>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.2s linear;
  }
  .card-footer {
    transition: all 0.2s linear;
    /* background: #f3eded; */
  }
  &:hover {
    .card {
      /* border: 0.04rem solid rgba(0, 0, 0, 0.2); */
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.2s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.02);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background-color: var(--lightBlue);
    border: none;
    color: var(--pureWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }

  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }

  .cart-btn {
    cursor: pointer;
    color: var(--pureWhite);
  }
`;
