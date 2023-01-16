import {
  Input as InputComponent,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormErrorIcon,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { Eye, EyeSlash } from 'phosphor-react';
import { forwardRef, ForwardRefRenderFunction, useState } from 'react';
import { InputProps } from './types';

const InputRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { label, errorMessage, type, ...rest },
  ref,
) => {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordIcon = type === 'password';

  const handleShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  const handleInputPasswordType = (type?: string) => {
    if (!type || type !== 'password') {
      return type || 'text';
    }
    return showPassword ? 'text' : 'password';
  };

  return (
    <FormControl isInvalid={!!errorMessage} data-testid="form-control">
      <FormLabel data-testid="input-label">{label}</FormLabel>
      <InputGroup>
        <InputComponent
          ref={ref}
          type={handleInputPasswordType(type)}
          {...rest}
          data-testid="input-component"
        />
        {showPasswordIcon && (
          <InputRightElement>
            {!showPassword ? (
              <Eye onClick={handleShowPassword} />
            ) : (
              <EyeSlash onClick={handleShowPassword} />
            )}
          </InputRightElement>
        )}
      </InputGroup>
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
