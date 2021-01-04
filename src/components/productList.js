import React, { Component } from 'react';
import Product from './product.js';
import Title from './title';
import { ProductConsumer } from '../data/context';

export default class ProductList extends Component {
  render() {
    // console.log(this.state.products);
    return (
      <div className='container'>
        <Title name='rahul' title='products' />

        <div className='row'>
          <ProductConsumer>
            {(value) => {
              return value.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
