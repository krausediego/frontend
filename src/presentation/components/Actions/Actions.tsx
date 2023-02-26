import { IconButton, Tooltip } from '@chakra-ui/react';
import { CustomerActionsProps } from './types';

export const Actions = ({
  tooltipLabel,
  icon,
  ...rest
}: CustomerActionsProps) => {
  return (
    <Tooltip hasArrow label={tooltipLabel} openDelay={200} closeDelay={200}>
      <IconButton
        {...rest}
        bg="transparent"
        icon={icon}
        fontSize={20}
        color="gray.500"
      />
    </Tooltip>
  );
};
