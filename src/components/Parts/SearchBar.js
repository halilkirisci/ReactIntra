import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="input-group col-md-4">
          <input
            className="form-control py-2"
            type="search"
            value="Kişi Ara"
            id="example-search-input"
          />
          <span className="input-group-append">
            <button className="btn btn-outline-secondary btn-success" type="button">
              <i className="fa fa-search " />
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar;
