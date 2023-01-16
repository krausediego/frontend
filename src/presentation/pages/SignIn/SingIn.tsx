import { AuthLayout } from '@/presentation/layouts';
import { FormSignIn } from './components';
import { SignInProps } from './types';

export const SignInPage = ({ signInService }: SignInProps) => {
  return (
    <AuthLayout>
      <FormSignIn service={signInService} />
    </AuthLayout>
  );
};
