import { ICustomers } from '@/domain/useCases';
import { Button, Content } from '@/presentation/components';
import { AuthProvider } from '@/presentation/contexts';
import { CoreLayout } from '@/presentation/layouts';
import { HStack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddressForm, CustomerForm } from './components';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateCustomerSchema } from '@/presentation/schemas';
import { useState } from 'react';

export const CreateCustomerPage = () => {
  const [type, setType] = useState('fisico');

  const { reset, register, handleSubmit, formState } = useForm<ICustomers.Data>(
    {
      resolver: yupResolver(CreateCustomerSchema),
      context: { type },
    },
  );

  const handleSubmitForm: SubmitHandler<ICustomers.Data> = async values => {
    console.log(values);
  };

  return (
    <AuthProvider>
      <CoreLayout spacing={10} backRoute title="Adicionar cliente">
        <Content title="Dados do cliente:">
          <CustomerForm
            register={register}
            formState={formState}
            type={setType}
          />
        </Content>
        <Content title="Endereço:">
          <AddressForm />
        </Content>
        <HStack w="full" justifyContent="end" spacing={14}>
          <Button variant="link">Cancelar</Button>
          <Button onClick={handleSubmit(handleSubmitForm)}>Salvar</Button>
        </HStack>
      </CoreLayout>
    </AuthProvider>
  );
};
