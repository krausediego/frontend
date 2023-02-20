import { ChangeEvent } from 'react';
import { Input, Select } from '@/presentation/components';
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { CustomerFormProps } from './types';
import { InputMask } from '@/presentation/utils';

export const CustomerForm = ({
  setType,
  register,
  formState,
  type,
}: CustomerFormProps) => {
  const { errors } = formState;

  const masked = new InputMask();

  return (
    <Stack spacing={4}>
      <Stack>
        <Text>Tipo de cliente:</Text>
        <RadioGroup
          defaultValue="fisica"
          onChange={e => {
            setType(e as 'fisica' | 'juridica');
          }}
          display="flex"
          gap={2}
        >
          <Radio value="fisica">Física</Radio>
          <Radio value="juridica">Jurídica</Radio>
        </RadioGroup>
      </Stack>
      <Stack direction="row">
        <Input
          label="Nome"
          {...register('name')}
          errorMessage={errors.name?.message}
        />
        <Input
          label="Email"
          {...register('email')}
          errorMessage={errors.email?.message}
        />
      </Stack>
      <Stack direction="row">
        <Input
          label="Celular"
          {...register('phone')}
          onChange={({ target }) => {
            return (target.value = masked.cellphone(target.value));
          }}
          errorMessage={errors.phone?.message}
        />
        <Input
          label="Data de nascimento"
          isDisabled={type === 'juridica'}
          type="date"
          {...register('birth_date')}
          errorMessage={errors.birth_date?.message}
        />
        <Select
          {...register('genre')}
          errorMessage={errors.genre?.message}
          isDisabled={type === 'juridica'}
          label="Gênero"
          placeholder="Selecione o gênero"
        >
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </Select>
      </Stack>
      <Stack direction="row">
        <Input
          label="CPF"
          {...register('cpf')}
          onChange={({ target }) => {
            return (target.value = masked.cpf(target.value));
          }}
          isDisabled={type === 'juridica'}
          errorMessage={errors.cpf?.message}
        />
        <Input
          label="CNPJ"
          {...register('cnpj')}
          onChange={({ target }) => {
            return (target.value = masked.cnpj(target.value));
          }}
          isDisabled={type === 'fisica'}
          errorMessage={errors.cnpj?.message}
        />
      </Stack>
      <Stack direction="row">
        <Input
          label="Incrição estadual"
          {...register('inscricao_estadual')}
          isDisabled={type === 'fisica'}
          errorMessage={errors.inscricao_estadual?.message}
        />
        <Input
          label="Razão social"
          {...register('razao_social')}
          isDisabled={type === 'fisica'}
          errorMessage={errors.razao_social?.message}
        />
      </Stack>
    </Stack>
  );
};
