import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function Login() {
  const { container, title, boxRemember, lostPassword } = styles;
  return (
    <div className={container}>
      <div className={title}>Sign In</div>
      <InputCommon label={'Username or Email'} type={'text'} isRequired />
      <InputCommon label={'Password'} type={'password'} isRequired />
      <div className={boxRemember}>
        <input type='checkbox' />
        <span>Remember me</span>
      </div>
      <Button content={'Login'} />
      <div className={lostPassword}>Lost your password?</div>
    </div>
  );
}

export default Login;
