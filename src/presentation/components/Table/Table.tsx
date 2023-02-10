import { Box, Table as TableComponent } from '@chakra-ui/react';
import { TableProps } from './types';

export const Table = ({ children, ...rest }: TableProps) => {
  return (
    <Box w="full" overflowY="auto" borderRadius="md">
      <TableComponent colorScheme="gray" variant="striped" {...rest}>
        {children}
      </TableComponent>
    </Box>
  );
};
