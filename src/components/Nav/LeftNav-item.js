import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavitem = props => {
  return (
    <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
      <li className="m-menu__item  m-menu__item--active">
        <Link className="m-menu__link" to="/" onClick={() => props.onMenuSelect('Rehber')}>
          <span className="m-menu__item-here" />
          <i className="m-menu__link-icon flaticon-line-graph" />
          <span className="m-menu__link-text">Rehber</span>
        </Link>
      </li>
      <li className="m-menu__item ">
        <Link className="m-menu__link" to="/about" onClick={() => props.onMenuSelect('Duyuru')}>
          <span className="m-menu__item-here" />
          <i className="m-menu__link-icon flaticon-line-graph" />
          <span className="m-menu__link-text">Duyuru</span>
        </Link>
      </li>
    </ul>
  );
};

export default LeftNavitem;
