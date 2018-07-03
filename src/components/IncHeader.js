import React from 'react';

const IncHeader = props => {
  return (
    <header id="m_header" className="m-grid__item m-header ">
      <div className="m-container m-container--fluid m-container--full-height">
        <div className="m-stack m-stack--ver m-stack--desktop">
          <div className="m-stack__item m-brand  m-brand--skin-dark ">
            <div className="m-stack m-stack--ver m-stack--general">
              <div className="m-stack__item m-stack__item--middle m-stack__item--center m-brand__logo">
                <a href="index.html" className="m-brand__logo-wrapper">
                  <img alt="" src="assets/demo/demo3/media/img/logo/logo.png" />
                </a>
              </div>
              <div className="m-stack__item m-stack__item--middle m-brand__tools">
                <a
                  href="javascript:;"
                  id="m_aside_left_offcanvas_toggle"
                  className="m-brand__icon m-brand__toggler m-brand__toggler--left m--visible-tablet-and-mobile-inline-block"
                >
                  <span />
                </a>
                <a
                  id="m_aside_header_menu_mobile_toggle"
                  href="javascript:;"
                  className="m-brand__icon m-brand__toggler m--visible-tablet-and-mobile-inline-block"
                >
                  <span />
                </a>

                <a
                  id="m_aside_header_topbar_mobile_toggle"
                  href="javascript:;"
                  className="m-brand__icon m--visible-tablet-and-mobile-inline-block"
                >
                  <i className="flaticon-more" />
                </a>
              </div>
            </div>
          </div>
          <div className="m-stack__item m-stack__item--fluid m-header-head" id="m_header_nav">
            <button
              className="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-dark "
              id="m_aside_header_menu_mobile_close_btn"
            >
              <i className="la la-close" />
            </button>
            <div
              id="m_header_menu"
              className="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-light m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-dark m-aside-header-menu-mobile--submenu-skin-dark "
            >
              <ul className="m-menu__nav  m-menu__nav--submenu-arrow ">
                <li className="m-menu__item  m-menu__item--submenu m-menu__item--rel">
                  <a href="javascript:;" className="m-menu__link m-menu__toggle">
                    <span className="m-menu__link-text">Test</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IncHeader;
