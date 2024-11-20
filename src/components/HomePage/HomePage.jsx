import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import AdvanceHeading from '@components/AdvanceHeading/AdvanceHeading';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect } from 'react';
import { getProduct } from '@/apis/service';

function HomePage() {
  const { container } = styles;

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className={container}>
        <Header />
        <Banner />
        <Info />
        <AdvanceHeading />
        <HeadingListProduct />
      </div>
    </div>
  );
}

export default HomePage;
