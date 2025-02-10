import { useContext, useState } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import SlickCommon from '@components/SlickCommon';
import styles from './styles.module.scss';
import classNames from 'classnames';
import SelectBox from '@/pages/OurShop/components/SelectBox';
import Button from '@components/Button/Button';
import LoadingCommon from '@components/LoadingCommon';
const showOptions = [
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5', value: '5' },
  { label: '6', value: '6' },
  { label: '7', value: '7' }
];
function Detail() {
  const {
    container,
    infoDetail,
    isActiveSize,
    boxSize,
    size,
    btnClear,
    boxSelect,
    boxOr,
    line
  } = styles;
  const { detail } = useContext(SideBarContext);
  const [sizeChose, setSizeChose] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
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
  console.log(detail);
  return (
    <div className={container}>
      <SlickCommon data={detail.images} />
      <div className={infoDetail}>
        <div>{detail.name}</div>
        <div>${detail.price}</div>
        <div>{detail.description}</div>
        <div className={boxSize}>
          Size:
          {detail.size.map((item, index) => {
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
          <div className={btnClear} onClick={() => setSizeChose('')}>
            {sizeChose && 'Clear'}
          </div>
        </div>
        <div className={boxSelect}>
          <SelectBox
            options={showOptions}
            defaultValue={quantity}
            getValue={(e) => setQuantity(e)}
          />
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
      </div>
      <div className={boxOr}>
        <div className={line} />
        <div style={{ fontSize: '12px' }}>OR</div>
        <div className={line} />
      </div>
    </div>
  );
}

export default Detail;
