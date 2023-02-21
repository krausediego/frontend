import { ICreateCustomer, ICreateAddress } from '@/domain/useCases';
import { queryClient } from '@/pages/_app';
import { useMutation } from 'react-query';
import isEmpty from 'lodash/isEmpty';

interface CreateCustomerProps {
  customerService: ICreateCustomer & ICreateAddress;
  user_id: string;
  token: string;
}

export const useCreateCustomerMutation = ({
  customerService,
  user_id,
  token,
}: CreateCustomerProps) => {
  return useMutation(
    async (customer: ICreateCustomer.Data) => {
      customer.user_id = user_id;
      customer.address!.user_id = user_id;
      const { data: addressData, errors: addressErrors } =
        await customerService.createAddress({
          data: customer.address!,
          token,
        });

      customer.address_id = addressData?.data.id as string;

      delete customer.address;

      const { data, errors } = await customerService.createCustomer({
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
