import React from 'react';
import LeftNavitem from './LeftNav-item';

const LeftNav = props => {
  //console.log(props);
  return (
    <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
      <div
        id="m_ver_menu"
        className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark m-aside-menu--dropdown "
      >
        <ul className="m-menu__nav  m-menu__nav--dropdown-submenu-arrow ">
          {props.menur.map((r, i) => (
            <LeftNavitem key={'lItem' + i} link={r} onMenuSelect={props.onMenuSelect} />
          ))}
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default LeftNav;
