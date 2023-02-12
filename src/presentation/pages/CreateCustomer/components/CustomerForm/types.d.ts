import { FormState, UseFormRegister } from 'react-hook-form';
import { ICustomers } from '@/domain/useCases';
import { Dispatch, SetStateAction } from 'react';

export interface CustomerFormProps {
  type: Dispatch<SetStateAction<string>>;
  register: UseFormRegister<ICustomers.Data>;
  formState: FormState<ICustomers.Data>;
}
