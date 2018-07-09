import React from 'react';
import { Link } from 'react-router-dom';

const LeftNavitem = props => {
  return (
    <li id={'menu' + props.link.name} className="m-menu__item">
      <Link
        className="m-menu__link"
        to={props.link.path}
        onClick={() => props.onMenuSelect(props.link.name)}
      >
        <span className="m-menu__item-here" />
        <i className={'m-menu__link-icon ' + props.link.icon} />
        <span className="m-menu__link-text">{props.link.name}</span>
      </Link>
    </li>
  );
};

export default LeftNavitem;
