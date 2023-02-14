import {
  Select as SelectComponent,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormErrorIcon,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { SelectProps } from './types';

const SelectRef: ForwardRefRenderFunction<HTMLSelectElement, SelectProps> = (
  { children, errorMessage, label, ...rest },
  ref,
) => {
  return (
    <FormControl isInvalid={!!errorMessage} data-testid="form-control">
      <FormLabel data-testid="input-label">{label}</FormLabel>
      <SelectComponent ref={ref} {...rest} data-testid="input-component">
        {children}
      </SelectComponent>
      {!!errorMessage && (
        <FormErrorMessage data-testid="input-error-message">
          <FormErrorIcon data-testid="input-error-icon" />
          {errorMessage}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Select = forwardRef(SelectRef);
