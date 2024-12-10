import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemCard from '@components/ContentSideBar/components/ItemCard/ItemCard';
import Button from '@components/Button/Button';
function Compare() {
  const { container } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<TfiReload style={{ fontSize: 30 }} />}
          title={'compare'}
        />
        <ItemCard />
      </div>
      <div>
        <Button content={'VIEW COMPARE'} />
      </div>
    </div>
  );
}

export default Compare;
