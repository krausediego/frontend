import { ICreateCustomer, ICreateAddress, IGetCEP } from '@/domain/useCases';

export type CreateCustomerProps = {
  customerService: ICreateCustomer & ICreateAddress & IGetCEP;
};
