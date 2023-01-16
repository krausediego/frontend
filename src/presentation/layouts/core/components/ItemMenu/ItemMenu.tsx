import { HStack, Text, Icon } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { ItemMenuProps } from './types';

export const ItemMenu = ({ label, route, icon }: ItemMenuProps) => {
  const router = useRouter();

  return (
    <HStack
      as="button"
      onClick={() => {
        return router.push(route);
      }}
      w="60%"
      alignItems="center"
      spacing={4}
    >
      <Icon
        as={icon}
        fontSize={30}
        color={router.pathname === route ? 'teal' : ''}
      />
      <Text
        fontSize="1.2rem"
        fontWeight="500"
        color={router.pathname === route ? 'teal' : ''}
      >
        {label}
      </Text>
    </HStack>
  );
};
