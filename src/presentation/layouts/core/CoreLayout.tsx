import { Divider, Flex, Heading } from '@chakra-ui/react';
import { SideMenu } from './components';
import { CoreLayoutProps } from './types';

export const CoreLayout = ({ children, title }: CoreLayoutProps) => {
  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      data-testid="auth-layout"
    >
      <SideMenu />
      <Flex w="85%" h="full" py={8} px={8} flexDir="column" gap={10}>
        <Heading fontSize="1.6rem">{title}</Heading>
        <Divider borderBottomWidth={1} borderColor="gray.600" />
        <Flex flexDir="column" w="full" h="full" overflowY="auto">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};
