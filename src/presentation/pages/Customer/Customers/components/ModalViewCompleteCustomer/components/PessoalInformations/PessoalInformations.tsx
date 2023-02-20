import { InformationBadge } from '@/presentation/components';
import { Grid, GridItem } from '@chakra-ui/react';
import {
  MdCreditCard,
  MdMailOutline,
  MdOutlinePhone,
  MdPersonOutline,
} from 'react-icons/md';
import { PessoalInformationsProps } from './types';

export const PessoalInformations = ({ customer }: PessoalInformationsProps) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={2}>
      <GridItem>
        <InformationBadge
          title="Nome"
          info={customer.name}
          icon={MdPersonOutline}
        />
      </GridItem>
      <GridItem>
        <InformationBadge
          title="CPF / CNPJ"
          info={customer.cpf || customer.cnpj}
          icon={MdCreditCard}
        />
      </GridItem>
      <GridItem>
        <InformationBadge
          title="Celular"
          info={customer.phone}
          icon={MdOutlinePhone}
        />
      </GridItem>
      <GridItem>
        <InformationBadge
          title="Email"
          info={customer.email}
          icon={MdMailOutline}
        />
      </GridItem>
    </Grid>
  );
};
