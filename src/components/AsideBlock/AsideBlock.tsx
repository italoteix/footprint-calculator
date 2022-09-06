import { Box, Heading, Text } from '@chakra-ui/react';

interface AsideBlockProps {
  title: string;
  message: string;
}

export const AsideBlock = ({ title, message }: AsideBlockProps) => (
  <Box>
    <Heading fontSize='2xl' mb={5}>
      {title}
    </Heading>
    <Text color='gray.400'>{message}</Text>
  </Box>
);
