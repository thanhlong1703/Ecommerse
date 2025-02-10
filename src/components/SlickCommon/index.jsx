import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import './styles.css';
function SlickCommon({ data }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SlArrowRight />,
    prevArrow: <SlArrowLeft />
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <img src={item} key={index} />
      ))}
    </Slider>
  );
}

export default SlickCommon;
