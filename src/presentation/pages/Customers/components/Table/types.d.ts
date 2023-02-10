import { ICustomers, IEditCustomer } from '@/domain/useCases';

export type TableCustomersProps = {
  getCustomersSerivce: ICustomers;
  editCustomerSerivce: IEditCustomer;
};

export type BodyTableProps = {
  customer: ICustomers.Data;
  editCustomerSerivce: IEditCustomer;
  handleEditStatus: (customer: ICustomers.Data, status: boolean) => void;
};
