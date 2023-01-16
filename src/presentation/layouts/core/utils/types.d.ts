import { IconType } from 'react-icons';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type MenuItemsProps = {
  id: number;
  label: string;
  route: string;
  icon: IconType;
};
