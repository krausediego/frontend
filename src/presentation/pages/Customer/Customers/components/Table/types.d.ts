import { ICustomers, IEditCustomer, IDeleteCustomer } from '@/domain/useCases';

export type TableCustomersProps = {
  customerServices: ICustomers & IEditCustomer & IDeleteCustomer;
};

export type BodyTableProps = {
  customer: ICustomers.Data;
  customerServices: ICustomers & IEditCustomer & IDeleteCustomer;
};
