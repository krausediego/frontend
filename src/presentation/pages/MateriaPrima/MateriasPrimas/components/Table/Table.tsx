import { Button, Search, Table } from '@/presentation/components';
import { useAuth } from '@/presentation/contexts';
import { useDebounce, useMateriasPrimasQuery } from '@/presentation/hooks';
import { Flex, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { BodyTableMateriasPrimas } from './Body';
import { TableMateriasPrimasProps } from './types';

export const TableMateriasPrimas = ({
  materiasPrimasService,
}: TableMateriasPrimasProps) => {
  const [search, setSearch] = useState('');

  const { debouncedValue, loading } = useDebounce(search, 5000);
  const { decoded, token } = useAuth();

  const { data } = useMateriasPrimasQuery(
    materiasPrimasService,
    decoded?.id,
    token,
    debouncedValue,
  );

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <>
      <Flex gap={4}>
        <Search
          placeholder="Buscar materia prima pelo nome"
          value={search}
          onChange={e => {
            return setSearch(e.target.value);
          }}
          isClear={!!search}
          clearSearch={clearSearch}
          isLoading={loading}
        />
        <Button
          // onClick={() => {
          //   return router.push('/customers/new-customer');
          // }}
          leftIcon={<MdAdd size={20} />}
        >
          Adicionar Matéria prima
        </Button>
      </Flex>
      <Table>
        <Thead>
          <Tr bg="teal">
            <Th color="gray.50" minW="225px">
              Nome
            </Th>
            <Th color="gray.50" minW="225px">
              Quantidade
            </Th>
            <Th color="gray.50" minW="225px">
              Valor
            </Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {data?.data?.data?.map(materiaPrima => {
            return (
              <BodyTableMateriasPrimas
                key={materiaPrima.id}
                materiaPrima={materiaPrima}
              />
            );
          })}
        </Tbody>
      </Table>
    </>
  );
};
