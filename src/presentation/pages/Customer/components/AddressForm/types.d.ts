import { FormState, UseFormRegister, UseFormReset } from 'react-hook-form';
import { ICustomers, IGetCEP } from '@/domain/useCases';
import { Dispatch, SetStateAction } from 'react';

export interface AddressFormProps {
  register: UseFormRegister<ICustomers.Data>;
  formState: FormState<ICustomers.Data>;
  reset: UseFormReset<ICustomers.Data>;
  getCEPService: IGetCEP;
}
