import CartTable from '@/pages/Cart/contents/CartTable';
import styles from '../styles.module.scss';
function Contents() {
  const { containerContents } = styles;
  return (
    <div className={containerContents}>
      <div>
        <CartTable />
      </div>
      <div>payment</div>
    </div>
  );
}

export default Contents;
