import React, { Component } from 'react';
class ResimHash extends Component {
  constructor(props) {
    super(props);
    this.state = { res: null, className: '' };
    //console.log(props.kod);
  }

  componentDidMount = () => {
    fetch(
      'http://172.17.4.29/intapi/api/ResimBase64Hash/?hash=' +
        this.props.hash +
        '&width=64&height=64&max=1',
    )
      .then(response => response.json())
      .then(res => this.setState({ res }))
      .catch(error => console.log('hata', error));
  };

  render() {
    //console.log('dolduuu ' + this.state.res);
    if (!this.state.res) {
      return <span>Loading...</span>;
    }
    return <img className={this.state.className} src={this.state.res} alt="" />;
  }
}
export default ResimHash;
