import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import {
  AddressInformations,
  LastOrders,
  PessoalInformations,
} from './components';
import { ModalViewCompleteCustomerProps } from './types';

export const ModalViewCompleteCustomer = ({
  isOpen,
  onClose,
  customer,
}: ModalViewCompleteCustomerProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Dados do cliente</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <PessoalInformations customer={customer} />
          <AddressInformations address={customer.address} />
          <LastOrders />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
