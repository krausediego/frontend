import { AuthProvider } from '@/presentation/contexts';
import { CreateCustomer, CreateAddress, GetCEP } from '@/data/useCases';
import { CreateCustomerPage } from '@/presentation/pages/Customer';
import { AxiosRequest } from '@/infra/request/axios-request';
import { ICreateAddress, ICreateCustomer, IGetCEP } from '@/domain/useCases';

type NewCustomersProps = ICreateCustomer & ICreateAddress & IGetCEP;

export const NewCustomerPageFactory = () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const cepBaseUrl = process.env.NEXT_PUBLIC_CEP_URL;
  const httpRequest = new AxiosRequest();
  const createCustomerService = new CreateCustomer(
    httpRequest,
    `${baseUrl}/create-customer`,
  );
  const createAddressService = new CreateAddress(
    httpRequest,
    `${baseUrl}/create-address`,
  );
  const getCEPService = new GetCEP(httpRequest, `${cepBaseUrl}`);
  const api: NewCustomersProps = {
    createCustomer: createCustomerService.createCustomer.bind(
      createCustomerService,
    ),
    createAddress:
      createAddressService.createAddress.bind(createAddressService),
    getCEP: getCEPService.getCEP.bind(getCEPService),
  };

  return (
    <AuthProvider>
      <CreateCustomerPage customerService={api} />
    </AuthProvider>
  );
};
