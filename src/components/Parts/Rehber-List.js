import React from 'react';
import _ from 'lodash';
import RehberListItem from './Rehber-List-Item';

const RehberList = props => {
  return (
    <div className="row">
      {_.map(props.kisiler, (kisi, i) => (
<<<<<<< HEAD
        <div className="col-xl-3">
          <RehberListItem key={'rehber' + i} kisi={kisi} />
=======
        <div key={i} className="col-xl-3">
          <RehberListItem key={i} kisi={kisi} />
>>>>>>> 6e5d8eacb2f1b3eca70136da90b513cbe02f1b6d
        </div>
      ))}
    </div>
  );
};

export default RehberList;
