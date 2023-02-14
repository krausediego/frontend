import { ReactNode } from 'react';
import { SelectProps as ISelectProps } from '@chakra-ui/react';

export type SelectProps = ISelectProps & {
  children: ReactNode;
  errorMessage?: string;
  label: string;
};
