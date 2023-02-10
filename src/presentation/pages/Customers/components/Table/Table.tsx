import { Button, Content, Search, Table } from '@/presentation/components';
import { useAuth } from '@/presentation/contexts';
import { useCustomersQuery, useDebounce } from '@/presentation/hooks';
import { Flex, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { BodyTable } from './Body';
import { TableCustomersProps } from './types';

export const TableCustomers = ({
  getCustomersSerivce,
  editCustomerSerivce,
}: TableCustomersProps) => {
  const [search, setSearch] = useState('');

  const { decoded, token } = useAuth();
  const { debouncedValue, loading } = useDebounce(search, 5000);
  const router = useRouter();

  const { data } = useCustomersQuery(
    getCustomersSerivce,
    decoded?.id,
    token,
    debouncedValue,
  );

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <Content>
      <Flex gap={4}>
        <Search
          placeholder="Buscar cliente pelo nome ou email..."
          value={search}
          onChange={e => {
            return setSearch(e.target.value);
          }}
          isClear={!!search}
          clearSearch={clearSearch}
          isLoading={loading}
        />
        <Button
          onClick={() => {
            return router.push('/createCustomer');
          }}
          leftIcon={<MdAdd size={20} />}
        >
          Adicionar cliente
        </Button>
      </Flex>
      <Table>
        <Thead>
          <Tr bg="teal">
            <Th color="gray.50" minW="225px">
              Nome
            </Th>
            <Th color="gray.50" minW="100px">
              Email
            </Th>
            <Th color="gray.50" minW="80px">
              Celular
            </Th>
            <Th color="gray.50" minW="80px">
              Status
            </Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.map(customer => {
            return (
              <BodyTable
                key={customer.id}
                customer={customer}
                editCustomerSerivce={editCustomerSerivce}
              />
            );
          })}
        </Tbody>
      </Table>
    </Content>
  );
};
