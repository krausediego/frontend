import { Input } from '@/presentation/components';
import { InputMask } from '@/presentation/utils';
import { Stack } from '@chakra-ui/react';
import { AddressFormProps } from './types';

export const AddressForm = ({
  formState,
  register,
  getCEPService,
}: AddressFormProps) => {
  const { errors } = formState;

  const masked = new InputMask();

  return (
    <Stack spacing={4}>
      <Stack direction="row">
        <Input
          label="Endereço"
          errorMessage={errors.address?.address?.message}
          {...register('address.address')}
        />
        <Input
          label="Número"
          type="number"
          defaultValue="0"
          errorMessage={errors.address?.number?.message}
          {...register('address.number')}
        />
      </Stack>
      <Stack direction="row">
        <Input
          label="Cidade"
          errorMessage={errors.address?.city?.message}
          {...register('address.city')}
        />
        <Input
          label="Bairro"
          errorMessage={errors.address?.district?.message}
          {...register('address.district')}
        />
        <Input
          label="UF"
          errorMessage={errors.address?.uf?.message}
          {...register('address.uf')}
        />
      </Stack>
      <Stack direction="row">
        <Input
          label="Referência"
          errorMessage={errors.address?.reference?.message}
          {...register('address.reference')}
        />
        <Input
          label="CEP"
          errorMessage={errors.address?.cep?.message}
          {...register('address.cep')}
          onChange={({ target }) => {
            return (target.value = masked.cep(target.value));
          }}
        />
      </Stack>
    </Stack>
  );
};
