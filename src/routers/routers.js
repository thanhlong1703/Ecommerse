import { lazy } from 'react';
const routers = [
  {
    path: '/',
    component: lazy(() => import('@components/HomePage/HomePage'))
  },
  {
    path: '/shop',
    component: lazy(() => import('@pages/OurShop/OurShop'))
  },
  {
    path: '/cart',
    component: lazy(() => import('@pages/Cart/index'))
  },
  {
    path: '/product/:id',
    component: lazy(() => import('@pages/DetailProduct/index'))
  }
];

export default routers;
