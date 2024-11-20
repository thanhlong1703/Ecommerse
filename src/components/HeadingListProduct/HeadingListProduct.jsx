import CountDown from '@components/Coutdown/Countdown';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import ProductCard from '@components/ProductCard/ProductCard';
import Button from '@components/Button/Button';

function HeadingListProduct() {
  const targetDate = '2024-12-31T00:00:00';
  const { container, countDownBanner, countDown, titleCountDownBanner, item } =
    styles;

  return (
    <MainLayout>
      <div className={container}>
        <div className={countDownBanner}>
          <div className={countDown}>
            <CountDown targetDate={targetDate} />
          </div>
          <div className={titleCountDownBanner}>
            The classics make a comeback
          </div>
          <Button content={'Buy now'} />
        </div>
        <div className={item}>
          <ProductCard
            src={
              'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
            }
            srcFocus={
              'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.2-min.jpg'
            }
            nameProduct={'10K Yellow Gold'}
            price={'$99.99'}
          />
          <ProductCard
            src={
              'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
            }
            srcFocus={
              'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.4-min.jpg'
            }
            nameProduct={'Consectetur nibh at'}
            price={'$119.99'}
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
