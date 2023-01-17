import { TableProps as TableComponentProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export type TableProps = TableComponentProps & {
  children: ReactNode;
};
