import { GetCustomers } from '@/data/useCases/get-customers';
import { AxiosRequest } from '@/infra/request/axios-request';
import { CustomersPage } from '@/presentation/pages';

export const CustomersPageFactory = () => {
  return (
    <CustomersPage
      service={
        new GetCustomers(
          new AxiosRequest(),
          `${process.env.NEXT_PUBLIC_API_URL}/get-all-customers`,
        )
      }
    />
  );
};
