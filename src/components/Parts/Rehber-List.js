import React from 'react';
import _ from 'lodash';
import RehberListItem from './Rehber-List-Item';

const RehberList = props => {
  return (
    <div className="row">
      {_.map(props.kisiler, (kisi, i) => (
        <div className="col-xl-3">
          <RehberListItem key={'rehber' + i} kisi={kisi} />
        </div>
      ))}
    </div>
  );
};

export default RehberList;
