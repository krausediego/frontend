import { Box, Flex } from '@chakra-ui/react';
import { AuthLayoutProps } from './types';

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      data-testid="auth-layout"
    >
      <Box bg="gray.50" p={4} borderRadius={8} boxShadow="md">
        {children}
      </Box>
    </Flex>
  );
};
