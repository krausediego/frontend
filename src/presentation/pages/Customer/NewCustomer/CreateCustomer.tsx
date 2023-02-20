import { ICustomers } from '@/domain/useCases';
import { Button, Content } from '@/presentation/components';
import { useAuth } from '@/presentation/contexts';
import { CoreLayout } from '@/presentation/layouts';
import { HStack, useToast } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddressForm, CustomerForm } from '../components';
import { yupResolver } from '@hookform/resolvers/yup';
import { CreateCustomerSchema } from '@/presentation/schemas';
import { useEffect, useState } from 'react';
import { CreateCustomerProps } from './types';
import { useCreateCustomerMutation } from '@/presentation/hooks';
import { useRouter } from 'next/router';

export const CreateCustomerPage = ({
  customerService,
}: CreateCustomerProps) => {
  const [type, setType] = useState<'fisica' | 'juridica'>('fisica');

  const { token, decoded } = useAuth();
  const toast = useToast();
  const router = useRouter();

  const { register, handleSubmit, setValue, formState } =
    useForm<ICustomers.Data>({
      resolver: yupResolver(CreateCustomerSchema),
      context: { type },
    });

  const { mutateAsync } = useCreateCustomerMutation({
    customerService,
    token,
  });

  useEffect(() => {
    if (!decoded) return;
    setValue('user_id', decoded.id);
    setValue('address.user_id', decoded.id);
    setValue('status', true);
  }, [decoded, setValue]);

  const handleSubmitForm: SubmitHandler<ICustomers.Data> = async values => {
    try {
      await mutateAsync(values);
      toast({
        title: 'Cliente criado com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      router.push('/customers');
    } catch (error) {
      toast({
        title: 'Erro ao criar o cliente',
        description: 'Tente novamente em alguns instantes',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
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
        <AddressForm
          formState={formState}
          setValue={setValue}
          register={register}
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
