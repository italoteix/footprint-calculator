import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  VStack
} from '@chakra-ui/react';

import { ReactComponent as AirplaneIcon } from '../../assets/images/airplane.svg';

export const Home = () => {
  return (
    <Container maxW='container.xl' pt={14}>
      <Grid templateRows='auto auto' templateColumns='2fr 1fr' gap={10}>
        <GridItem>
          <Heading as='h1' mb={2} textTransform='uppercase'>
            Calculate your footprint
          </Heading>
          <Text lineHeight='taller'>
            Understand your footprint and compensate for your emissions. It takes less than a minute
            to measure your impact.
          </Text>
        </GridItem>

        <GridItem rowStart={2}>
          <Flex alignItems='center' mb={6}>
            <Icon as={AirplaneIcon} h={12} w={12} mr={4} />
            <Heading textTransform='uppercase' fontSize='lg' as='h4'>
              Flights
            </Heading>
          </Flex>

          <VStack spacing={6}>
            <Input placeholder='From*' />
            <Input placeholder='To*' />
            <NumberInput w='100%'>
              <NumberInputField placeholder='Number of travelers*' />
            </NumberInput>
            <Select placeholder='Type*'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
            </Select>
          </VStack>
        </GridItem>

        <GridItem rowStart={2}>
          <Heading fontSize='2xl' mb={5}>
            6.1 tonnes
          </Heading>
          <Text color='gray.400'>World average CO2 footprint per person per year</Text>
        </GridItem>
      </Grid>
    </Container>
  );
};
