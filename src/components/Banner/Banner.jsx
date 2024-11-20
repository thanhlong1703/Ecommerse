import Button from '@components/Button/Button';
import styles from './styles.module.scss';

function Banner() {
  const { container, content, des } = styles;
  return (
    <div className={container}>
      <di className={content}>
        <h1>XStore Marseille04 Demo</h1>
        <div className={des}>
          Make yours celebrations even more special this years with beautiful.
        </div>
        <Button content={'Go to shop'} />
      </di>
    </div>
  );
}

export default Banner;
