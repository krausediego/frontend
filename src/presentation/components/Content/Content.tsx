import { Flex } from '@chakra-ui/react';
import { ContentProps } from './types';

export const Content = ({ children }: ContentProps) => {
  return (
    <Flex
      w="full"
      p={8}
      bg="gray.50"
      borderRadius="md"
      flexDir="column"
      gap={4}
    >
      {children}
    </Flex>
  );
};
