import { SignUp } from '@/data/useCases';
import { AxiosRequest } from '@/infra/request/axios-request';
import { SignUpPage } from '@/presentation/pages/SignUp';

export const SignUpPageFactory = () => {
  return (
    <SignUpPage
      SignUpService={
        new SignUp(
          new AxiosRequest(),
          `${process.env.NEXT_PUBLIC_API_URL}/sign-up`,
        )
      }
    />
  );
};
