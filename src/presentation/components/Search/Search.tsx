import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { MdClose, MdSearch } from 'react-icons/md';
import { SearchProps } from './types';

const SearchRef: ForwardRefRenderFunction<HTMLInputElement, SearchProps> = (
  { isClear, clearSearch, isLoading, ...rest },
  ref,
) => {
  return (
    <InputGroup>
      <InputLeftElement>
        <Icon as={MdSearch} fontSize={20} color="gray.500" />
      </InputLeftElement>
      <Input ref={ref} {...rest} />
      {isClear && !isLoading && (
        <InputRightElement cursor="pointer" onClick={clearSearch}>
          <Icon as={MdClose} fontSize={20} color="gray.500" />
        </InputRightElement>
      )}
      {isLoading && (
        <InputRightElement>
          <Spinner />
        </InputRightElement>
      )}
    </InputGroup>
  );
};

export const Search = forwardRef(SearchRef);
