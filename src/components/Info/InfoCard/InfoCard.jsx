import styles from './styles.module.scss';

function InfoCard({ title, description, src }) {
  const { containerCard, content } = styles;
  return (
    <div className={containerCard}>
      <img src={src} width={40} height={40} />
      <div className={content}>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default InfoCard;
