import React, { Component } from 'react';
import Datetime from 'react-datetime';

class TestYeni extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Datetime locale="tr" dateFormat="DD.MM.YYYY" timeFormat={false} />
        <h2>Yeni Test Girişx</h2>
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
