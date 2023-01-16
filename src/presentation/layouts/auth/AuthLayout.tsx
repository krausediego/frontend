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
      <Box bg="gray.50" py={6} px={8} borderRadius={8} boxShadow="md">
        {children}
      </Box>
    </Flex>
  );
};
