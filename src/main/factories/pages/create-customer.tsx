import { AuthProvider } from '@/presentation/contexts';
import { CreateCustomerPage } from '@/presentation/pages';

export const CreateCustomerPageFactory = () => {
  return (
    <AuthProvider>
      <CreateCustomerPage />
    </AuthProvider>
  );
};
