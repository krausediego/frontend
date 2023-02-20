import {
  GetCustomers,
  EditCustomer,
  DeleteCustomer,
} from '@/data/useCases/customers';
import { ICustomers, IDeleteCustomer, IEditCustomer } from '@/domain/useCases';
import { AxiosRequest } from '@/infra/request/axios-request';
import { AuthProvider } from '@/presentation/contexts';
import { CustomersPage } from '@/presentation/pages/Customer';

type CustomersProps = ICustomers & IEditCustomer & IDeleteCustomer;

export const CustomersPageFactory = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const httpRequest = new AxiosRequest();
  const getCustomersService = new GetCustomers(
    httpRequest,
    `${baseUrl}/get-all-customers`,
  );
  const editCustomerService = new EditCustomer(
    httpRequest,
    `${baseUrl}/update-customer`,
  );
  const deleteCustomerService = new DeleteCustomer(
    httpRequest,
    `${baseUrl}/customer`,
  );
  const api: CustomersProps = {
    getCustomers: getCustomersService.getCustomers.bind(getCustomersService),
    editCustomer: editCustomerService.editCustomer.bind(editCustomerService),
    deleteCustomer: deleteCustomerService.deleteCustomer.bind(
      deleteCustomerService,
    ),
  };

  return (
    <AuthProvider>
      <CustomersPage customerServices={api} />
    </AuthProvider>
  );
};
