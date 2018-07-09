import React, { Component } from 'react';
import $ from 'jquery';
class TestList extends Component {
  constructor(props) {
    super(props);

    this.state = { testliste: null };
  }

  componentDidMount = () => {
    $.getJSON('http://172.17.4.29/intapi/api/testlers', result => {
      const testliste = result;
      this.setState({ testliste });
    });
  };

  render() {
    if (!this.state.testliste) {
      return <h4>Loading...</h4>;
    }
    return <ul>{this.state.testliste.map((test, i) => <li>{test.Adi}</li>)}</ul>;
  }
}

export default TestList;
