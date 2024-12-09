import CountDown from '@components/Coutdown/Countdown';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import ProductCard from '@components/ProductCard/ProductCard';
import Button from '@components/Button/Button';

function HeadingListProduct({ data }) {
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
          <div
            style={{
              width: '176px'
            }}
          >
            <Button content={'Buy now'} />
          </div>
        </div>
        <div className={item}>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              src={item.images[0]}
              srcFocus={item.images[1]}
              nameProduct={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
