import { dataInfo } from '@components/Info/contant';
import InfoCard from '@components/Info/InfoCard/InfoCard';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';

function Info() {
  const { containerInfo } = styles;
  return (
    <MainLayout>
      <div className={containerInfo}>
        {dataInfo.map((item) => {
          return (
            <InfoCard
              src={item.src}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Info;
