import React from 'react';
import DuyuruListItem from './Duyuru-List-Item';

const DuyuruList = props => {
  const { duyurular } = props;

  return (
    <div className="m-portlet  m-portlet--full-height ">
      <div className="m-portlet__head">
        <div className="m-portlet__head-caption">
          <div className="m-portlet__head-title">
            <h3 className="m-portlet__head-text">Duyurular</h3>
          </div>
        </div>
      </div>
      <div className="m-portlet__body">
        <div
          className="m-scrollable mCustomScrollbar _mCS_5 mCS-autoHide"
          data-scrollbar-shown="true"
          data-scrollable="true"
          data-height="380"
          style={{ overflow: 'visible', height: '100%', position: 'relative' }}
        >
          <div className="m-timeline-2">
            <div className="m-timeline-2__items  m--padding-top-25 m--padding-bottom-30">
              {duyurular.map((duyuru, index) => <DuyuruListItem key={index} duyuru={duyuru} />)}
              <div className="m-timeline-2__item m--margin-top-30">
                <span className="m-timeline-2__item-time">12:45</span>
                <div className="m-timeline-2__item-cricle">
                  <i className="fa fa-genderless m--font-success" />
                </div>
                <div className="m-timeline-2__item-text m-timeline-2__item-text--bold">
                  AEOL Meeting With
                </div>
                <div className="m-list-pics m-list-pics--sm m--padding-left-20">
                  <a href="#">
                    <img src="assets/app/media/img/users/100_4.jpg" title="" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/app/media/img/users/100_13.jpg" title="" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/app/media/img/users/100_11.jpg" title="" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/app/media/img/users/100_14.jpg" title="" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuyuruList;
