import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { ModalViewCompleteCustomerProps } from './types';

export const ModalViewCompleteCustomer = ({
  isOpen,
  onClose,
}: ModalViewCompleteCustomerProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Dados do cliente</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <span>Teste modal</span>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
