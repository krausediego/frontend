import { InputProps } from '@chakra-ui/react';

export type SearchProps = InputProps & {
  isClear?: boolean;
  clearSearch?: () => void;
};
