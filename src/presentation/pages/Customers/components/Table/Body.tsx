import { BodyTableProps } from './types';
import { StatusBadge } from '../StatusBadge';
import { MdModeEdit, MdDelete, MdClose, MdCheck } from 'react-icons/md';
import { Flex, Td, Tr, useDisclosure } from '@chakra-ui/react';
import { CustomerActions } from '../Actions';
import { ModalViewCompleteCustomer } from '../ModalViewCompleteCustomer';
import { useAuth } from '@/presentation/contexts';
import { useEditCustomerMutation } from '@/presentation/hooks/customers/useEditCustomerMutation';

export const BodyTable = ({
  customer,
  editCustomerSerivce,
}: BodyTableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { token } = useAuth();

  const { mutateAsync, isLoading } = useEditCustomerMutation({
    editCustomerSerivce,
    token,
  });

  const handleEditStatus = async (status: boolean) => {
    try {
      const test = { ...customer, status: !status };
      delete test.address;
      await mutateAsync(test);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Tr _hover={{ cursor: 'pointer' }}>
      <Td onClick={onOpen}>{customer.name}</Td>
      <Td onClick={onOpen}>{customer.email}</Td>
      <Td onClick={onOpen}>{customer.phone}</Td>
      <Td onClick={onOpen}>
        <StatusBadge status={customer.status} />
      </Td>
      <Td maxW="120px">
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
            isLoading={isLoading}
            onClick={() => {
              return handleEditStatus(customer.status);
            }}
            tooltipLabel={
              customer.status ? 'Inativar cliente' : 'Ativar cliente'
            }
            icon={customer.status ? <MdClose /> : <MdCheck />}
            aria-label="change status customer"
          />
          {isOpen && (
            <ModalViewCompleteCustomer
              customer={customer}
              isOpen={isOpen}
              onClose={onClose}
            />
          )}
        </Flex>
      </Td>
    </Tr>
  );
};
