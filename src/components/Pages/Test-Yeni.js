import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Moment from 'moment';

class TestYeni extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Yeni Test Giriş</h2>
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
