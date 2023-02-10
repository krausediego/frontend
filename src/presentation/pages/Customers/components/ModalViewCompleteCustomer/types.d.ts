import { ICustomers } from '@/domain/useCases';

export type ModalViewCompleteCustomerProps = {
  isOpen: boolean;
  onClose: () => void;
  customer: ICustomers.Data;
};
