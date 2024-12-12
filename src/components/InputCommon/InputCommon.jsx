import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

function InputCommon({ label, type, isRequired = false, ...props }) {
  const { container, labelInput, boxInput, boxIcon, errMessage } = styles;
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPasswords = type === 'password';
  const { formik, id } = props;

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const isShowTextPassword =
    type === 'password' && isShowPassword === true ? 'text' : type;

  const isError = formik.errors[id] && formik.touched[id];
  return (
    <div className={container}>
      <div className={labelInput}>
        {label}
        {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          type={isShowTextPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
          {...props}
        />
        {isPasswords && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {isShowPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
        {isError && <div className={errMessage}>{formik.errors[id]}</div>}
      </div>
    </div>
  );
}

export default InputCommon;
