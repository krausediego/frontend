import { FormState, UseFormRegister, UseFormReset } from 'react-hook-form';
import { ICustomers, IGetCEP } from '@/domain/useCases';
import { Dispatch, SetStateAction } from 'react';
import { UseFormSetValue } from 'react-hook-form/dist/types';

export interface AddressFormProps {
  register: UseFormRegister<ICustomers.Data>;
  formState: FormState<ICustomers.Data>;
  setValue: UseFormSetValue<ICustomers.Data>;
  getCEPService: IGetCEP;
}
