import {
  Input as InputComponent,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormErrorIcon,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { InputProps } from './types';

const InputRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, errorMessage, ...rest },
  ref,
) => {
  return (
    <FormControl isInvalid={!!errorMessage} data-testid="form-control">
      <FormLabel data-testid="input-label">{label}</FormLabel>
      <InputComponent ref={ref} {...rest} data-testid="input-component" />
      {!!errorMessage && (
        <FormErrorMessage data-testid="input-error-message">
          <FormErrorIcon data-testid="input-error-icon" />
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputRef);
