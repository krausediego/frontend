import { Td, Tr } from '@chakra-ui/table';
import { BodyTableProps } from './types';
import { MdMoreHoriz } from 'react-icons/md';
import { StatusBadge } from '../StatusBadge';

export const BodyTable = ({ customer }: BodyTableProps) => {
  return (
    <Tr>
      <Td>{customer.name}</Td>
      <Td>{customer.email}</Td>
      <Td>{customer.phone}</Td>
      <Td>
        <StatusBadge status={customer.status} />
      </Td>
      <Td>
        <MdMoreHoriz />
      </Td>
    </Tr>
  );
};
