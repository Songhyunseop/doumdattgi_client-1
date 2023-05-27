import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { Image } from "antd";
import { fallback } from "../../../../../commons/libraries/fallback";

const StyledSlider = styled(SliderComponent)`
  .slick-list {
    height: 360px;
  }
  .slick-arrow {
    z-index: 999;
    width: 80px;
    height: 80px;
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
    display: block;
    width: 80px;
    height: 80px;
    background: rgba(238, 238, 238, 0.5);
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
    right: -40px;
  }
  .slick-next:before {
    background-image: url("/next.png");
    background-repeat: no-repeat;
    background-position: center;
  }
  // 캐러셀 도트
  .slick-dots {
    bottom: 20px;
  }
  .slick-dots li button:before {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    background: #88b04b;
    border-radius: 50%;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
  }
`;

const Slide = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

export default function Slider(props) {
  const settings = {
    arrows: true,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <StyledSlider {...settings}>
      {["/banner1.png", "/banner2.png", "/banner3.png"].map(el => (
        <Slide key={el}>
          <Image
            src={`${el}`}
            alt=""
            fallback={fallback}
            width={1200}
            height={360}
            preview={false}
          />
        </Slide>
      ))}
    </StyledSlider>
  );
}
