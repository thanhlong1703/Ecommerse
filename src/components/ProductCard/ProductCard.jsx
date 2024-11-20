import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';

function ProductCard({ src, srcFocus, nameProduct, price }) {
  const {
    container,
    focusImage,
    infoProduct,
    infoName,
    infoPrice,
    functionFocus,
    fncProduct
  } = styles;
  return (
    <div className={container}>
      <img src={src} alt='product-image' width={295} height={353} />
      <img
        src={srcFocus}
        alt='product-image'
        width={295}
        height={353}
        className={focusImage}
      />
      <div className={infoProduct}>
        <div className={infoName}>{nameProduct}</div>
        <div className={infoPrice}>{price}</div>
      </div>
      <div className={functionFocus}>
        <div className={fncProduct}>
          <img src={cartIcon} alt='cart' width={15} height={15} />
        </div>
        <div className={fncProduct}>
          <img src={heartIcon} alt='cart' width={14} height={14} />
        </div>
        <div className={fncProduct}>
          <img src={reloadIcon} alt='cart' width={14} height={14} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ProductCard;
