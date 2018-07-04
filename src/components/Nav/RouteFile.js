import React from 'react';
import Rehber from '../Pages/Rehber';
import Duyuru from '../Pages/Duyuru';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Rehber,
    sidebar: () => <h3>Rehber</h3>,
  },
  {
    path: '/duyuru',
    exact: true,
    component: Duyuru,
    sidebar: () => <h3>Duyuru</h3>,
  },
];
