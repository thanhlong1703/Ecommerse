import styles from './styles.module.scss';

function Button({ content }) {
  const { button } = styles;
  return (
    <div
      className={button}
    >
      {content}
    </div>
  );
}

export default Button;
