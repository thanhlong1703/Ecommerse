import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiHeart } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemCard from '@components/ContentSideBar/components/ItemCard/ItemCard';
import Button from '@components/Button/Button';
function Wishlist() {
  const { container, boxButton } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<TfiHeart style={{ fontSize: 30 }} />}
          title={'wishlist'}
        />
        <ItemCard />
      </div>
      <div className={boxButton}>
        <Button content={'VIEW WISHLIST'} />
        <Button content={'ADD ALL TO CART'} isPrimary={false} />
      </div>
    </div>
  );
}

export default Wishlist;
