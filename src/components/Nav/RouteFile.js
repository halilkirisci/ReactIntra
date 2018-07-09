import React from 'react';
import Rehber from '../Pages/Rehber';
import Anasayfa from '../Pages/Anasayfa';
import Test from '../Pages/Test';

export const routes = [
  {
    name: 'Rehber',
    path: '/Rehber',
    exact: true,
    component: Rehber,
    sidebar: () => <span>Rehber</span>,
    icon: 'flaticon-network',
  },
  {
    name: 'Anasayfa',
    path: '/',
    component: Anasayfa,
    sidebar: () => <span>Anasayfa</span>,
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
