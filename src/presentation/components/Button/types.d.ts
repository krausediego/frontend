import { ButtonProps as IButtonProps, ThemeTypings } from '@chakra-ui/react';

export type ButtonProps = IButtonProps & {
  children: ReactNode;
  colorScheme?: ThemeTypings['colorSchemes'];
  fullWidth?: boolean;
};
