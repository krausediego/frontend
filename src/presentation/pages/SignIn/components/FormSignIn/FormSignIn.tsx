import { ISignIn } from '@/domain/useCases';
import { Button, Input } from '@/presentation/components';
import { useSignInMutation } from '@/presentation/hooks';
import { Heading, Link, Text, useToast, VStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormSignInProps } from './types';
import { yupResolver } from '@hookform/resolvers/yup';
import { SignInSchema } from '@/presentation/schemas';
import { useRouter } from 'next/router';

export const FormSignIn = ({ service }: FormSignInProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn.Data>({
    resolver: yupResolver(SignInSchema),
  });

  const { mutateAsync, isLoading } = useSignInMutation({ service });
  const toast = useToast();
  const router = useRouter();

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
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
        type="password"
        errorMessage={errors?.password?.message}
        {...register('password')}
      />
      <Button isLoading={isLoading} type="submit" fullWidth>
        Entrar
      </Button>
      <Text>
        Ainda não possuí uma conta ?{' '}
        <Link
          color="teal"
          onClick={() => {
            return router.push('/signUp');
          }}
        >
          Crie uma agora
        </Link>
      </Text>
    </VStack>
  );
};
