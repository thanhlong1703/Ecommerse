import { deleteCartItem } from '@/apis/cartService';
import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';

function ItemCard({
  name,
  src,
  sizeChosed,
  priceItem,
  sku,
  quantity,
  productId,
  userId,
  setIsDelete
}) {
  const { container, boxContent, title, price, iconClose, size } = styles;
  const { handleGetListCart } = useContext(SideBarContext);

  const handleRemoveItem = () => {
    setIsDelete(true);
    deleteCartItem({
      userId,
      productId
    })
      .then((res) => {
        setIsDelete(false);
        handleGetListCart(userId, 'cart');
      })
      .catch((err) => {
        setIsDelete(false);
      });
  };
  return (
    <div className={container}>
      <img src={src} width={70} />
      <div className={boxContent}>
        <div className={title}>{name}</div>
        <div className={size}>Size:{sizeChosed}</div>
        <div className={price}>
          {quantity} x ${priceItem}
        </div>
        <div className={price}>SKU: {sku}</div>
      </div>
      <div className={iconClose} onClick={handleRemoveItem}>
        <IoCloseOutline style={{ fontSize: 18 }} />
      </div>
    </div>
  );
}

export default ItemCard;
