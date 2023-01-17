import { Content, Search, Table } from '@/presentation/components';
import { useAuth } from '@/presentation/contexts';
import { useCustomersQuery } from '@/presentation/hooks';
import { Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { BodyTable } from './Body';
import { TableCustomersProps } from './types';

export const TableCustomers = ({ service }: TableCustomersProps) => {
  const { decoded, token } = useAuth();
  const { data } = useCustomersQuery(service, decoded?.id, token);

  return (
    <Content>
      <Search />
      <Table>
        <Thead>
          <Tr bg="teal">
            <Th color="gray.50" minW="225px">
              Nome
            </Th>
            <Th color="gray.50" minW="100px">
              Email
            </Th>
            <Th color="gray.50" minW="140px">
              Celular
            </Th>
            <Th color="gray.50">Status</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.map(customer => {
            return <BodyTable key={customer.id} customer={customer} />;
          })}
        </Tbody>
      </Table>
    </Content>
  );
};
