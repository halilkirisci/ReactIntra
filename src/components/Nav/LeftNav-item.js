import React from 'react';

const LeftNavitem = props => {
  return (
    <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
      <li className="m-menu__item  m-menu__item--active">
        <div className="m-menu__link" onClick={() => props.onMenuSelect('Rehber')}>
          <span className="m-menu__item-here" />
          <i className="m-menu__link-icon flaticon-line-graph" />
          <span className="m-menu__link-text">Rehber</span>
        </div>
      </li>
      <li className="m-menu__item ">
        <div className="m-menu__link" onClick={() => props.onMenuSelect('Duyuru')}>
          <span className="m-menu__item-here" />
          <i className="m-menu__link-icon flaticon-line-graph" />
          <span className="m-menu__link-text">Duyuru</span>
        </div>
      </li>
    </ul>
  );
};

export default LeftNavitem;