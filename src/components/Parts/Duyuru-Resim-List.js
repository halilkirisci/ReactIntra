import React, { Component } from 'react';
import ResimHash from './ResimHash';

class DuyuruResimList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (!this.props.resimler) {
      return <span>Loading...</span>;
    }
    //console.log(this.props.resimler);
    return (
      <div className="m-list-pics m-list-pics--sm m--padding-left-20">
        {this.props.resimler.map((res, i) => (
          <a id={'dra' + i} href="">
            <ResimHash key={'dr' + i} hash={res.hash} />
          </a>
        ))}
      </div>
    );
  }
}

export default DuyuruResimList;
