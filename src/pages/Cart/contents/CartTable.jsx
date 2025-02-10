import styles from '../styles.module.scss';
import { TfiTrash } from 'react-icons/tfi';
import { Table } from 'antd';
import LoadingCommon from '@components/LoadingCommon';
import Button from '@components/Button/Button';
import SelectBox from '@/pages/OurShop/components/SelectBox';

function CartTable({
  listCart,
  getData,
  handleRemoveCart,
  handleRemoveItem,
  isDeleting
}) {
  const {
    containerTable,
    titleProduct,
    nameProduct,
    overlay,
    boxFnc,
    fncCoupon,
    fncClear,
    boxClear
  } = styles;

  const showOptions = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
    { label: '7', value: '7' }
  ];

  const getValueSelect = (userId, productId, quantity, size) => {
    const data = {
      userId,
      productId,
      quantity,
      size,
      isMultiple: true
    };

    getData(data);
  };

  const columns = [
    {
      title: 'Product',
      dataIndex: 'images',
      key: 'images',
      render: (item) => {
        return <img src={item[0]} width={80} />;
      }
    },
    {
      title: '',
      dataIndex: 'name',
      key: 'name',
      width: 250,
      render: (_, record) => {
        return (
          <div className={titleProduct}>
            <div className={nameProduct}>{record.name}</div>
            <TfiTrash
              onClick={() => handleRemoveItem(record.userId, record.productId)}
            />
          </div>
        );
      }
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: 'SKU',
      dataIndex: 'sku',
      key: 'sku'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, record) => {
        return (
          <SelectBox
            options={showOptions}
            getValue={(e) =>
              getValueSelect(record.userId, record.productId, e, record.size)
            }
            type='show'
            defaultValue={record.quantity}
          />
        );
      }
    },
    {
      title: 'Subtotal',
      dataIndex: 'total',
      key: 'total',
      render: (item) => <div>{item.toFixed(2)}</div>
    }
  ];
  return (
    <div className={containerTable}>
      <Table dataSource={listCart} columns={columns} pagination={false} />
      <div className={boxFnc}>
        <div className={fncCoupon}>
          <input placeholder='Coupon code' />
          <Button content='OK' isPrimary={false} />
        </div>
        <div className={fncClear}>
          <Button
            content={
              <div className={boxClear}>
                <TfiTrash />
                <div>Clear shoping cart</div>
              </div>
            }
            isPrimary={false}
            onClick={() => handleRemoveCart()}
          />
        </div>
      </div>
      {isDeleting && (
        <div className={overlay}>
          <LoadingCommon />
        </div>
      )}
    </div>
  );
}

export default CartTable;
