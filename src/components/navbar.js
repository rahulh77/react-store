import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homelogo from '../assets/home-logo.svg';
export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar bg-primary navbar-expand-sm navbar-dark px-sm-5'>
        <Link to='/'>
          <img src={homelogo} alt='store' className='navbar' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              Products
            </Link>
          </li>
        </ul>
        <Link to='/cart' className='ml-auto'>
          <button>
            <i className='fas fa-cart-plus'>My Cart</i>
          </button>
        </Link>
      </nav>
    );
  }
}
