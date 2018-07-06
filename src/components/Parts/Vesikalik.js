import React, { Component } from 'react';
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
      'http://172.17.4.29/intapi/api/ResimBase64/?kod=' + this.props.kod + '&width=64&height=64',
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
    return <img className="img-fluid rounded" src={this.state.res} alt="" />;
  }
}
export default Vesikalik;
