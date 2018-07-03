import React from 'react';

const LeftNav = props => {
  return (
    <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
      <div
        id="m_ver_menu"
        className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark m-aside-menu--dropdown "
      >
        <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
          <li className="m-menu__item  m-menu__item--active">
            <a href="index.html" className="m-menu__link ">
              <span className="m-menu__item-here" />
              <i className="m-menu__link-icon flaticon-line-graph" />
              <span className="m-menu__link-text">Rehber</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNav;
