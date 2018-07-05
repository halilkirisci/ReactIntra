import React from 'react';
import Resim from './Vesikalik';
import Vesikalik from './Vesikalik';

const RehberListItem = props => {
  const { kisi } = props;

  return (
    <div className="card">
      <div className="card-body text-center">
        <p>
          <Vesikalik key={kisi.KOD} kod={kisi.KOD} />
        </p>
        <h4 className="card-title">
          {kisi.PERSONEL_AD} {kisi.SOYAD}
        </h4>
        <h5 className="card-text">{kisi.FİİLİ_GÖREV_YERİ}</h5>
        <h6 className="card-text">{kisi.İş_Tel}</h6>
        <a href="" className="btn btn-primary btn-sm">
          <i className="fa fa-plus" />
        </a>
      </div>
    </div>
  );
};

export default RehberListItem;
