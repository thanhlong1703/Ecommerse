import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import classNames from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';

function ProductCard({
  src,
  srcFocus,
  nameProduct,
  price,
  details,
  isHomePage = true
}) {
  const ourShopStore = useContext(OurShopContext);
  const [sizeChose, setSizeChose] = useState('');

  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);

  useEffect(() => {
    if (isHomePage) {
      setIsShowGrid(true);
    } else {
      setIsShowGrid(ourShopStore?.isShowGrid);
    }
  }, [isHomePage, ourShopStore?.isShowGrid]);

  const {
    container,
    focusImage,
    infoProduct,
    infoName,
    infoPrice,
    functionFocus,
    fncProduct,
    boxSize,
    size,
    textCenter,
    boxBtn,
    gridContainer,
    content,
    isActiveSize,
    btnClear
  } = styles;

  const handleChoseSize = (size) => {
    setSizeChose(size);
  };

  return (
    <div
      className={classNames(container, {
        [gridContainer]: !isShowGrid
      })}
    >
      <img src={src} alt='product-image' width={295} height={353} />
      <img
        src={srcFocus}
        alt='product-image'
        width={295}
        height={353}
        className={focusImage}
      />
      <div
        className={classNames({
          [content]: !isShowGrid
        })}
      >
        {!isHomePage && (
          <div className={boxSize}>
            {details.size.map((item, index) => {
              return (
                <div
                  key={index}
                  className={classNames(size, {
                    [isActiveSize]: sizeChose === item.name
                  })}
                  onClick={() => handleChoseSize(item.name)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
        <div className={btnClear} onClick={() => setSizeChose('')}>
          {sizeChose && 'Clear'}
        </div>
        <div
          className={classNames(infoProduct, {
            [textCenter]: !isHomePage
          })}
        >
          <div className={infoName}>{nameProduct}</div>
          {!isHomePage && <div className={infoPrice}>Brand 01</div>}
          <div className={infoPrice}>${price}</div>
          {!isHomePage && (
            <div className={boxBtn}>
              <Button content={sizeChose ? 'Add to cart' : 'Select Option'} />
            </div>
          )}
        </div>
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
