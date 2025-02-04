import MainLayout from '@components/Layout/Layout';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import ProductCard from '@components/ProductCard/ProductCard';
import styles from '../styles.module.scss';
import Button from '@components/Button/Button';
import LoadingCommon from '@components/LoadingCommon';

function ListProducts() {
  const {
    products,
    isShowGrid,
    isLoading,
    total,
    isLoadingMore,
    handleLoadMore
  } = useContext(OurShopContext);
  const { containerProduct, sectionListProduct, rotate } = styles;
  return (
    <div className={sectionListProduct}>
      <MainLayout>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
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
            {products.length < total && (
              <div style={{ width: '180px', margin: '40px auto 0px' }}>
                <Button
                  content={isLoadingMore ? <LoadingCommon /> : 'Load more'}
                  onClick={handleLoadMore}
                />
              </div>
            )}
          </>
        )}
      </MainLayout>
    </div>
  );
}

export default ListProducts;
