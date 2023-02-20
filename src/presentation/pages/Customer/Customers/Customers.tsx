import { Content } from '@/presentation/components';
import { CoreLayout } from '@/presentation/layouts';
import { TableCustomers } from './components';
import { CustomersProps } from './types';

export const CustomersPage = ({ customerServices }: CustomersProps) => {
  return (
    <CoreLayout title="Clientes">
      <Content>
        <TableCustomers customerServices={customerServices} />
      </Content>
    </CoreLayout>
  );
};
