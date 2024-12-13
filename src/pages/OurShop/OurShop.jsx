import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';
function OurShop() {
  const { container, fncBox, special, btnBack } = styles;

  const navigate = useNavigate();

  const handleBackPre = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <MainLayout>
        <div className={container}>
          <div className={fncBox}>
            <div>
              Home &gt; <span className={special}>Shop</span>
            </div>
            <div className={btnBack} onClick={handleBackPre}>
              &lt; Return to previous page
            </div>
          </div>
          <Banner />
        </div>
      </MainLayout>
    </>
  );
}

export default OurShop;
