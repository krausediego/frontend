/* eslint-disable react/jsx-no-useless-fragment */
import { Badge } from '@chakra-ui/react';
import { StatusBadgeProps } from './types';

export const StatusBadge = ({ status }: StatusBadgeProps) => {
  return (
    <>
      {status ? (
        <Badge colorScheme="green">Ativo</Badge>
      ) : (
        <Badge colorScheme="red">Inativo</Badge>
      )}
    </>
  );
};
