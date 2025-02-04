import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiShoppingCart } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemCard from '@components/ContentSideBar/components/ItemCard/ItemCard';
import Button from '@components/Button/Button';
import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import LoadingCommon from '@components/LoadingCommon';
function Cart() {
  const { container, boxButton, total, itemCart, overlay, listItemCart } =
    styles;
  const { listCart, isLoading } = useContext(SideBarContext);
  const [isDelete, setIsDelete] = useState(false);

  return (
    <div className={container}>
      <div className={itemCart}>
        <HeaderSideBar
          icon={<TfiShoppingCart style={{ fontSize: 30 }} />}
          title={'cart'}
        />
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
