import styles from './styles.module.scss';
function HeaderSideBar({ icon, title }) {
  const { container, titleHeader } = styles;
  return (
    <div className={container}>
      {icon}
      <div className={titleHeader}>{title}</div>
    </div>
  );
}

export default HeaderSideBar;
