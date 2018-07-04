import React, { Component } from 'react';
import $ from 'jquery';

class Resim extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dosya: null,
      imageStatus: 'loading',
    };

    //this.GetResim = this.GetResim.bind(this);
  }

  componentDidMount = () => {
    console.log('kod:' + this.props.kod);
    this.GetResim(this.props.kod);
  };

  handleImageLoaded() {
    this.setState({ imageStatus: 'loaded' });
  }

  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  }

  GetResim(hash) {
    console.log('http://172.17.1.110/intapi/api/ResimBase64/?id=' + hash);
    $.get(
      `http://172.17.1.110/intapi/api/ResimBase64/?kod=${hash}&width=64&height=64&dd=${Math.random()}`,
      dosya => {
        console.log('%%%%http://172.17.1.110/intapi/api/Resim/?id=' + hash);
        this.setState({ dosya });
      },
    );
  }

  render() {
    if (!this.state.dosya) {
      return <span>Yükleniyeeee..</span>;
    }
    //console.log('render dosya :' + this.state.dosya);
    return (
      <div>
        <img
          className="img-fluid"
          src={this.state.dosya}
          alt={this.props.key}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
        />
      </div>
    );
  }
}
export default Resim;
