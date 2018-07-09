import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Moment from 'moment';
class TestList extends Component {
  constructor(props) {
    super(props);
    Moment.locale('tr');
    this.state = { testliste: null };
  }

  componentDidMount = () => {
    $.getJSON('http://172.17.4.29/intapi/api/W_YEMEK', result => {
      const testliste = result;
      this.setState({ testliste });
    });
  };

  render() {
    if (!this.state.testliste) {
      return <h4>Loading...</h4>;
    }
    return (
      <div>
        <Link to="/testyeni">Yeni</Link>
        <ul>
          {this.state.testliste.map((test, i) => (
            <li key={'test' + i}>
              {Moment(test.TARIH).format('DD.MM.YYYY')} : {test.YEMEK_ADI}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TestList;
