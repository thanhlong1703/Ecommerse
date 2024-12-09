import Button from '@components/Button/Button';
import styles from './styles.module.scss';
import useTranslateXImage from '@/hooks/useTranslateXImage';

function Sale() {
  const { container, boxImage, content, title, des } = styles;
  const { translateXPosition } = useTranslateXImage();

  return (
    <div className={container}>
      <div
        className={boxImage}
        style={{
          transform: `translateX(${translateXPosition}px)`,
          transition: 'transform 0.6s case'
        }}
      >
        <img
          src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
          alt='sale-image-1'
          width={555}
          height={500}
        />
      </div>
      <div className={content}>
        <h2 className={title}>Sale of the year</h2>
        <div className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </div>
        <div
          style={{
            width: '176px'
          }}
        >
          <Button content={'Read more'} isPrimary={false} />
        </div>
      </div>
      <div
        className={boxImage}
        style={{
          transform: `translateX(-${translateXPosition}px)`,
          transition: 'transform 0.6s case'
        }}
      >
        <img
          src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
          alt='sale-image-1'
          width={555}
          height={500}
        />
      </div>
    </div>
  );
}

export default Sale;
