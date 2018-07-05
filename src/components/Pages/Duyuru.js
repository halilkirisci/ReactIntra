import React, { Component } from 'react';

import $ from 'jquery';
import DuyuruList from '../Parts/Duyuru-List';
import DogumGunu from '../Parts/DogumGunu';

class Duyuru extends Component {
  constructor(props) {
    super(props);

    this.state = { duyurular: null };
  }

  componentDidMount = () => {
    $.getJSON(`http://172.17.4.29/intapi/api/Duyuru?basT=01.06.2018&bitT=05.07.2018`, result => {
      const duyurular = result;
      this.setState({ duyurular });
    });
  };

  render() {
    if (!this.state.duyurular) {
      return <h2>Loading...</h2>;
    }
    console.log(this.state.duyurular);

    return (
      <div className="row">
        <div className="col-xl-9">
          <DuyuruList key="duyuruListesi" duyurular={this.state.duyurular} />
        </div>
        <div className="col-xl-3">
          <DogumGunu />
        </div>
      </div>
    );
  }
}

export default Duyuru;
