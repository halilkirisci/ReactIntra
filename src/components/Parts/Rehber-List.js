import React from 'react';
import _ from 'lodash';
import RehberListItem from './Rehber-List-Item';

const RehberList = props => {
  return (
    <div className="col-md-4">{_.map(props.kisiler, kisi => <RehberListItem kisi={kisi} />)}</div>
  );
};

export default RehberList;
