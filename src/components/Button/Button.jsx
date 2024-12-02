import styles from './styles.module.scss';
import classNames from 'classnames';
function Button({ content, isPrimary = true }) {
  const { button, primaryBtn, secondaryBtn } = styles;
  return (
    <div
      className={classNames(button, {
        [primaryBtn]: isPrimary,
        [secondaryBtn]: !isPrimary
      })}
    >
      {content}
    </div>
  );
}

export default Button;
