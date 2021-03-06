import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./secondSection.css";
import Image from "../../assets/img/IMAGE.png";
import Image1 from "../../assets/img/IMAGE-1.png";
import Image2 from "../../assets/img/IMAGE-2.png";
import Image3 from "../../assets/img/IMAGE-3.png";
import Image4 from "../../assets/img/IMAGE-4.png";
import RightArrow from "../../assets/img/RightArrow.svg";

export default class secondSection extends Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };

    return (
      <Container className="container-fluid">
        <div className="d-flex justify-content-end me-4 mb-4" id="recent_view">
          <h1 className="nftH1 h2 lh-base">Recent Nft</h1>
          <div id="vl" className="ms-4 me-4"></div>
          <h2 className="nftH2 h5 lh-base pt-2" id="view_more">View More</h2>
        </div>

        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={5000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="d-flex justify-content-center">
            <img src={Image} alt="" />
            <div class="text-dark bg-dark d-flex align-items-center justify-content-start" id="caption">
              <p className="text-start ms-3 mt-3" id="captionP">
                Relics Of A Mortal Past 1 - NFT
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <img src={Image1} alt="" />
            <div class="text-dark bg-dark d-flex align-items-center justify-content-start" id="caption">
              <p className="text-start ms-3 mt-3" id="captionP">
                Relics Of A Mortal Past 1 - NFT
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <img src={Image2} alt="" />
            <div class="text-dark bg-dark d-flex align-items-center justify-content-start" id="caption">
              <p className="text-start ms-3 mt-3" id="captionP">
                Relics Of A Mortal Past 1 - NFT
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <img src={Image3} alt="" />
            <div class="text-dark bg-dark d-flex align-items-center justify-content-start" id="caption">
              <p className="text-start ms-3 mt-3" id="captionP">
                Relics Of A Mortal Past 1 - NFT
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <img src={Image4} alt="" />
            <div class="text-dark bg-dark d-flex align-items-center justify-content-start" id="caption">
              <p className="text-start ms-3 mt-3" id="captionP">
                Relics Of A Mortal Past 1 - NFT
              </p>
            </div>
          </div>

          <div className="viewBtn h-100 d-flex justify-content-center align-items-center">
            <button id="whiteBtn" className="shadow-sm w-25">
              View all
              <img src={RightArrow} alt="Arrow" className="ms-2 mb-1" />
            </button>
          </div>
        </Carousel>
      </Container>
    );
  }
}
