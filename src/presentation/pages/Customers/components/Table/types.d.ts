import { ICustomers } from '@/domain/useCases';
import { IAddress } from '@/domain/useCases/address';

type address = IAddress.Data;

export type TableCustomersProps = {
  service: ICustomers;
};

export type BodyTableProps = {
  customer: ICustomers.Data & address;
};
