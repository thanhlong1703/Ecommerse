import { axiosClient } from '@/apis/axiosClient';

const addProductToCart = async (data) => {
  return await axiosClient.post('/cart', data);
};

const getCart = async (userId) => {
  return await axiosClient.get(`/cart/${userId}`);
};

const deleteCartItem = async (body) => {
  return await axiosClient.delete('/cart/deleteItem', {
    data: body
  });
};

const deleteCart = async (body) => {
  return await axiosClient.delete('/cart/delete', {
    data: body
  });
};
export { addProductToCart, getCart, deleteCartItem, deleteCart };
