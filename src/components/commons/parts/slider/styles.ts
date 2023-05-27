import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled(Slider)`
  .slick-list {
    height: 640px;
    border-radius: 6px;
    border: 1px solid #e0e1ea;
  }
  // 캐러셀 화살표
  .slick-arrow {
    z-index: 999;
    width: 48px;
    height: 48px;
    top: 40%;
    transform: none;
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
    display: block;
    width: 80px;
    height: 80px;
    background-color: rgba(238, 238, 238, 0.8);
    border-radius: 50%;
  }
  .slick-prev {
    left: -40px;
  }
  .slick-prev:before {
    background-image: url("/prev.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  .slick-next {
    right: -6px;
  }
  .slick-next:before {
    background-image: url("/next.png");
    background-repeat: no-repeat;
    background-position: center;
  }

  // 썸네일
  .slick-dots.slick-thumb {
    position: relative;
    bottom: 0;
    height: 80px;
    margin-top: 10px;
    width: 1200px;
    right: -50%;
    transform: translateX(-50%);

    li {
      width: 80px;
      height: 80px;
      position: relative;
    }
  }
  li.slick-active::before {
    content: "";
    width: 80px;
    height: 80px;
    display: block;
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;
    border: 5px solid #ffd600;
    box-sizing: border-box;
  }
`;
