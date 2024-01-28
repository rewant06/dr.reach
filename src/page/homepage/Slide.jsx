import React from "react";

function Slide() {
  return (

    <div className="hero_area">
    <header className="header_section">
      
    <section className="slider_section ">
      <div className="dot_design">
        <img src="images/dots.png" alt="Dots Design" />
      </div>
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Hybrid
                      <span>
                        Care
                      </span>
                    </h1>
                    <p>
                      Combining physical and virtual treatment can indeed be a promising approach to healthcare.
                    </p>
                    <a href="https://www.google.com">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt="Slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Physical
                      <span>
                        Care
                      </span>
                    </h1>
                    <p>
                      When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                    </p>
                    <a href="https://www.google.com">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.jpg" alt="Slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="detail-box">
                    <div className="play_btn">
                      <button>
                        <i className="fa fa-play" aria-hidden="true"></i>
                      </button>
                    </div>
                    <h1>
                      Virtual
                      <span>
                        Care
                      </span>
                    </h1>
                    <p>
                      Through the virtual service, both the patient and the specialist doctor will be connected through a video call using our application.
                    </p>
                    <a href="https://www.google.com">
                      Contact Us
                    </a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/virtual.jpg" width="100%" height="400px" alt="Virtual" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel_btn-box">
          <a className="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <img src="images/prev.png" alt="Previous Button" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <img src="images/next.png" alt="Next Button" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>

    </header>
  </div>




   
  );
}

export default Slide;