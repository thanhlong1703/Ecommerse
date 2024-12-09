import styles from './styles.module.scss';
import { dataMenuFooter } from './constant';
function Footer() {
  const { container, menu, payment, menuItem } = styles;
  return (
    <div className={container}>
      <img
        src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png'
        width={160}
      />
      <div className={menu}>
        {dataMenuFooter.map((item) => {
          return (
            <div src={item.href} className={menuItem}>
              {item.content}
            </div>
          );
        })}
      </div>
      <div className={payment}>
        <div>Guaranteed safe ckeckout</div>
        <img
          src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
          width={270}
        />
      </div>
      <div>Copyright © 2024 XStore theme. Cloned by Pham Thanh Long</div>
    </div>
  );
}

export default Footer;
