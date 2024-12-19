import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useContext, useEffect, useState } from 'react';
import { getProduct } from '@/apis/service';
import PopularProduct from '@components/PopularProduct/PopularProduct';
import Sale from '@components/Sale/Sale';
import Footer from '@components/Footer/Footer';
import { OurShopContext } from '@/contexts/OurShopProvider';

function HomePage() {
  const { container } = styles;

  const [listProduct, setListProduct] = useState([]);
  const { setIsShowGrid } = useContext(OurShopContext);
  useEffect(() => {
    const query = {
      sortType: 0,
      page: 1,
      limit: 10
    };
    getProduct(query).then((res) => {
      setListProduct(res.contents);
    });
  }, []);
  useEffect(() => {
    setIsShowGrid(true);
  }, []);

  return (
    <div>
      <div className={container}>
        <Header />
        <Banner />
        <Info />
        <AdvanceHeading />
        <HeadingListProduct data={listProduct.slice(0, 2)} />
        <PopularProduct data={listProduct.slice(2, 10)} />
        <Sale />
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
