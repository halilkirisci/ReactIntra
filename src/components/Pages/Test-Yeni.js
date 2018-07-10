import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class TestYeni extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }
  render() {
    return (
      <div>
        <DatePicker
          className="form-control"
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <form className="form-horizontal">
          <div className="form-group">
            <input type="text" className="form-control" />
          </div>

          <input type="submit" className="btn btn-default" value="Gönder" />
        </form>
      </div>
    );
  }
}

export default TestYeni;
