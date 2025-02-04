import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/StoreProvider';

function Login() {
  const { container, title, boxRemember, lostPassword } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useContext(ToastContext);
  const { setIsOpen, handleGetListCart } = useContext(SideBarContext);
  const { setUserId } = useContext(StoreContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      cfmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      cfmPassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Passwords must match'
      )
    }),
    onSubmit: async (values) => {
      if (isLoading) return;
      const { email: username, password } = values;

      setIsLoading(true);
      if (isRegister) {
        await register({ username, password })
          .then((res) => {
            setIsLoading(false);
            toast.success(res.data.message);
          })
          .catch((err) => {
            setIsLoading(false);
            toast.error(err.response.data.message);
          });
      }

      if (!isRegister) {
        await signIn({ username, password })
          .then((res) => {
            setIsLoading(false);
            const { id, token, refreshToken } = res.data;
            setUserId(id);
            Cookies.set('token', token);
            Cookies.set('refreshToken', refreshToken);
            Cookies.set('userId', id);
            toast.success('Login successfuly!!');
            handleGetListCart(id, 'cart');
            setIsOpen(false);
          })
          .catch((err) => {
            setIsLoading(false);
            toast.error(err.response.data.message);
          });
      }
    }
  });

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  return (
    <div className={container}>
      <div className={title}>{isRegister ? 'Sign Up' : 'Sign In'}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id='email'
          label={'Username or Email'}
          type={'text'}
          formik={formik}
          isRequired
        />
        <InputCommon
          id='password'
          label={'Password'}
          type={'password'}
          formik={formik}
          isRequired
        />
        {isRegister && (
          <InputCommon
            id='cfmPassword'
            label={'Confirm Password'}
            type={'password'}
            formik={formik}
            isRequired
          />
        )}
        {!isRegister && (
          <div className={boxRemember}>
            <input type='checkbox' />
            <span>Remember me</span>
          </div>
        )}
        <Button
          content={isLoading ? 'Loading...' : isRegister ? 'Register' : 'Login'}
          type='submit'
        />
      </form>
      <Button
        content={isRegister ? 'Already have account' : "Don't have account"}
        type='submit'
        isPrimary={false}
        style={{ marginTop: 10 }}
        onClick={handleToggle}
      />
      {!isRegister && <div className={lostPassword}>Lost your password?</div>}
    </div>
  );
}

export default Login;
