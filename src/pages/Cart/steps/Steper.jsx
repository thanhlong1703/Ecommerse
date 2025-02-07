import styles from '../styles.module.scss';
import classNames from 'classnames';
function Steper({ number, content, isDisable }) {
  const { steper, numberStep, textStep, disableNumber, disableText } = styles;
  return (
    <div className={steper}>
      <div
        className={classNames(numberStep, {
          [disableNumber]: isDisable
        })}
      >
        {number}
      </div>
      <div
        className={classNames(textStep, {
          [disableText]: isDisable
        })}
      >
        {content}
      </div>
    </div>
  );
}

export default Steper;
