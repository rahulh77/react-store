import React, { Component } from 'react';
import { detailProduct, storeProducts } from './data';

const ProductContext = React.createContext();
// Context returns provider and consumer

class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct,
  };

  handleDetail = () => {
    console.log('hello from detail');
  };

  addToCart = () => {
    console.log('hello from add to cart');
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider };
