import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import SelectBox from '@pages/OurShop/components/SelectBox';
function Filter() {
  const { containerFilter, boxIcon, boxLeft, boxRight } = styles;

  const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);

  const getValueSelect = (value, type) => {
    if (type === 'sort') {
      setSortId(value);
    } else if (type === 'show') {
      setShowId(value);
    }
  };

  const handleShowGrid = (type) => {
    setIsShowGrid(type === 'grid');
  };

  return (
    <div className={containerFilter}>
      <div className={boxLeft}>
        <SelectBox
          options={sortOptions}
          getValue={getValueSelect}
          type='sort'
          defaultValue={sortOptions[0]}
        />
        <div className={boxIcon}>
          <TfiLayoutGrid4
            style={{ fontSize: '25px', color: '#222', cursor: 'pointer' }}
            onClick={() => handleShowGrid('grid')}
          />
          <div
            style={{ height: '20px', width: '1px', backgroundColor: '#e1e1e1' }}
          />
          <CiCircleList
            style={{ fontSize: '25px', color: '#222', cursor: 'pointer' }}
            onClick={() => handleShowGrid('list')}
          />
        </div>
      </div>
      <div className={boxRight}>
        <div style={{ fontSize: '14px', color: '#555' }}>Show</div>
        <SelectBox
          options={showOptions}
          getValue={getValueSelect}
          type='show'
          defaultValue={showOptions[0]}
        />
      </div>
    </div>
  );
}

export default Filter;
