import {
  EditAddress,
  EditCustomer,
  GetCEP,
  GetCustomer,
} from '@/data/useCases';
import {
  IEditCustomer,
  IGetCustomer,
  IEditAddress,
  IGetCEP,
} from '@/domain/useCases';
import { AxiosRequest } from '@/infra/request/axios-request';
import { AuthProvider } from '@/presentation/contexts';
import { EditCustomerPage } from '@/presentation/pages/Customer';

type EditCustomerPageFactoryProps = {
  id: string;
};

type EditCustomerProps = IGetCustomer & IEditCustomer & IEditAddress & IGetCEP;

export const EditCustomerPageFactory = ({
  id,
}: EditCustomerPageFactoryProps) => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const cepBaseUrl = process.env.NEXT_PUBLIC_CEP_URL;
  const httpRequest = new AxiosRequest();
  const getCustomerService = new GetCustomer(
    httpRequest,
    `${baseUrl}/get-customer/${id}`,
  );
  const editCustomerService = new EditCustomer(
    httpRequest,
    `${baseUrl}/update-customer`,
  );
  const editAddressService = new EditAddress(
    httpRequest,
    `${baseUrl}/update-address`,
  );
  const getCEPService = new GetCEP(httpRequest, `${cepBaseUrl}`);
  const api: EditCustomerProps = {
    getCustomer: getCustomerService.getCustomer.bind(getCustomerService),
    editCustomer: editCustomerService.editCustomer.bind(editCustomerService),
    editAddress: editAddressService.editAddress.bind(editAddressService),
    getCEP: getCEPService.getCEP.bind(getCEPService),
  };

  return (
    <AuthProvider>
      <EditCustomerPage id={id} customerService={api} />
    </AuthProvider>
  );
};
