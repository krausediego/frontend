import { ICustomers, IEditCustomer, IDeleteCustomer } from '@/domain/useCases';

export type CustomersProps = {
  customerServices: ICustomers & IEditCustomer & IDeleteCustomer;
};
