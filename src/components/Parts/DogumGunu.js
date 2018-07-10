import React, { Component } from 'react';
import Moment from 'moment';
import Vesikalik from './Vesikalik';
import loadgif from '../../style/load.gif';

class DogumGunu extends Component {
  constructor(props) {
    super(props);
    Moment.locale('tr');
    this.state = { doganlar: null };
  }

  componentDidMount = () => {
    /*console.log(
      'http://172.17.4.29/intapi/api/Kisi?gun=' +
        Moment().format('DD') +
        '&ay=' +
        +Moment().format('MM'),
    );*/

    fetch(
      'http://172.17.4.29/intapi/api/Kisi?gun=' +
        Moment().format('DD') +
        '&ay=' +
        +Moment().format('MM'),
    )
      .then(response => response.json())
      .then(doganlar => this.setState({ doganlar }))
      .catch(error => console.log('hata', error));
  };

  render() {
    if (!this.state.doganlar) {
      return <img width="96px" height="96px" src={loadgif} alt={''} />;
    }
    // console.log(this.state.doganlar);
    return (
      <div className="m-portlet m-portlet--full-height m-portlet--fit ">
        <div className="m-portlet__head">
          <div className="m-portlet__head-caption">
            <div className="m-portlet__head-title">
              <h3 className="m-portlet__head-text">Doğum Günü</h3>
            </div>
          </div>
        </div>
        <div className="m-portlet__body">
          <div className="m-widget4 m-widget4--chart-bottom">
            {this.state.doganlar.map((dogan, index) => (
              <div key={'__dogan' + dogan.KOD} className="m-widget4__item">
                <div className="m-widget4__img m-widget4__img--logo">
                  <Vesikalik key={'dogan' + dogan.KOD} kod={dogan.KOD} />
                </div>
                <div className="m-widget4__info">
                  <span className="m-widget4__title">
                    {dogan.PERSONEL_AD} {dogan.SOYAD}
                  </span>
                  <br />
                  <span className="m-widget4__sub">{dogan.İş_Tel}</span>
                </div>
                <span className="m-widget4__ext">
                  <span className="m-widget4__number m--font-brand">X</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DogumGunu;
