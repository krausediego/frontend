import { ICustomers } from '@/domain/useCases';
import { Button, Content } from '@/presentation/components';
import { useAuth } from '@/presentation/contexts';
import {
  useCustomerQuery,
  useEditCustomerMutation,
} from '@/presentation/hooks';
import { CoreLayout } from '@/presentation/layouts';
import { CreateCustomerSchema } from '@/presentation/schemas';
import { HStack, Spinner, useToast } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddressForm, CustomerForm } from '../components';
import { EditCustomerPageProps } from './types';

export const EditCustomerPage = ({
  id,
  customerService,
}: EditCustomerPageProps) => {
  const [type, setType] = useState<'fisica' | 'juridica'>('fisica');

  const { register, handleSubmit, reset, formState } = useForm<ICustomers.Data>(
    {
      resolver: yupResolver(CreateCustomerSchema),
      context: { type },
    },
  );

  const { token, decoded } = useAuth();
  const toast = useToast();
  const router = useRouter();

  const { data, isLoading } = useCustomerQuery({
    getCustomerService: customerService,
    token,
    user_id: decoded?.id,
    id,
  });

  const { mutateAsync } = useEditCustomerMutation({
    editCustomerService: customerService,
    editAddressService: customerService,
    token,
  });

  useEffect(() => {
    reset(data?.data?.data);
  }, [data, reset]);

  const handleSubmitForm: SubmitHandler<ICustomers.Data> = async values => {
    try {
      await mutateAsync(values);
      toast({
        title: 'Cliente editado com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      router.push('/customers');
    } catch (error) {
      toast({
        title: 'Erro ao editar o cliente',
        description: 'Tente novamente em alguns instantes',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (isLoading) {
    <Spinner />;
  }

  return (
    <CoreLayout spacing={10} backRoute title="Editar cliente">
      <Content title="Dados do cliente:">
        <CustomerForm
          register={register}
          type={type}
          formState={formState}
          setType={setType}
        />
      </Content>
      <Content title="Endereço:">
        <AddressForm
          formState={formState}
          register={register}
          reset={reset}
          getCEPService={customerService}
        />
      </Content>
      <HStack w="full" justifyContent="flex-end" spacing={4} pb={10}>
        <Button variant="link">Cancelar</Button>
        <Button onClick={handleSubmit(handleSubmitForm)}>Salvar</Button>
      </HStack>
    </CoreLayout>
  );
};
