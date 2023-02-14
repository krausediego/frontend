import { FormState, UseFormRegister, UseFormReset } from 'react-hook-form';
import { ICustomers } from '@/domain/useCases';
import { Dispatch, SetStateAction } from 'react';

export interface CustomerFormProps {
  setType: Dispatch<SetStateAction<'fisica' | 'juridica'>>;
  register: UseFormRegister<ICustomers.Data>;
  formState: FormState<ICustomers.Data>;
  type: 'fisica' | 'juridica';
}
