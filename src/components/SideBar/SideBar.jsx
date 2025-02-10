import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from 'react-icons/tfi';
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import Wishlist from '@components/ContentSideBar/Wishlist/Wishlist';
import Cart from '@components/ContentSideBar/Cart/Cart';
import Detail from '@components/ContentSideBar/Detail';

function SideBar() {
  const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
  const { isOpen, setIsOpen, type, setType } = useContext(SideBarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setType('');
  };
  const handleRenderContent = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wishlist':
        return <Wishlist />;
      case 'cart':
        return <Cart />;
      case 'detail':
        return <Detail />;
      default:
        return <Login />;
    }
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen
        })}
        onClick={handleToggle}
      />
      <div
        className={classNames(sideBar, {
          [slideSideBar]: isOpen
        })}
      >
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <TfiClose />
          </div>
        )}
        {handleRenderContent(type)}
      </div>
    </div>
  );
}

export default SideBar;
