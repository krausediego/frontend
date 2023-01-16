import { InputProps as IInputProps } from '@chakra-ui/react';
import { HTMLInputTypeAttribute } from 'react';

export type InputProps = IInputProps & {
  label: string;
  errorMessage?: string;
  type?: HTMLInputTypeAttribute;
};
