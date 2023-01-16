import { MenuItemsProps } from './types';
import { MdDashboard, MdPeopleAlt } from 'react-icons/md';

export const menuItems: MenuItemsProps[] = [
  {
    id: 1,
    label: 'Dashboard',
    route: '/dashboard',
    icon: MdDashboard,
  },
  {
    id: 2,
    label: 'Clientes',
    route: '/customers',
    icon: MdPeopleAlt,
  },
];
