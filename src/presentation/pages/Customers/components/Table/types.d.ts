import { ICustomers } from '@/domain/useCases';

export type TableCustomersProps = {
  service: ICustomers;
};

export type BodyTableProps = {
  customer: ICustomers.Data;
};
