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
  },
  {
    name: 'Duyuru',
    path: '/duyuru',
    component: Duyuru,
    sidebar: () => <span>Duyuru</span>,
  },
  {
    name: 'Test',
    path: '/test',
    component: Test,
    sidebar: () => <span>Test</span>,
  },
];
