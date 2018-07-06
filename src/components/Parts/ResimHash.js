import React, { Component } from 'react';
import $ from 'jquery';
class ResimHash extends Component {
  constructor(props) {
    super(props);
    this.state = { res: null, className: '' };
    //console.log(props.kod);
  }

  componentDidMount = () => {
    this.GetResim();
  };

  GetResim() {
    $.get(
      'http://172.17.4.29/intapi/api/ResimBase64Hash/?hash=' +
        this.props.hash +
        '&width=64&height=64',
      resim => {
        const res = resim;
        this.setState({ res });
      },
    );
  }

  render() {
    //console.log('dolduuu ' + this.state.res);
    if (!this.state.res) {
      return <span>Loading...</span>;
    }
    return <img className={this.state.className} src={this.state.res} alt="" />;
  }
}
export default ResimHash;
