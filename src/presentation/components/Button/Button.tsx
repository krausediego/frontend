import { ButtonProps } from './types';
import { Button as ButtonComponent } from '@chakra-ui/react';

export const Button = ({
  children,
  colorScheme,
  fullWidth,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonComponent
      w={fullWidth ? 'full' : ''}
      px={6}
      colorScheme={colorScheme || 'teal'}
      {...rest}
      data-testid="button-component"
    >
      {children}
    </ButtonComponent>
  );
};
