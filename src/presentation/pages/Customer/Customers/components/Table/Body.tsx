import { BodyTableProps } from './types';
import { StatusBadge } from '../StatusBadge';
import { MdModeEdit, MdDelete, MdClose, MdCheck } from 'react-icons/md';
import { Flex, Td, Tr, useDisclosure, useToast } from '@chakra-ui/react';
import { CustomerActions } from '../Actions';
import { ModalViewCompleteCustomer } from '../ModalViewCompleteCustomer';
import { useAuth } from '@/presentation/contexts';
import { useEditCustomerMutation } from '@/presentation/hooks/customers/useEditCustomerMutation';
import { useRouter } from 'next/router';
import { useDeleteCustomerMutation } from '@/presentation/hooks';

export const BodyTable = ({ customer, customerServices }: BodyTableProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();
  const { token } = useAuth();
  const toast = useToast();

  const { mutateAsync, isLoading } = useEditCustomerMutation({
    editCustomerService: customerServices,
    token,
  });

  const { mutateAsync: deleteCustomerMutateAsync } = useDeleteCustomerMutation({
    deleteCustomerService: customerServices,
    token,
    user_id: customer.user_id,
  });

  const handleEditStatus = async () => {
    try {
      const status = { ...customer, status: !customer.status };
      await mutateAsync(status);
      toast({
        title: `Cliente ${
          !customer.status ? 'ativado' : 'inativado'
        } com sucesso`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `Erro ao ${!customer.status ? 'ativar' : 'inativar'} o cliente`,
        description: 'Tente novamente em alguns instantes',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDeleteCustomer = async () => {
    try {
      await deleteCustomerMutateAsync({
        customer_id: customer.id,
        address_id: customer.address_id,
      });
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
            onClick={() => {
              return router.push(`/customers/${customer.id}`);
            }}
            aria-label="edit customer"
          />
          <CustomerActions
            tooltipLabel="Excluir cliente"
            onClick={handleDeleteCustomer}
            icon={<MdDelete />}
            aria-label="delete customer"
          />
          <CustomerActions
            isLoading={isLoading}
            onClick={handleEditStatus}
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
