import React from 'react';
import Moment from 'moment';
import Html from 'dangerously-set-inner-html';
import DuyuruResimList from './Duyuru-Resim-List';

const DuyuruListItem = props => {
  const { duyuru } = props;
  Moment.locale('tr');
  if (!duyuru) {
    return <h4>Boş</h4>;
  }
  //console.log(props);
  return (
    <div className="m-timeline-2__item">
      <span className="m-timeline-2__item-time">{Moment(duyuru.basTarih).format('DD.MM')}</span>
      <div className="m-timeline-2__item-cricle">
        <i className="fa fa-genderless m--font-danger" />
      </div>
      <div className="m-timeline-2__item-text  m--padding-top-5">
        <a href="">
          <h5>{duyuru.baslik}</h5>
        </a>
        <Html html={duyuru.icerik.substring(0, 100)} />
      </div>
      <DuyuruResimList key={'drl' + duyuru.duyuruId} resimler={duyuru.T_DUYURUFOTO} />
    </div>
  );
};

export default DuyuruListItem;
