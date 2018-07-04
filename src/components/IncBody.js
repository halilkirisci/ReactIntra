import React from 'react';
import LeftNav from './Nav/LeftNav';
import Rehber from './Pages/Rehber';
import Duyuru from './Pages/Duyuru';

const IncBody = props => {
  return (
    <div className="m-grid__item m-grid__item--fluid m-grid m-grid--ver-desktop m-grid--desktop m-body">
      <button
        className="m-aside-left-close m-aside-left-close--skin-dark"
        id="m_aside_left_close_btn"
      >
        <i className="la la-close" />
      </button>

      <LeftNav onMenuSelect={props.onMenuSelect} />
      <div className="m-grid__item m-grid__item--fluid m-wrapper">
        <div className="m-subheader ">
          <div className="d-flex align-items-center">
            <div className="mr-auto">
              <h3 className="m-subheader__title ">{props.menuBilgisi}</h3>
            </div>
            <div>
              <span className="m-subheader__daterange" id="m_dashboard_daterangepicker">
                <span className="m-subheader__daterange-label">
                  <span className="m-subheader__daterange-title" />
                  <span className="m-subheader__daterange-date m--font-brand" />
                </span>
                <a
                  href=""
                  className="btn btn-sm btn-brand m-btn m-btn--icon m-btn--icon-only m-btn--custom m-btn--pill"
                >
                  <i className="la la-angle-down" />
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="m-content">{props.menuBilgisi === 'Rehber' ? <Duyuru /> : <Rehber />}</div>
      </div>
    </div>
  );
};

export default IncBody;
