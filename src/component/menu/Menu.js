import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-large.png'
import './Menu.scss'

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
        </li>
        <li>
          <Link to='/' className="text-danger">
            Home
          </Link>
        </li>
      </ul>
    </div>
  )
};

export default Menu;
