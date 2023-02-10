import { IEditCustomer, ISignIn } from '@/domain/useCases';
import { queryClient } from '@/pages/_app';
import { useMutation } from 'react-query';
import { useCookies } from 'react-cookie';
import isEmpty from 'lodash/isEmpty';

interface EditCustomerProps {
  editCustomerSerivce: IEditCustomer;
  token: string;
}

export const useEditCustomerMutation = ({
  editCustomerSerivce,
  token,
}: EditCustomerProps) => {
  return useMutation(
    async (customer: IEditCustomer.Data) => {
      const { data, errors } = await editCustomerSerivce.editCustomer({
        data: customer,
        token,
      });

      if (!isEmpty(errors)) {
        throw new Error(errors[0].message);
      }

      return data;
    },
    {
      onSuccess: async customer => {
        await queryClient.invalidateQueries(['customers[]']);
      },
    },
  );
};
