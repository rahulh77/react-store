import React, { Component } from 'react';
import Product from './product.js';
export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          <Product />
        </h3>
      </div>
    );
  }
}
