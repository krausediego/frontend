import { Content } from '@/presentation/components';
import { AuthProvider } from '@/presentation/contexts';
import { CoreLayout } from '@/presentation/layouts';
import { Text } from '@chakra-ui/react';

export const CreateCustomerPage = () => {
  return (
    <AuthProvider>
      <CoreLayout backRoute title="Adicionar cliente">
        <Content>
          <span>Teste</span>
        </Content>
      </CoreLayout>
    </AuthProvider>
  );
};
