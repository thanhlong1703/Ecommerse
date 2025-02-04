import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Logo from '@icons/img/Logo-retina.png';
import useScrollHandling from '@/hooks/useScrollHanding';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { TfiReload } from 'react-icons/tfi';
import { TfiHeart } from 'react-icons/tfi';
import { TfiShoppingCart } from 'react-icons/tfi';
function Header() {
  const {
    container,
    containerHeader,
    boxContainer,
    boxIconSNS,
    boxIcon,
    boxIconItem,
    boxMenu,
    topHeader,
    fixedHeader,
    boxCart,
    quantity
  } = styles;
  const { scrollPosition } = useScrollHandling();
  const [fixed, setfixed] = useState(false);
  const { isOpen, setIsOpen, type, setType, listCart } =
    useContext(SideBarContext);

  const handleOpenSideBar = (typeSideBar) => {
    setIsOpen(true);
    setType(typeSideBar);
  };

  useEffect(() => {
    setfixed(scrollPosition > 80);
  }, [scrollPosition]);

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixed
      })}
    >
      <div className={containerHeader}>
        <div className={boxContainer}>
          <div className={boxIconSNS}>
            {dataBoxIcon.slice(0, 3).map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={boxMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img src={Logo} alt='Logo' width={153} height={53} />
        </div>
        <div className={boxContainer}>
          <div className={boxMenu}>
            {dataMenu.slice(3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
          <div className={boxIcon}>
            <TfiReload
              style={{ fontSize: 20 }}
              className={boxIconItem}
              onClick={() => handleOpenSideBar('compare')}
            />
            <TfiHeart
              style={{ fontSize: 20 }}
              className={boxIconItem}
              onClick={() => handleOpenSideBar('wishlist')}
            />
            <div className={boxCart}>
              <TfiShoppingCart
                style={{ fontSize: 20 }}
                className={boxIconItem}
                onClick={() => handleOpenSideBar('cart')}
              />
              <div className={quantity}>{listCart.length}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
