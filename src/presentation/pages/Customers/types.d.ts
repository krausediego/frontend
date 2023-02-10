import { ICustomers, IEditCustomer } from '@/domain/useCases';

export type CustomersProps = {
  getCustomersSerivce: ICustomers;
  editCustomerSerivce: IEditCustomer;
};
