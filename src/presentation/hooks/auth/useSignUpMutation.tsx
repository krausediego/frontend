import { ISignUp } from '@/domain/useCases';
import { queryClient } from '@/pages/_app';
import { useMutation } from 'react-query';
import isEmpty from 'lodash/isEmpty';

interface SignUpMutationProps {
  service: ISignUp;
}

export const useSignUpMutation = ({ service }: SignUpMutationProps) => {
  return useMutation(
    async (user: ISignUp.Data) => {
      const { errors, data } = await service.signUp(user);

      if (!isEmpty(errors)) {
        throw new Error(errors.message);
      }

      return data;
    },
    {
      onSuccess: async user => {
        return queryClient.setQueryData('user', user);
      },
    },
  );
};
