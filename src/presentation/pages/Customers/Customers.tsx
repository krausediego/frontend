import { Content } from '@/presentation/components';
import { AuthProvider } from '@/presentation/contexts';
import { useCustomersQuery } from '@/presentation/hooks';
import { CoreLayout } from '@/presentation/layouts';
import { TableCustomers } from './components';
import { CustomersProps } from './types';

export const CustomersPage = ({
  getCustomersSerivce,
  editCustomerSerivce,
}: CustomersProps) => {
  return (
    <AuthProvider>
      <CoreLayout title="Clientes">
        <TableCustomers
          getCustomersSerivce={getCustomersSerivce}
          editCustomerSerivce={editCustomerSerivce}
        />
      </CoreLayout>
    </AuthProvider>
  );
};
