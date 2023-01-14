import { AuthLayout } from '@/presentation/layouts';
import { FormSignIn } from './components';
import { SignInProps } from './types';

export const PageSignIn = ({ signInService }: SignInProps) => {
  return (
    <AuthLayout>
      <FormSignIn service={signInService} />
    </AuthLayout>
  );
};
