import { AuthProvider } from '@/presentation/contexts';
import { CoreLayout } from '@/presentation/layouts';
import { Text } from '@chakra-ui/react';

export const CreateCustomerPage = () => {
  return (
    <AuthProvider>
      <CoreLayout backRoute title="Adicionar cliente">
        <Text>Diego</Text>
      </CoreLayout>
    </AuthProvider>
  );
};
