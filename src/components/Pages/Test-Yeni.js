import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class TestYeni extends Component {
  constructor(props) {
    super(props);
    const dd = new Date();
    this.state = { startDate: dd.now };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    //console.log(data);
    /*for (let name of data.keys()) {
      console.log(name + ':' + data.get(name));
    }*/

    fetch('http://172.17.4.29/intapi/api/W_YEMEK', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ID: 99,
        YEMEK_ADI: data.get('adi'),
        KALORI: data.get('kalori'),
        TARIH: data.get('tarih'),
      }),
    }).catch(error => console.log('hata', error));
    // console.log(data);
  }
  render() {
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <DatePicker
              name="tarih"
              className="form-control"
              dateFormat="DD.MM.YYYY"
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input name="adi" type="text" className="form-control" />
          </div>
          <div className="form-group">
            <input name="kalori" type="text" className="form-control" />
          </div>
          <input type="submit" className="btn btn-default" value="Gönder" />
        </form>
      </div>
    );
  }
}

export default TestYeni;
