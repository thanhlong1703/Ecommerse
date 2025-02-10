import CartTable from '@/pages/Cart/contents/CartTable';
import styles from '../styles.module.scss';
import Payment from '@/pages/Cart/contents/Payment';
import { useContext, useState } from 'react';
import { PiShoppingCartLight } from 'react-icons/pi';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { deleteCart, deleteCartItem } from '@/apis/cartService';
import Button from '@components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { addProductToCart } from '@/apis/cartService';
function Contents() {
  const { containerContents, boxEmptyCart, titleEmpty, boxBtnEmpty } = styles;
  const { listCart, handleGetListCart, userId, isLoading, setIsLoading } =
    useContext(SideBarContext);
  const navigate = useNavigate();

  const handleUpdateQuatity = (data) => {
    setIsLoading(true);
    addProductToCart(data)
      .then((res) => {
        handleGetListCart(data.userId, 'cart');
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const handleRemoveCart = () => {
    setIsLoading(true);
    deleteCart({
      userId
    })
      .then((res) => {
        setIsLoading(false);
        handleGetListCart(userId, 'cart');
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  const handleRemoveItem = (userId, productId) => {
    setIsLoading(true);
    deleteCartItem({
      userId,
      productId
    })
      .then((res) => {
        setIsLoading(false);
        handleGetListCart(userId, 'cart');
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };
  const handleNavigateToShop = () => {
    navigate('/shop');
  };

  return (
    <div className={containerContents}>
      {listCart.length > 0 ? (
        <>
          <CartTable
            getData={handleUpdateQuatity}
            listCart={listCart}
            handleRemoveCart={handleRemoveCart}
            handleRemoveItem={handleRemoveItem}
            isDeleting={isLoading}
          />
          <Payment />
        </>
      ) : (
        <div className={boxEmptyCart}>
          <PiShoppingCartLight
            style={{
              fontSize: '50px'
            }}
          />
          <div className={titleEmpty}>YOUR SHOPPING CART IS EMPTY</div>
          <div>
            We invite you to get acquainted with an assortment of our shop.
            Surely you can find something for yourself!
          </div>
          <div className={boxBtnEmpty}>
            <Button content={'RETURN TO SHOP'} onClick={handleNavigateToShop} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Contents;
