import { MenuItemsProps } from './types';
import {
  MdDashboard,
  MdPeopleAlt,
  MdOutlineConstruction,
} from 'react-icons/md';

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
  {
    id: 3,
    label: 'Matéria prima',
    route: '/materia-prima',
    icon: MdOutlineConstruction,
  },
];
