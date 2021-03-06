import React, { Component } from 'react';
import SearchBar from '../Parts/SearchBar';
import $ from 'jquery';
import RehberList from '../Parts/Rehber-List';

class Rehber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kisiler: null,
    };

    this.GetKisi = this.GetKisi.bind(this);
  }

  GetKisi(anahtar) {
    $.getJSON(`http://172.17.4.29/intapi/api/Kisi/${anahtar}`, result => {
      const kisiler = result;
      this.setState({ kisiler });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <SearchBar onAraClick={this.GetKisi} />
        <RehberList key="RehberListe" kisiler={this.state.kisiler} />
      </div>
    );
  }
}

export default Rehber;
