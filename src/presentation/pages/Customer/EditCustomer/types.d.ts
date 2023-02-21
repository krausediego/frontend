import {
  IEditAddress,
  IEditCustomer,
  IGetCEP,
  IGetCustomer,
} from '@/domain/useCases';

export type EditCustomerPageProps = {
  customerService: IGetCustomer & IEditCustomer & IEditAddress & IGetCEP;
  id: string;
};
