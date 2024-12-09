import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';

function InputCommon({ label, type, isRequired = false }) {
  const { container, labelInput, boxInput, boxIcon } = styles;
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPasswords = type === 'password';

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const isShowTextPassword =
    type === 'password' && isShowPassword === true ? 'text' : type;
  return (
    <div className={container}>
      <div className={labelInput}>
        {label}
        {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowTextPassword} />
        {isPasswords && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {isShowPassword ? <FiEyeOff /> : <FiEye />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
