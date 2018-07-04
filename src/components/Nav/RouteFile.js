import React from 'react';
import Rehber from '../Pages/Rehber';
import Duyuru from '../Pages/Duyuru';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Rehber,
    sidebar: () => <span>Rehber</span>,
  },
  {
    path: '/duyuru',
    exact: true,
    component: Duyuru,
    sidebar: () => <span>Duyuru</span>,
  },
];
