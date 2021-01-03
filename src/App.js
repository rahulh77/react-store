import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';
import ProductList from './components/productList';
import Product from './components/product';
import Default from './components/default';
import Details from './components/details';
import Cart from './components/cart';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />

        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/product' component={Product} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
