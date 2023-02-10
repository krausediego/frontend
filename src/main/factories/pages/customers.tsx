import { GetCustomers } from '@/data/useCases/customers';
import { EditCustomer } from '@/data/useCases/customers/edit-customer';
import { AxiosRequest } from '@/infra/request/axios-request';
import { CustomersPage } from '@/presentation/pages';

export const CustomersPageFactory = () => {
  return (
    <CustomersPage
      getCustomersSerivce={
        new GetCustomers(
          new AxiosRequest(),
          `${process.env.NEXT_PUBLIC_API_URL}/get-all-customers`,
        )
      }
      editCustomerSerivce={
        new EditCustomer(
          new AxiosRequest(),
          `${process.env.NEXT_PUBLIC_API_URL}/update-customer`,
        )
      }
    />
  );
};
