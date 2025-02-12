import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlArrowLeft } from 'react-icons/sl';
import { SlArrowRight } from 'react-icons/sl';
import './styles.css';
import ProductCard from '@components/ProductCard/ProductCard';
function SlickCommon({ data, isProductItem = false, showItem = 1 }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: showItem,
    slidesToScroll: 1,
    nextArrow: <SlArrowRight />,
    prevArrow: <SlArrowLeft />
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {isProductItem ? (
              <ProductCard
                src={item.images[0]}
                srcFocus={item.images[1]}
                nameProduct={item.name}
                price={item.price}
                isHomePage={false}
                details={item}
                slideItem
              />
            ) : (
              <img src={item} key={index} />
            )}
          </div>
        );
      })}
    </Slider>
  );
}

export default SlickCommon;
