import { useAuth } from '@/presentation/contexts';
import { useCustomersQuery } from '@/presentation/hooks';
import { TableCustomersProps } from './types';

export const TableCustomers = ({ service }: TableCustomersProps) => {
  const { decoded, token } = useAuth();
  const { data } = useCustomersQuery(service, decoded?.id, token);

  console.log(data);

  return (
    <div>
      <span>Table</span>
    </div>
  );
};
