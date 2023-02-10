import { Flex, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { InformationBadgeProps } from './types';

export const InformationBadge = ({
  icon,
  title,
  info,
}: InformationBadgeProps) => {
  return (
    <Flex
      w="full"
      h="auto"
      alignItems="center"
      gap={4}
      bg="gray.50"
      padding={2}
      borderRadius={6}
    >
      <Icon as={icon} fontSize={30} color="gray.500" />
      <VStack spacing={1} alignItems="start">
        <Heading fontSize="1rem" color="gray.500">
          {title}
        </Heading>
        <Text>{info}</Text>
      </VStack>
    </Flex>
  );
};
