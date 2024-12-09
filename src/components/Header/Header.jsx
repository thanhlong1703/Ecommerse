import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Logo from '@icons/img/Logo-retina.png';
import useScrollHandling from '@/hooks/useScrollHanding';
import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SideBarContext } from '@/contexts/SideBarProvider';
function Header() {
  const {
    container,
    containerHeader,
    boxContainer,
    boxIcon,
    boxMenu,
    topHeader,
    fixedHeader
  } = styles;
  const { scrollPosition } = useScrollHandling();
  const [fixed, setfixed] = useState(false);
  const { isOpen, setIsOpen } = useContext(SideBarContext);

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
          <div className={boxIcon}>
            {dataBoxIcon.slice(0, 3).map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={boxMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return (
                <Menu
                  content={item.content}
                  href={item.href}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
        </div>
        <div>
          <img src={Logo} alt='Logo' width={153} height={53} />
        </div>
        <div className={boxContainer}>
          <div className={boxMenu}>
            {dataMenu.slice(3).map((item) => {
              return (
                <Menu
                  content={item.content}
                  href={item.href}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          <div className={boxIcon}>
            {dataBoxIcon.slice(3).map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
