import { useContext } from 'react';
import styles from '../styles.module.scss';
import { TfiTrash } from 'react-icons/tfi';
import { Table } from 'antd';
import { SideBarContext } from '@/contexts/SideBarProvider';
import SelectBox from '@/pages/OurShop/components/SelectBox';
function CartTable() {
  const { listCart } = useContext(SideBarContext);
  const { titleProduct, nameProduct } = styles;
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
      render: (item) => {
        return (
          <div className={titleProduct}>
            <div className={nameProduct}>{item}</div>
            <TfiTrash />
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
      key: 'quantity'
    },
    {
      title: 'Subtotal',
      dataIndex: 'total',
      key: 'total'
    }
  ];
  return (
    <div>
      <Table dataSource={listCart} columns={columns} pagination={false} />
    </div>
  );
}

export default CartTable;
