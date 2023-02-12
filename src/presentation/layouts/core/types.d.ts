import { ReactNode } from 'react';
import { StackProps } from '@chakra-ui/react';

export type CoreLayoutProps = StackProps & {
  children: ReactNode;
  title: string;
  backRoute?: boolean;
};
