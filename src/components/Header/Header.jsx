import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Logo from '@icons/img/Logo-retina.png';

function Header() {
  const { container, containerHeader, boxContainer, boxIcon, boxMenu } = styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={boxContainer}>
          <div className={boxIcon}>
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
