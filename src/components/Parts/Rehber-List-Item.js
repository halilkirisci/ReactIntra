import React from 'react';

const RehberListItem = props => {
  const { kisi } = props;
  return (
    <div className="col-md-4">
      <h2 key={i}>
        {kisi.PERSONEL_AD} {kisi.SOYAD}
      </h2>
    </div>
  );
};

export default RehberListItem;
