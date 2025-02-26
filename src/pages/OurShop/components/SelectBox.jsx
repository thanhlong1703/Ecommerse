import styles from '../styles.module.scss';
import classNames from 'classnames';

function SelectBox({ options, getValue, type, defaultValue }) {
  const { selectbox, show, sort } = styles;

  return (
    <select
      onChange={(e) => getValue(e.target.value, type)}
      className={classNames(selectbox, {
        [show]: type === 'show',
        [sort]: type === 'sort'
      })}
      value={defaultValue}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
