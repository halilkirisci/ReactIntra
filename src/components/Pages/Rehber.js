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
    $.getJSON(`http://172.17.1.110/intapi/api/Kisi/${anahtar}/0/5`, result => {
      const kisiler = result;
      this.setState({ kisiler });
    });
  }

  render() {
    return (
      <div className="container">
        <SearchBar onAraClick={this.GetKisi} />
        <RehberList kisiler={this.state.kisiler} />
      </div>
    );
  }
}

export default Rehber;
