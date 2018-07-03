import React from 'react';
import LeftNavitem from './LeftNav-item';

const LeftNav = props => {
  return (
    <div id="m_aside_left" className="m-grid__item	m-aside-left  m-aside-left--skin-dark ">
      <div
        id="m_ver_menu"
        className="m-aside-menu  m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark m-aside-menu--dropdown "
      >
        <LeftNavitem onMenuSelect={props.onMenuSelect} />
      </div>
    </div>
  );
};

export default LeftNav;
