import React, { Component } from 'react';
import ResimHash from './ResimHash';
import Base64 from 'base-64';
import $ from 'jquery';

class DuyuruResimList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.resimler) {
      return <span>Loading...</span>;
    }
    console.log(this.props.resimler);
    return (
      <div className="m-list-pics m-list-pics--sm m--padding-left-20">
        {this.props.resimler.map((res, i) => (
          <a href="#">
            <ResimHash hash={res.hash} />
          </a>
        ))}
      </div>
    );
  }
}

export default DuyuruResimList;
