import { BodyTableProps } from './types';
import { StatusBadge } from '../StatusBadge';
import { MdModeEdit, MdDelete, MdClose, MdCheck } from 'react-icons/md';
import { Flex, Td, Tr, useDisclosure } from '@chakra-ui/react';
import { CustomerActions } from '../Actions';
import { ModalViewCompleteCustomer } from '../ModalViewCompleteCustomer';

export const BodyTable = ({ customer }: BodyTableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {} = customer.address;

  return (
    <Tr onClick={onOpen} _hover={{ cursor: 'pointer' }}>
      <Td>{customer.name}</Td>
      <Td>{customer.email}</Td>
      <Td>{customer.phone}</Td>
      <Td>
        <StatusBadge status={customer.status} />
      </Td>
      <Td>
        <Flex gap={2} w="full" justifyContent="end">
          <CustomerActions
            tooltipLabel="Editar cliente"
            icon={<MdModeEdit />}
            aria-label="edit customer"
          />
          <CustomerActions
            tooltipLabel="Excluir cliente"
            icon={<MdDelete />}
            aria-label="delete customer"
          />
          <CustomerActions
            tooltipLabel={
              customer.status ? 'Inativar cliente' : 'Ativar cliente'
            }
            icon={customer.status ? <MdClose /> : <MdCheck />}
            aria-label="change status customer"
          />
          {isOpen && (
            <ModalViewCompleteCustomer isOpen={isOpen} onClose={onClose} />
          )}
        </Flex>
      </Td>
    </Tr>
  );
};
