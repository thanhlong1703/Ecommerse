import { createContext, useEffect, useState } from 'react';
import { getCart } from '@/apis/cartService';
import Cookies from 'js-cookie';

export const SideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [listCart, setListCart] = useState([]);

  const userId = Cookies.get('userId');

  useEffect(() => {
    if (userId) {
      setIsLoading(true);
      getCart(userId)
        .then((res) => {
          setListCart(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setListCart([]);
          setIsLoading(false);
        });
    }
  }, []);
  const handleGetListCart = (userId, type) => {
    if (userId && type === 'cart') {
      setIsLoading(true);
      getCart(userId)
        .then((res) => {
          setListCart(res.data.data);
          setIsLoading(false);
        })
        .catch((err) => {
          setListCart([]);
          setIsLoading(false);
        });
    }
  };

  const value = {
    isOpen,
    type,
    listCart,
    isLoading,
    setIsOpen,
    setType,
    handleGetListCart
  };

  return (
    <SideBarContext.Provider value={value}>{children}</SideBarContext.Provider>
  );
};
