import React from 'react';
import Resim from './Resim';

const RehberListItem = props => {
  const { kisi } = props;
  return (
    <div className="card">
      <div className="card-body text-center">
        <p>
          <img
            className=" img-fluid"
            src="https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png"
            alt="card image"
          />
        </p>
        <h4 className="card-title">
          {kisi.PERSONEL_AD} {kisi.SOYAD}
        </h4>
        <h5 className="card-text">{kisi.FİİLİ_GÖREV_YERİ}</h5>
        <h6 className="card-text">{kisi.İş_Tel}</h6>
        <a href="#" className="btn btn-primary btn-sm">
          <i className="fa fa-plus" />
        </a>
      </div>
    </div>
  );
};

export default RehberListItem;
