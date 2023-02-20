import { IDeleteCustomer } from '@/domain/useCases';
import { queryClient } from '@/pages/_app';
import { useMutation } from 'react-query';

type useDeleteCustomerMutationProps = {
  token: string;
  deleteCustomerService: IDeleteCustomer;
  user_id: string;
};

export const useDeleteCustomerMutation = ({
  deleteCustomerService,
  token,
  user_id,
}: useDeleteCustomerMutationProps) => {
  return useMutation(
    async (ids: IDeleteCustomer.Data) => {
      const { data, errors } = await deleteCustomerService.deleteCustomer({
        data: ids,
        token,
      });

      return data;
    },
    {
      onSuccess: () => {
        return queryClient.invalidateQueries(['customers[]', user_id]);
      },
    },
  );
};
