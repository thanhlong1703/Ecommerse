import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Contents from '@/pages/Cart/contents';
import Steps from '@/pages/Cart/steps';
import styles from './styles.module.scss';
import MainLayout from '@components/Layout/Layout';
function Cart() {
  const { container } = styles;
  return (
    <div>
      <Header />
      <div className={container}>
        <Steps />
        <MainLayout>
          <Contents />
        </MainLayout>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
