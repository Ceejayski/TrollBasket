import React from "react";
import Flickity from "react-flickity-component";
import "./style.scss";

const Carousel = () => {
  const flickityOptions = {
    freeScroll: true,
    prevNextButtons: false,
    pageDots: false,
    tabIndex: 2,
    autoPlay: true,
    contain: true,
  };

  return (
    <div>
      <div className="carousel-div">
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          <div className="carousel-img color-blue">
            <div className="position-relative h-100 w-100">
              <div className="position-absolute d-flex w-95 justify-content-between carousel-text">
                <p className="font-12 w-70">
                  Having any issues with your order?
                </p>
                <button className="carousel-text-btn"> Contact Us</button>
              </div>
            </div>
          </div>
          <div className="carousel-img color-orange">
            <div className="position-relative h-100 w-100">
              <div className="position-absolute d-flex w-95 justify-content-between carousel-text">
                <p className="font-12 w-70">
                  Having any issues with your order?
                </p>
                <button className="carousel-text-btn"> Contact Us</button>
              </div>
            </div>
          </div>
          <div className="carousel-img color-blue-light">
            <div className="position-relative h-100 w-100">
              <div className="position-absolute d-flex w-95 justify-content-between carousel-text">
                <p className="font-12 w-70">
                  Having any issues with your order?
                </p>
                <button className="carousel-text-btn"> Contact Us</button>
              </div>
            </div>
          </div>
        </Flickity>
      </div>

      <div className="other-links my-container1 my-3">
        <div className="row">
          <div className="col-3">
            <div className="other-links-icons color-blue-light">
              <span className="material-icons">article</span>
            </div>
            <p className="font-10">Product categories</p>
          </div>
          <div className="col-3">
            <div className="other-links-icons color-orange">
              <span className="material-icons">local_fire_department</span>
            </div>
            <p className="font-10">Popular Products</p>
          </div>
          <div className="col-3">
            <div className="other-links-icons color-purple">
              <span className="material-icons">thumb_up</span>
            </div>
            <p className="font-10">Recommended Products</p>
          </div>
          <div className="col-3">
            <div className="other-links-icons color-green">
              <span className="material-icons">store</span>
            </div>
            <p className="font-10">Shops</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
