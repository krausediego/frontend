import { IEditAddress, IEditCustomer, ISignIn } from '@/domain/useCases';
import { queryClient } from '@/pages/_app';
import { useMutation } from 'react-query';
import { useCookies } from 'react-cookie';
import isEmpty from 'lodash/isEmpty';

interface EditCustomerProps {
  editCustomerService: IEditCustomer;
  editAddressService?: IEditAddress;
  token: string;
}

export const useEditCustomerMutation = ({
  editCustomerService,
  editAddressService,
  token,
}: EditCustomerProps) => {
  return useMutation(
    async (customer: IEditCustomer.Data) => {
      if (editAddressService) {
        const { errors } = await editAddressService.editAddress({
          data: customer.address!,
          token,
        });

        if (!isEmpty(errors)) {
          throw new Error(errors[0].message);
        }
      }

      delete customer?.address;

      const { data, errors } = await editCustomerService.editCustomer({
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
