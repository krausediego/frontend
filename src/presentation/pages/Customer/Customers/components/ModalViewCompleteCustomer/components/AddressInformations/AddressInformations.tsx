import { InformationBadge } from '@/presentation/components';
import { Box, Heading, VStack, Text } from '@chakra-ui/react';
import { MdOutlineHome } from 'react-icons/md';
import { AddressInformationsProps } from './types';

export const AddressInformations = ({ address }: AddressInformationsProps) => {
  return (
    <VStack mt="2rem" alignItems="start">
      <Heading fontSize="1.25rem">Endereços</Heading>
      <InformationBadge
        title="Endereço:"
        icon={MdOutlineHome}
        info={
          <Box>
            <Text>
              {`${address.address} ${address.number || 'Sem número'} - ${
                address.reference
              }`}
            </Text>
            <Text>{`${address.district}/${address.cep}`}</Text>
            <Text>{`${address.city}/${address.uf}`}</Text>
          </Box>
        }
      />
    </VStack>
  );
};
