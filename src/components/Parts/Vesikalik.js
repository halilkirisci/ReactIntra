import React, { Component } from 'react';
import loadgif from '../../style/load.gif';

import $ from 'jquery';
class Vesikalik extends Component {
  constructor(props) {
    super(props);
    this.state = { res: null };
    //console.log(props.kod);
  }

  componentDidMount = () => {
    this.GetResim();
  };

  GetResim() {
    $.get(
      'http://172.17.4.29/intapi/api/ResimBase64/?kod=' + this.props.kod + '&width=80&height=80',
      resim => {
        const res = resim;
        this.setState({ res });
      },
    );
  }

  render() {
    //console.log('dolduuu ' + this.state.res);
    if (!this.state.res) {
      return <img width="96px" height="96px" src={loadgif} alt={''} />;
    }
    return <img width="80px" height="80px" src={this.state.res} alt="" />;
  }
}
export default Vesikalik;
