import Button from '@components/Button/Button';
import styles from '../styles.module.scss';
import CountDown from '@components/Coutdown/Countdown';
function Banner() {
  const { containerBanner, countDown, titleCountDownBanner } = styles;
  const targetDate = '2024-12-31T00:00:00';
  return (
    <div className={containerBanner}>
      <div className={countDown}>
        <CountDown targetDate={targetDate} />
      </div>
      <div className={titleCountDownBanner}>The classics make a comeback</div>
      <div
        style={{
          width: '176px'
        }}
      >
        <Button content={'Buy now'} />
      </div>
    </div>
  );
}

export default Banner;
