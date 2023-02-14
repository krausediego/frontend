import { ReactNode } from 'react';

export type SelectProps = SelectProps & {
  children: ReactNode;
  errorMessage?: string;
  label: string;
};
