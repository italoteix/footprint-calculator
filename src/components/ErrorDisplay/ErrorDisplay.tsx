import { Container, Heading, Text } from '@chakra-ui/react';

interface ErrorDisplayProps {
  title: string;
  message?: string;
}

export const ErrorDisplay = ({ title, message }: ErrorDisplayProps) => (
  <Container maxW='container.xl' px={3}>
    <Heading my={10}>{title}</Heading>
    {message && <Text>{message}</Text>}
  </Container>
);
