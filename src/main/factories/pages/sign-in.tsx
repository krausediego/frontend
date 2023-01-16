import { SignIn } from '@/data/useCases';
import { AxiosRequest } from '@/infra/request/axios-request';
import { SignInPage } from '@/presentation/pages';

export const SignInPageFactory = () => {
  return (
    <SignInPage
      signInService={
        new SignIn(
          new AxiosRequest(),
          `${process.env.NEXT_PUBLIC_API_URL}/sign-in`,
        )
      }
    />
  );
};
