import { ICustomers } from '@/domain/useCases';
import { Button, Content } from '@/presentation/components';
import { useAuth } from '@/presentation/contexts';
import { CoreLayout } from '@/presentation/layouts';
import { HStack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddressForm, CustomerForm } from './components';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateCustomerSchema } from '@/presentation/schemas';
import { useEffect, useState } from 'react';

export const CreateCustomerPage = () => {
  const [type, setType] = useState<'fisica' | 'juridica'>('fisica');

  const { token } = useAuth();

  const { reset, register, handleSubmit, formState } = useForm<ICustomers.Data>(
    {
      resolver: yupResolver(CreateCustomerSchema),
      context: { type },
    },
  );

  const { errors } = formState;

  useEffect(() => {
    console.log(token);
  }, [errors]);

  const handleSubmitForm: SubmitHandler<ICustomers.Data> = async values => {
    console.log(values);
  };

  return (
    <CoreLayout spacing={10} backRoute title="Adicionar cliente">
      <Content title="Dados do cliente:">
        <CustomerForm
          register={register}
          type={type}
          formState={formState}
          setType={setType}
        />
      </Content>
      <Content title="Endereço:">
        <AddressForm />
      </Content>
      <HStack w="full" justifyContent="end" spacing={4} pb={10}>
        <Button variant="link">Cancelar</Button>
        <Button onClick={handleSubmit(handleSubmitForm)}>Salvar</Button>
      </HStack>
    </CoreLayout>
  );
};
