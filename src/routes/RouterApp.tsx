import { Routes, Route, Navigate } from 'react-router';
import { Private, Public } from '@routes';

import Home from '../app/page';

import Category from '../app/shop/category/page';
import Difficulty from '../app/shop/difficulty/page';
import Search from '../app/shop/search/page';
import Product from '../app/shop/product/id';
import Cart from '../app/shop/cart/page';
import CartEmpty from '../app/shop/cart/empty';
import Checkout from '../app/shop/checkout/page';

import Dashboard from '../app/admin/page';
import Products from '../app/admin/products';
import NewProduct from '../app/admin/products/new';
import UpdateProduct from '../app/admin/products/update';
import Orders from '../app/admin/orders';
import Users from '../app/admin/users';

import { LayoutAdmin, LayoutApp, LayoutAuth } from '@components';

export const RouterApp = () => (
  <Routes>
    <Route path="/" element={<LayoutApp />}>
      <Route index element={<Home />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="difficulty/:difficulty" element={<Difficulty />} />
      <Route path="search/:query" element={<Search />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="cart/empty" element={<CartEmpty />} />
      <Route path="checkout/:id" element={<Checkout />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
    <Route path="/admin/*" element={
      <Private>
        <Routes>
          <Route path="/" element={<LayoutAdmin />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="products/new" element={<NewProduct />} />
            <Route path="products/:id" element={<UpdateProduct />} />
            <Route path="orders" element={<Orders />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </Private>
    } />
    <Route path="/auth/*" element={
      <Public>
        <Routes>
          <Route index element={<LayoutAuth />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </Public>
    } />
  </Routes>
)