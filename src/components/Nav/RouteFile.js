import React from 'react';
import Rehber from '../Pages/Rehber';
import Duyuru from '../Pages/Duyuru';
import Test from '../Pages/Test';

export const routes = [
  {
    name: 'Rehber',
    path: '/',
    exact: true,
    component: Rehber,
    sidebar: () => <span>Rehber</span>,
    icon: 'flaticon-network',
  },
  {
    name: 'Duyuru',
    path: '/duyuru',
    component: Duyuru,
    sidebar: () => <span>Duyuru</span>,
    icon: 'flaticon-open-box',
  },
  {
    name: 'Test',
    path: '/test',
    component: Test,
    sidebar: () => <span>Test</span>,
    icon: 'flaticon-layers',
  },
];
