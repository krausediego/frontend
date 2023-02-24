import { Td, Tr } from '@chakra-ui/react';
import { BodyTableMateriasPrimasProps } from './types';

export const BodyTableMateriasPrimas = ({
  materiaPrima,
}: BodyTableMateriasPrimasProps) => {
  return (
    <Tr>
      <Td>{materiaPrima.id}</Td>
      <Td>{materiaPrima.name}</Td>
      <Td>{materiaPrima.amount}</Td>
    </Tr>
  );
};
