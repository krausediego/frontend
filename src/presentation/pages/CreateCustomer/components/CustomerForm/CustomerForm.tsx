import { Input, Select } from '@/presentation/components';
import { Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import { CustomerFormProps } from './types';

export const CustomerForm = ({
  setType,
  register,
  formState,
  type,
}: CustomerFormProps) => {
  const { errors } = formState;

  return (
    <Stack spacing={4}>
      <Stack>
        <Text>Tipo de cliente:</Text>
        <RadioGroup
          defaultValue="fisico"
          onChange={setType}
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
          errorMessage={errors.phone?.message}
        />
        <Input
          label="Data de nascimento"
          type="date"
          {...register('birth_date')}
          errorMessage={errors.birth_date?.message}
        />
        <Select
          {...register('genre')}
          errorMessage={errors.genre?.message}
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
          errorMessage={errors.cpf?.message}
        />
        <Input
          label="CNPJ"
          {...register('cnpj')}
          errorMessage={errors.cnpj?.message}
        />
      </Stack>
      <Stack direction="row">
        <Input
          label="Incrição estadual"
          {...register('inscricao_estadual')}
          errorMessage={errors.inscricao_estadual?.message}
        />
        <Input
          label="Razão social"
          {...register('razao_social')}
          errorMessage={errors.razao_social?.message}
        />
      </Stack>
    </Stack>
  );
};
