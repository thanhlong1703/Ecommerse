import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/StoreProvider';
import Button from '@components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Menu({ content, href }) {
  const { menu, subMenu } = styles;
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { userInfo, handleLogout } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const navigate = useNavigate();
  const handleClickShowLogin = () => {
    if (content === 'Sign In' && !userInfo) {
      setIsOpen(true);
      setType('login');
    }
    if (content === 'Our Shop') {
      navigate('/shop');
    }
  };

  const handleRenderText = (content) => {
    if (content === 'Sign In' && userInfo) {
      return `Hello ${userInfo.username}`;
    } else {
      return content;
    }
  };

  const handleHover = () => {
    if (content === 'Sign In' && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  return (
    <div
      className={menu}
      onClick={handleClickShowLogin}
      onMouseEnter={handleHover}
    >
      {handleRenderText(content)}

      {isShowSubMenu && (
        <div onMouseLeave={() => setIsShowSubMenu(false)} className={subMenu}>
          <Button content={'Log out'} onClick={handleLogout} />
        </div>
      )}
    </div>
  );
}

export default Menu;
