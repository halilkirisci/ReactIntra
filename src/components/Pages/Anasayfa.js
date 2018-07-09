import React, { Component } from 'react';
import DuyuruList from '../Parts/Duyuru-List';
import DogumGunu from '../Parts/DogumGunu';

class Anasayfa extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xl-9">
          <DuyuruList key="duyuruLst" />
        </div>
        <div className="col-xl-3">
          <DogumGunu key="dogumGunu" />
        </div>
      </div>
    );
  }
}

export default Anasayfa;
