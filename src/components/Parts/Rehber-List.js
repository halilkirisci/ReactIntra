import React from 'react';
import _ from 'lodash';

const RehberList = props => {
  return (
    <div className="col-md-4">{_.map(props.kisiler, kisi => <h2>{kisi.PERSONEL_AD}</h2>)}</div>
  );
};

export default RehberList;
