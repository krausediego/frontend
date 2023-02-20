import { IEditAddress, IEditCustomer, IGetCustomer } from '@/domain/useCases';

export type EditCustomerPageProps = {
  customerService: IGetCustomer & IEditCustomer & IEditAddress;
  id: string;
};
