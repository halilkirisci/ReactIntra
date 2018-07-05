import React, { Component } from 'react';
import $ from 'jquery';
import Moment from 'moment';

class DogumGunu extends Component {
  constructor(props) {
    super(props);
    //Moment.locale('tr');
    this.state = { doganlar: null };
  }

  componentDidMount = () => {
    console.log('http://172.17.4.29/intapi/api/Kisi?tarih=' + Moment().format('DD.MM.YYYY'));
    $.getJSON(
      'http://172.17.4.29/intapi/api/Kisi?tarih=' + Moment().format('DD.MM.YYYY'),
      result => {
        const doganlar = result;
        this.setState({ doganlar });
      },
    );
  };

  render() {
    console.log(this.state.doganlar);
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
            <div className="m-widget4__item">
              <div className="m-widget4__img m-widget4__img--logo">
                <img src="assets/app/media/img/client-logos/logo3.png" alt="" />
              </div>
              <div className="m-widget4__info">
                <span className="m-widget4__title">Phyton</span>
                <br />
                <span className="m-widget4__sub">A Programming Language</span>
              </div>
              <span className="m-widget4__ext">
                <span className="m-widget4__number m--font-brand">+$17</span>
              </span>
            </div>
            <div className="m-widget4__item">
              <div className="m-widget4__img m-widget4__img--logo">
                <img src="assets/app/media/img/client-logos/logo1.png" alt="" />
              </div>
              <div className="m-widget4__info">
                <span className="m-widget4__title">FlyThemes</span>
                <br />
                <span className="m-widget4__sub">A Let's Fly Fast Again Language</span>
              </div>
              <span className="m-widget4__ext">
                <span className="m-widget4__number m--font-brand">+$300</span>
              </span>
            </div>
            <div className="m-widget4__item">
              <div className="m-widget4__img m-widget4__img--logo">
                <img src="assets/app/media/img/client-logos/logo4.png" alt="" />
              </div>
              <div className="m-widget4__info">
                <span className="m-widget4__title">Starbucks</span>
                <br />
                <span className="m-widget4__sub">Good Coffee &amp; Snacks</span>
              </div>
              <span className="m-widget4__ext">
                <span className="m-widget4__number m--font-brand">+$300</span>
              </span>
            </div>
            <div className="m-widget4__chart m-portlet-fit--sides m--margin-top-20">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div />
                </div>
                <div>
                  <div />
                </div>
              </div>
              <canvas
                id="m_chart_trends_stats_2"
                width="520"
                height="325"
                className="chartjs-render-monitor"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DogumGunu;
