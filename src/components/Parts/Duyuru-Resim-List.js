import React, { Component } from 'react';
import $ from 'jquery';

class DuyuruResimList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resimler: null,
    };
  }

  componentDidMount() {
    console.log(this.props);
    $.getJSON('http://172.17.4.29/intapi/api/DuyuruFoto/' + this.props.duyuruId, result => {
      const resimler = result;
      this.setState({ resimler });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('scu');
    if (nextProps.duyuruId !== this.props.duyuruId) {
      return false;
    }
  }

  render() {
    if (!this.state.resimler) {
      return <span>Loading...</span>;
    }
    console.log(this.state.resimler);
    return (
      <div className="m-list-pics m-list-pics--sm m--padding-left-20">
        {this.state.resimler.map((res, i) => (
          <a href="#">
            <img src={res} title="" alt="" />
          </a>
        ))}
      </div>
    );
  }
}

export default DuyuruResimList;
