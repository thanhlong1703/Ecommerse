import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiShoppingCart } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemCard from '@components/ContentSideBar/components/ItemCard/ItemCard';
import Button from '@components/Button/Button';
function Cart() {
  const { container, boxButton, total } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<TfiShoppingCart style={{ fontSize: 30 }} />}
          title={'cart'}
        />
        <ItemCard />
      </div>
      <div>
        <div className={total}>
          <div>Subtotal:</div>
          <div>$123</div>
        </div>
        <div className={boxButton}>
          <Button content={'VIEW CART'} />
          <Button content={'CHECK OUT'} isPrimary={false} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
