import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavitem = props => {
  return (
    <li className="m-menu__item  m-menu__item--active">
      <Link
        className="m-menu__link"
        to={props.link.path}
        onClick={() => props.onMenuSelect('Rehber')}
      >
        <span className="m-menu__item-here" />
        <i className="m-menu__link-icon flaticon-line-graph" />
        <span className="m-menu__link-text">{props.link.name}</span>
      </Link>
    </li>
  );
};

export default LeftNavitem;
