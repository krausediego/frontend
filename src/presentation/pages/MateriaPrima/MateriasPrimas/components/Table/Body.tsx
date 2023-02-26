import { Actions } from '@/presentation/components';
import { Flex, Td, Tr } from '@chakra-ui/react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { BodyTableMateriasPrimasProps } from './types';

export const BodyTableMateriasPrimas = ({
  materiaPrima,
}: BodyTableMateriasPrimasProps) => {
  return (
    <Tr>
      <Td>{materiaPrima.name}</Td>
      <Td>
        {materiaPrima.quantity}&nbsp;{materiaPrima.unit}
      </Td>
      <Td>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(materiaPrima.amount)}
      </Td>
      <Td maxW="120px">
        <Flex gap={2} w="full" justifyContent="end">
          <Actions
            tooltipLabel="Editar matéria prima"
            icon={<MdModeEdit />}
            // onClick={() => {
            //   return router.push(`/customers/${customer.id}`);
            // }}
            aria-label="edit materia prima"
          />
          <Actions
            tooltipLabel="Excluir matéria prima"
            // onClick={handleDeleteCustomer}
            icon={<MdDelete />}
            aria-label="delete materia prima"
          />
        </Flex>
      </Td>
    </Tr>
  );
};
