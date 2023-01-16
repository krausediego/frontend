import { Flex } from '@chakra-ui/react';
import { menuItems } from '../../utils';
import { ItemMenu } from '../ItemMenu';

export const SideMenu = () => {
  return (
    <Flex
      w="15%"
      h="full"
      bg="gray.50"
      flexDir="column"
      alignItems="center"
      gap={3}
    >
      {menuItems.map(({ id, label, route, icon }) => {
        return <ItemMenu key={id} label={label} route={route} icon={icon} />;
      })}
    </Flex>
  );
};
