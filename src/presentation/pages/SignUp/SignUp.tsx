import { AuthLayout } from '@/presentation/layouts';
import { FormSignUp } from './components';
import { SignUpProps } from './types';

export const SignUpPage = ({ SignUpService }: SignUpProps) => {
  return (
    <AuthLayout>
      <FormSignUp service={SignUpService} />
    </AuthLayout>
  );
};
