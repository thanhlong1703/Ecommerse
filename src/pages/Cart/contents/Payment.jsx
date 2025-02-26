import Button from '@components/Button/Button';
import styles from '../styles.module.scss';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
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
function Payment() {
  const {
    containerPayment,
    boxPayment,
    line,
    lineSubTotal,
    lineTotal,
    totalValue,
    boxButton,
    boxSummary,
    titleSummary,
    safe,
    paymentIcons,
    secureText,
    boxIcons
  } = styles;
  const navigate = useNavigate();
  const { listCart } = useContext(SideBarContext);
  const handleNavigateToShop = () => {
    navigate('/shop');
  };

  const subTotal = listCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
  return (
    <div className={containerPayment}>
      <div className={boxPayment}>
        <div>Cart total</div>
        <div className={line} />
        <div className={lineSubTotal}>
          <div>Subtotal</div>
          <div>${subTotal.toFixed(2)}</div>
        </div>
        <div className={lineTotal}>
          <div>TOTAL</div>
          <div className={totalValue}>${subTotal.toFixed(2)}</div>
        </div>
        <div className={boxButton}>
          <Button content={'Proceed to checkout'} />
          <Button
            content={'Return to shop'}
            isPrimary={false}
            onClick={handleNavigateToShop}
          />
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
    </div>
  );
}

export default Payment;
