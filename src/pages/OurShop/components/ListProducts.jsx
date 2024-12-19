import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import ProductCard from '@components/ProductCard/ProductCard';
import styles from '../styles.module.scss';

function ListProducts() {
  const { products, isShowGrid } = useContext(OurShopContext);
  const { containerProduct } = styles;
  return (
    <>
      <MainLayout>
        <div className={isShowGrid ? containerProduct : ''}>
          {products.map((item) => (
            <ProductCard
              key={item.id}
              src={item.images[0]}
              srcFocus={item.images[1]}
              nameProduct={item.name}
              price={item.price}
              details={item}
              isHomePage={false}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
}

export default ListProducts;
