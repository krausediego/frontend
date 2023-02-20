import { IconButtonProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type CustomerActionsProps = IconButtonProps & {
  icon: ReactNode;
  tooltipLabel: string;
};
