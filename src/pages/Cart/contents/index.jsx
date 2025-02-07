import styles from '../styles.module.scss';
function Contents() {
  const { containerContents } = styles;
  return (
    <div className={containerContents}>
      <div>danh sach san pham</div>
      <div>payment</div>
    </div>
  );
}

export default Contents;
