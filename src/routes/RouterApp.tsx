import { Routes, Route } from 'react-router-dom';
import { Private, Public } from '@routes';

import Home from '../app/page';

import Category from '../app/shop/category/page';
import Search from '../app/shop/search/query';
import Product from '../app/shop/product/id';
import Cart from '../app/shop/cart/page';
import Empty from '../app/shop/cart/empty';
import Checkout from '../app/shop/checkout/page';

import Dashboard from '../app/admin/page';
import Products from '../app/admin/products';
import NewProduct from '../app/admin/products/new';
import UpdateProduct from '../app/admin/products/update';
import Orders from '../app/admin/orders';
import Users from '../app/admin/users';

import Login from '../app/auth/login';
import Register from '../app/auth/register';
import { LayoutAdmin, LayoutApp } from '@components';

export const RouterApp = () => (
  <Routes>
    <Route path="/" element={<LayoutApp />}>
      <Route index element={<Home />} />
      <Route path="category/:category" element={<Category />} />
      <Route path="search/:query" element={<Search />} />
      <Route path="product/:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="cart/empty" element={<Empty />} />
      <Route path="checkout/:id" element={<Checkout />} />
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
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Public>
    } />
  </Routes>
)