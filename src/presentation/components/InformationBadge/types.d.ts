import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type InformationBadgeProps = {
  icon: IconType;
  title: string;
  info: string | ReactNode;
};
