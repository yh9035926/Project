import React from "react";
import Slider from "react-slick";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import styled from "styled-components";
import { styleArrow } from "../styleArrow";
const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="wrap">
      <h1>Hello</h1>
      <StyledSlider {...settings}>
        <div>
          <Img src={img1} alt="img" />
        </div>
        <div>
          <Img src={img2} alt="img" />
        </div>
        <div>
          <Img src={img3} alt="img" />
        </div>
      </StyledSlider>
    </div>
  );
};

export default BannerSlider;

const StyledSlider = styled(Slider)`
  /* 비주얼 영역을 가운데 정렬하기 위한 컨테이너 */

  width: 512px;
  margin: 0 auto;
  ${styleArrow}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
