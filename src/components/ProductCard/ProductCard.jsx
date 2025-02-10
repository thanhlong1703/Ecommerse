import styles from './styles.module.scss';
import reloadIcon from '@icons/svgs/reloadIcon.svg';
import cartIcon from '@icons/svgs/cartIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import classNames from 'classnames';
import Button from '@components/Button/Button';
import { useContext, useEffect, useState } from 'react';
import { OurShopContext } from '@/contexts/OurShopProvider';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { ToastContext } from '@/contexts/ToastProvider';
import { addProductToCart } from '@/apis/cartService';
import LoadingCommon from '@components/LoadingCommon';
import { LiaEyeSolid } from 'react-icons/lia';

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
  const userId = Cookies.get('userId');
  const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
  const { setIsOpen, setType, handleGetListCart, setDetail } =
    useContext(SideBarContext);
  const { toast } = useContext(ToastContext);
  const [isLoading, setIsLoading] = useState(false);

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
  const handleAddToCart = () => {
    if (!userId) {
      setIsOpen(true);
      setType('login');
      toast.warning('Please login to add product to cart');

      return;
    }
    if (!sizeChose) {
      toast.warning('Please chose size');

      return;
    }
    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: sizeChose
    };
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        toast.success(res.data.msg);
        setIsOpen(true);
        setType('cart');
        setIsLoading(false);
        handleGetListCart(userId, 'cart');
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(res.data.msg);
      });
  };
  const handleShowDetail = () => {
    setIsOpen(true);
    setType('detail');
    setDetail(details);
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
              <Button
                content={
                  isLoading ? (
                    <LoadingCommon />
                  ) : sizeChose ? (
                    'Add to cart'
                  ) : (
                    'Select Option'
                  )
                }
                onClick={handleAddToCart}
              />
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
        <div className={fncProduct} onClick={handleShowDetail}>
          <LiaEyeSolid color='white' />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
