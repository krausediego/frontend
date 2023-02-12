import { Input } from '@/presentation/components';
import { Stack } from '@chakra-ui/react';

export const AddressForm = () => {
  return (
    <Stack spacing={4}>
      <Stack direction="row">
        <Input label="Endereço" />
        <Input label="Número" />
      </Stack>
      <Stack direction="row">
        <Input label="Cidade" />
        <Input label="Bairro" />
        <Input label="UF" />
      </Stack>
      <Stack direction="row">
        <Input label="Referência" />
        <Input label="CEP" />
      </Stack>
    </Stack>
  );
};
