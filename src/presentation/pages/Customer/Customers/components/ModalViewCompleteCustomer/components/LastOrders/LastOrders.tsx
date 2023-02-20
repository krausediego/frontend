import { Table } from '@/presentation/components';
import { Heading, Th, Thead, Tr, VStack, Text } from '@chakra-ui/react';

export const LastOrders = () => {
  return (
    <VStack mt="2rem" alignItems="start">
      <Heading fontSize="1.25rem">Últimos pedidos</Heading>
      <Table>
        <Thead>
          <Tr bg="teal">
            <Th color="gray.50">Pedido</Th>
            <Th color="gray.50">Emissão</Th>
            <Th color="gray.50">Entrega</Th>
            <Th color="gray.50">Valor</Th>
          </Tr>
        </Thead>
      </Table>
      <Text w="full" textAlign="center">
        Nenhum pedido até o momento
      </Text>
    </VStack>
  );
};
