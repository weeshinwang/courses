import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  /* margin-bottom: 3rem; */
  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
    /* &[aria-current='page'] {
      color: var(--red);
    } */
  }
  @media (max-width: 600px) {
    --columns: 4;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }
    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }
    .logo {
      transform: none;
    }
  }
  @media (max-width: 500px) {
    --columns: 2;
  }
`;


export default function Nav() {
    return (
        <NavStyles>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <span>🍷</span>
                            <span>窖藏红酒</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/pizza">🍕意式披萨</Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Logo />
                        </Link>
                    </li>
                    <li>
                        <Link to='/slicemasters'>🧑‍🍳披萨大师</Link>
                    </li>
                    <li>
                        <Link to='/order'>😍即刻下单</Link>
                    </li>
                </ul>
            </nav>
        </NavStyles>
    );
}


