import { Divider, Flex, Heading, VStack } from '@chakra-ui/react';
import { SideMenu } from './components';
import { CoreLayoutProps } from './types';
import { MdOutlineWest } from 'react-icons/md';
import { useRouter } from 'next/router';

export const CoreLayout = ({
  children,
  title,
  backRoute,
  ...rest
}: CoreLayoutProps) => {
  const router = useRouter();

  return (
    <Flex
      w="full"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      data-testid="auth-layout"
    >
      <SideMenu />
      <Flex
        w="85%"
        h="full"
        py={8}
        px={8}
        flexDir="column"
        gap={10}
        overflowY="auto"
      >
        <Flex alignItems="center" gap={4}>
          {backRoute && (
            <MdOutlineWest
              onClick={() => {
                return router.back();
              }}
              size={30}
            />
          )}
          <Heading fontSize="1.6rem">{title}</Heading>
        </Flex>
        <Divider borderBottomWidth={1} borderColor="gray.600" />
        <VStack {...rest} alignItems="start" w="full" h="full" px={28} mb={20}>
          {children}
        </VStack>
      </Flex>
    </Flex>
  );
};
