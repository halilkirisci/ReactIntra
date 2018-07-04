import React from 'react';
import Resim from './Resim';

const RehberListItem = props => {
  const { kisi } = props;
  return (
    <div className="m-portlet m-portlet--bordered-semi m-portlet--full-height  m-portlet--rounded-force">
      <div className="m-portlet__head m-portlet__head--fit">
        <div className="m-portlet__head-caption">
          <div className="m-portlet__head-action">
            <button type="button" className="btn btn-sm m-btn--pill  btn-brand">
              Blog
            </button>
          </div>
        </div>
      </div>
      <div className="m-portlet__body">
        <div className="m-widget19">
          <div
            className="m-widget19__pic m-portlet-fit--top m-portlet-fit--sides"
            style={{ minheight: '286px' }}
          >
            <Resim dosya={'abi'} />
            <img src="assets/app/media/img//blog/blog1.jpg" alt="" />
            <h3 className="m-widget19__title m--font-light">Introducing New Feature</h3>
            <div className="m-widget19__shadow" />
          </div>
          <div className="m-widget19__content">
            <div className="m-widget19__header">
              <div className="m-widget19__user-img">
                <img
                  className="m-widget19__img"
                  src="assets/app/media/img//users/user1.jpg"
                  alt=""
                />
              </div>
              <div className="m-widget19__info">
                <span className="m-widget19__username">
                  {kisi.PERSONEL_AD} {kisi.SOYAD}
                </span>
                <br />
                <span className="m-widget19__time">UX/UI Designer, Google</span>
              </div>
              <div className="m-widget19__stats">
                <span className="m-widget19__number m--font-brand">18</span>
                <span className="m-widget19__comment">Comments</span>
              </div>
            </div>
            <div className="m-widget19__body">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry scrambled it
              to make text of the printing and typesetting industry scrambled a type specimen book
              text of the dummy text of the printing printing and typesetting industry scrambled
              dummy text of the printing.
            </div>
          </div>
          <div className="m-widget19__action">
            <button
              type="button"
              className="btn m-btn--pill btn-secondary m-btn m-btn--hover-brand m-btn--custom"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RehberListItem;
