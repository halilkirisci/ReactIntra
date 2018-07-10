import React, { Component } from 'react';
import loadgif from '../../style/load.gif';
class Vesikalik extends Component {
  constructor(props) {
    super(props);
    this.state = { res: null };
    //console.log(props.kod);
  }

  componentDidMount = () => {
    fetch(
      'http://172.17.4.29/intapi/api/ResimBase64/?kod=' + this.props.kod + '&width=80&height=80',
    )
      .then(response => response.json())
      .then(res => this.setState({ res }))
      .catch(error => console.log('hata', error));
  };

  render() {
    //console.log('dolduuu ' + this.state.res);
    if (!this.state.res) {
      return <img width="96px" height="96px" src={loadgif} alt={''} />;
    }
    return <img width="80px" height="80px" src={this.state.res} alt="" />;
  }
}
export default Vesikalik;
