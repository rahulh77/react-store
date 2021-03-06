import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homelogo from '../assets/home-logo.svg';
import styled from 'styled-components';

import { ButtonContainer } from './button';

export default class NavBar extends Component {
  render() {
    return (
      <NavWrapper className='navbar navbar-expand-sm navbar-dark px-sm-5'>
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
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus' />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--myBlue) !important;
  .nav-link {
    color: var(--mainYellow);
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`;
