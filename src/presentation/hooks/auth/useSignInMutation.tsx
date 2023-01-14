import { ISignIn } from '@/domain/useCases';
import { queryClient } from '@/pages/_app';
import { useMutation } from 'react-query';
import { useCookies } from 'react-cookie';

interface SignInMutationProps {
  service: ISignIn;
}

export const useSignInMutation = ({ service }: SignInMutationProps) => {
  const [_, setCookie] = useCookies();

  return useMutation(
    async (user: ISignIn.Data) => {
      await service.signIn(user);
    },
    {
      onSuccess: async user => {
        return queryClient.setQueryData('user', user);
      },
    },
  );
};
