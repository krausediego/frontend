import { InputProps as IInputProps } from '@chakra-ui/react';

export type InputProps = IInputProps & {
  label: string;
  errorMessage?: string;
};
