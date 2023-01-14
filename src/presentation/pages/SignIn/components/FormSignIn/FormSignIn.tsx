import { ISignIn } from '@/domain/useCases';
import { Button, Input } from '@/presentation/components';
import { useSignInMutation } from '@/presentation/hooks';
import { Heading, useToast, VStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormSignInProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInSchema } from '@/presentation/schemas';

export const FormSignIn = ({ service }: FormSignInProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn.Data>({
    resolver: yupResolver(SignInSchema),
  });

  const { mutateAsync, isError } = useSignInMutation({ service });
  const toast = useToast();

  const SubmitForm: SubmitHandler<ISignIn.Data> = async values => {
    try {
      await mutateAsync(values);
      toast({
        title: 'Login realizado com sucesso.',
        status: 'success',
        position: 'top',
        duration: 3000,
        isClosable: true,
      });
    } catch (err: any) {
      toast({
        title: 'Erro ao realizar o login.',
        description: err,
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  console.log(isError);

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(SubmitForm)}
      w={['xs', 'md', 'md']}
      spacing={4}
    >
      <Heading>Fazer login</Heading>
      <Input
        label="Email"
        errorMessage={errors?.emailOrUsername?.message}
        {...register('emailOrUsername')}
      />
      <Input
        label="Senha"
        errorMessage={errors?.password?.message}
        {...register('password')}
      />
      <Button type="submit" fullWidth>
        Entrar
      </Button>
    </VStack>
  );
};
