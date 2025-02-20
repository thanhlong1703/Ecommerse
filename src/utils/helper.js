import { addProductToCart } from '@/apis/cartService';

export const handleAddProductToCart = (
  userId,
  setIsOpen,
  setType,
  toast,
  sizeChose,
  productId,
  quantity,
  setIsLoading,
  handleGetListCart
) => {
  if (!userId) {
    setIsOpen(true);
    setType('login');
    toast.warning('Please login to add product to cart');

    return;
  }
  if (!sizeChose) {
    toast.warning('Please chose size');

    return;
  }
  const data = {
    userId,
    productId: productId,
    quantity: +quantity,
    size: sizeChose
  };
  setIsLoading(true);
  setIsOpen(false);
  addProductToCart(data)
    .then((res) => {
      toast.success(res.data.msg);
      setIsOpen(true);
      setType('cart');
      setIsLoading(false);
      handleGetListCart(userId, 'cart');
    })
    .catch((err) => {
      setIsLoading(false);
      toast.error(res.data.msg);
    });
};
