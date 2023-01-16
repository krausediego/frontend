import { AuthProvider } from '@/presentation/contexts';
import { CoreLayout } from '@/presentation/layouts';
import { Flex } from '@chakra-ui/react';

export const DashboardPage = () => {
  return (
    <AuthProvider>
      <CoreLayout title="Dashboard">
        <span>Diego</span>
      </CoreLayout>
    </AuthProvider>
  );
};
