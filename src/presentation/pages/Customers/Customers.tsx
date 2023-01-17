import { Content } from '@/presentation/components';
import { AuthProvider } from '@/presentation/contexts';
import { useCustomersQuery } from '@/presentation/hooks';
import { CoreLayout } from '@/presentation/layouts';
import { TableCustomers } from './components';
import { CustomersProps } from './types';

export const CustomersPage = ({ service }: CustomersProps) => {
  return (
    <AuthProvider>
      <CoreLayout title="Clientes">
        <TableCustomers service={service} />
      </CoreLayout>
    </AuthProvider>
  );
};
