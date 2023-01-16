import { Button, Input } from '@/presentation/components';
import { Heading, Link, Text, useToast, VStack } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { SignUpSchema } from '@/presentation/schemas';
import { ISignUp } from '@/domain/useCases';
import { FormSignUpProps } from './types';
import { useSignUpMutation } from '@/presentation/hooks';

export const FormSignUp = ({ service }: FormSignUpProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUp.Data>({
    resolver: yupResolver(SignUpSchema),
  });
  const router = useRouter();
  const toast = useToast();
  const { mutateAsync } = useSignUpMutation({ service });

  const SubmitForm: SubmitHandler<ISignUp.Data> = async values => {
    try {
      await mutateAsync(values);
      toast({
        title: 'Conta criada com sucesso!',
        status: 'success',
        position: 'top',
        duration: 3000,
        isClosable: true,
      });
    } catch (err) {
      toast({
        title: 'Erro ao criar a conta.',
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
      <Heading>Criar conta</Heading>
      <Input
        label="Usuário"
        errorMessage={errors?.username?.message}
        {...register('username')}
      />
      <Input
        type="email"
        label="Email"
        errorMessage={errors?.email?.message}
        {...register('email')}
      />
      <Input
        type="password"
        label="Senha"
        errorMessage={errors?.password?.message}
        {...register('password')}
      />
      <Input
        type="password"
        label="Repita a senha"
        errorMessage={errors?.repeatPassword?.message}
        {...register('repeatPassword')}
      />
      <Button type="submit" fullWidth>
        Criar conta
      </Button>
      <Text>
        Já possuí uma conta ?{' '}
        <Link
          color="teal"
          onClick={() => {
            return router.push('/signIn');
          }}
        >
          Faça o login
        </Link>
      </Text>
    </VStack>
  );
};
