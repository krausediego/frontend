import { Flex, Heading, VStack } from '@chakra-ui/react';
import { ContentProps } from './types';

export const Content = ({ children, title }: ContentProps) => {
  return (
    <VStack spacing={3} w="full" alignItems="start">
      {!!title && <Heading fontSize="1.5rem">{title}</Heading>}
      <Flex
        w="full"
        p={8}
        bg="gray.50"
        borderRadius="md"
        boxShadow="lg"
        flexDir="column"
        gap={4}
      >
        {children}
      </Flex>
    </VStack>
  );
};
