import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import ProductCard from '@components/ProductCard/ProductCard';
function PopularProduct({ data }) {
  const { container } = styles;
  return (
    <>
      <MainLayout>
        <div className={container}>
          {data.map((item) => (
            <ProductCard
              key={item.id}
              src={item.images[0]}
              srcFocus={item.images[1]}
              nameProduct={item.name}
              price={item.price}
            />
          ))}
        </div>
      </MainLayout>
    </>
  );
}

export default PopularProduct;
