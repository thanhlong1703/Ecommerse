import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiShoppingCart } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemCard from '@components/ContentSideBar/components/ItemCard/ItemCard';
import Button from '@components/Button/Button';
import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingCommon from '@components/LoadingCommon';
import { useNavigate } from 'react-router-dom';
function Cart() {
  const {
    container,
    boxButton,
    total,
    itemCart,
    overlay,
    listItemCart,
    boxNoProduct
  } = styles;
  const { listCart, isLoading, setIsOpen } = useContext(SideBarContext);
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigate();

  const handleNavigateToShop = () => {
    navigate('/shop');
    setIsOpen(false);
  };
  const handleNavigateToCart = () => {
    navigate('/cart');
    setIsOpen(false);
  };

  const subTotal = listCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  return (
    <div className={container}>
      <HeaderSideBar
        icon={<TfiShoppingCart style={{ fontSize: 30 }} />}
        title={'cart'}
      />
      {listCart.length ? (
        <div className={itemCart}>
          <div className={listItemCart}>
            {listCart.map((item, index) => {
              return (
                <ItemCard
                  key={index}
                  name={item.name}
                  priceItem={item.price}
                  sku={item.sku}
                  src={item.images[0]}
                  quantity={item.quantity}
                  sizeChosed={item.size}
                  productId={item.productId}
                  userId={item.userId}
                  setIsDelete={setIsDelete}
                />
              );
            })}
            {(isDelete || isLoading) && (
              <div className={overlay}>
                <LoadingCommon />
              </div>
            )}
          </div>
          <div>
            <div className={total}>
              <div>Subtotal:</div>
              <div>${subTotal.toFixed(2)}</div>
            </div>
            <div className={boxButton}>
              <Button content={'VIEW CART'} onClick={handleNavigateToCart} />
              <Button content={'CHECK OUT'} isPrimary={false} />
            </div>
          </div>
        </div>
      ) : (
        <div className={boxNoProduct}>
          <div>No product in the cart</div>
          <Button
            content={'Return to shop'}
            isPrimary={false}
            onClick={handleNavigateToShop}
          />
        </div>
      )}
    </div>
  );
}

export default Cart;
