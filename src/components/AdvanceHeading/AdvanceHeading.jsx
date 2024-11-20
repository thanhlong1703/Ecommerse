import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function AdvanceHeading() {
  const { container, headline, midHeader, title, des } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <div className={headline}></div>
        <div className={midHeader}>
          <div className={title}>don't miss super offers</div>
          <div className={des}>Our best products</div>
        </div>
        <div className={headline}></div>
      </div>
    </MainLayout>
  );
}

export default AdvanceHeading;
