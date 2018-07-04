import React, { Component } from 'react';
import $ from 'jquery';
class Resim extends Component {
  constructor(props) {
    super(props);
    this.state = { res: null };
    console.log(props.kod);
  }

  componentDidMount = () => {
    $.get(
      'http://172.17.1.110/intapi/api/ResimBase64/?kod=' + this.props.kod + '&width=64&height=64',
      res => {
        this.setState({ res });
      },
    );
  };
  render() {
    console.log('dolduuu ' + this.state.res);
    if (!this.state.res) {
      return <span>Loading...</span>;
    }
    return <img className="img-fluid rounded" src={this.state.res} alt={this.props.key} />;
  }
}
export default Resim;
