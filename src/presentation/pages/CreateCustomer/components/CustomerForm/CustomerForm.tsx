import { Input } from '@/presentation/components';
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { CustomerFormProps } from './types';

export const CustomerForm = ({
  type,
  register,
  formState,
}: CustomerFormProps) => {
  const { errors } = formState;

  return (
    <Stack spacing={4}>
      <Stack>
        <Text>Tipo de cliente:</Text>
        <RadioGroup
          defaultValue="fisica"
          onChange={type}
          display="flex"
          gap={2}
        >
          <Radio value="fisico">Física</Radio>
          <Radio value="juridico">Jurídica</Radio>
        </RadioGroup>
      </Stack>
      <Stack direction="row">
        <Input
          label="Nome"
          {...register('name')}
          errorMessage={errors.name?.message}
        />
        <Input label="Email" />
      </Stack>
      <Stack direction="row">
        <Input label="Celular" />
        <Input label="Data de nascimento" />
        <Input label="Gênero" />
      </Stack>
      <Stack direction="row">
        <Input
          label="CPF"
          {...register('cpf')}
          errorMessage={errors.cpf?.message}
        />
        <Input label="CNPJ" />
      </Stack>
      <Stack direction="row">
        <Input label="Incrição estadual" />
        <Input label="Razão social" />
      </Stack>
    </Stack>
  );
};
