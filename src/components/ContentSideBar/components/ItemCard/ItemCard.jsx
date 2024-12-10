import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';

function ItemCard() {
  const { container, boxContent, title, price, iconClose, size } = styles;
  return (
    <div className={container}>
      <img
        src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-1.1-min.jpg'
        width={70}
      />
      <div className={boxContent}>
        <div className={title}>Title</div>
        <div className={size}>Size: M</div>
        <div className={price}>&</div>
        <div className={price}>SKU: 1234</div>
      </div>
      <div className={iconClose}>
        <IoCloseOutline style={{ fontSize: 18 }} />
      </div>
    </div>
  );
}

export default ItemCard;
