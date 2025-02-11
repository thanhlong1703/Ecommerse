import Header from '@components/Header/Header';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
import Button from '@components/Button/Button';
import { TfiReload } from 'react-icons/tfi';
import { FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
const logoSummary = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
    alt: 'visa'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg',
    alt: 'mastercard'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/39/PayPal_logo.svg',
    alt: 'paypal'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg',
    alt: 'american-express'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Maestro_2016.svg',
    alt: 'maestro'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg',
    alt: 'bitcoin'
  }
];
function DetailProduct() {
  const {
    container,
    navigateSection,
    boxContent,
    boxImg,
    boxDetail,
    priceItem,
    descriptionItem,
    boxSize,
    boxSelectSize,
    sizeItem,
    boxFncAdd,
    fncCout,
    boxBtn,
    boxOr,
    line,
    boxFncTick,
    tick,
    boxSummary,
    titleSummary,
    safe,
    paymentIcons,
    boxIcons,
    secureText,
    boxInfo
  } = styles;
  const [countQuantity, setCountQuantity] = useState(1);
  const handleCountQuanity = (action) => {
    setCountQuantity((prev) => {
      if (action === 'reduce') return Math.max(1, prev - 1);
      if (action === 'increase') return prev + 1;
      return 1;
    });
  };
  return (
    <div>
      <Header />
      <div className={container}>
        <MainLayout>
          <div className={navigateSection}>
            <div>Home {'>'} Men</div>
            <div className='' style={{ cursor: 'pointer' }}>
              {'<'} Return to previous page{' '}
            </div>
          </div>
          <div className={boxContent}>
            <div className={boxImg}>
              <img
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.1-min.jpg'
                alt='img1'
              />
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.2-min.jpg'
                alt='img2'
              />
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.3-min.jpg'
                alt='img3'
              />
              <img
                src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-7.4-min.jpg'
                alt='img4'
              />
            </div>
            <div className={boxDetail}>
              <h1>Amet faucibus nunc</h1>
              <div className={priceItem}>$1,879.99 – $1,888.99</div>
              <div className={descriptionItem}>
                Amet, elit tellus, nisi odio velit ut. Euismod sit arcu, quisque
                arcu purus orci leo.
              </div>
              <div className={boxSize}>
                <div>Size</div>
                <div className={boxSelectSize}>
                  <div className={sizeItem}>S</div>
                  <div className={sizeItem}>M</div>
                  <div className={sizeItem}>L</div>
                </div>
              </div>
              <div className={boxFncAdd}>
                <div className={fncCout}>
                  <div onClick={() => handleCountQuanity('reduce')}>-</div>
                  <input
                    value={countQuantity}
                    onChange={(e) => setCountQuantity(e.target.value)}
                    onBlur={() => {
                      if (countQuantity === '' || countQuantity < 1)
                        setCountQuantity(1);
                    }}
                  />
                  <div onClick={() => handleCountQuanity('increase')}>+</div>
                </div>
                <div className={boxBtn}>
                  <Button content={'Add to cart'} />
                </div>
              </div>
              <div className={boxOr}>
                <div className={line} />
                <div style={{ fontSize: '12px' }}>OR</div>
                <div className={line} />
              </div>
              <div>
                <Button content={'Buy now'} />
              </div>
              <div className={boxFncTick}>
                <div className={tick}>
                  <FaRegHeart />
                </div>
                <div className={tick}>
                  <TfiReload />
                </div>
              </div>
              <div className={boxSummary}>
                <div className={titleSummary}>
                  GUARANTEED <span className={safe}>SAFE</span> CHECKOUT
                </div>
                <div className={paymentIcons}>
                  {logoSummary.map((item) => (
                    <div className={boxIcons}>
                      <img src={item.src} alt={item.alt} />
                    </div>
                  ))}
                </div>
              </div>
              <p className={secureText}>Your Payment is 100% Secure</p>
              <div className={boxInfo}>
                <div>
                  Brand: <span>Brand 03</span>
                </div>
                <div>
                  SKU: <span>87654</span>
                </div>
                <div>
                  Category: <span>Men</span>
                </div>
              </div>
            </div>
          </div>
        </MainLayout>
      </div>
    </div>
  );
}

export default DetailProduct;
