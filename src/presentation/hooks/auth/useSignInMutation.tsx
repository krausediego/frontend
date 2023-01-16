import { ISignIn } from '@/domain/useCases';
import { queryClient } from '@/pages/_app';
import { useMutation } from 'react-query';
import { useCookies } from 'react-cookie';
import isEmpty from 'lodash/isEmpty';

interface SignInMutationProps {
  service: ISignIn;
}

export const useSignInMutation = ({ service }: SignInMutationProps) => {
  const [_, setCookie] = useCookies();

  return useMutation(
    async (user: ISignIn.Data) => {
      const { errors, data } = await service.signIn(user);

      if (!isEmpty(errors)) {
        throw new Error(errors.message);
      }

      setCookie('token', data.data.token);

      return data;
    },
    {
      onSuccess: async user => {
        return queryClient.setQueryData('user', user);
      },
    },
  );
};
