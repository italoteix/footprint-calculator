import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  VStack
} from '@chakra-ui/react';
import { PropsValue } from 'chakra-react-select';

import { ReactComponent as AirplaneIcon } from '../../assets/images/airplane.svg';
import { TravelType } from '../../model';
import { AirportOption, AirplaneAutocomplete } from '../../components/AirplaneAutocomplete';

interface Inputs {
  departure: PropsValue<AirportOption>;
  destination: PropsValue<AirportOption>;
  numberOfTravelers: number;
  type: TravelType;
}

export const Home = () => {
  const { handleSubmit, control } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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

          <VStack spacing={6} as='form' onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name='departure'
              control={control}
              rules={{ required: true }}
              render={({ field }) => <AirplaneAutocomplete placeholder='From*' {...field} />}
            />
            <Controller
              name='destination'
              control={control}
              rules={{ required: true }}
              render={({ field }) => <AirplaneAutocomplete placeholder='To*' {...field} />}
            />
            <Controller
              name='numberOfTravelers'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <NumberInput w='100%' {...field}>
                  <NumberInputField placeholder='Number of travelers*' />
                </NumberInput>
              )}
            />
            <Controller
              name='type'
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Select placeholder='Type*' {...field}>
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                </Select>
              )}
            />
            <Button type='submit' colorScheme='brand' alignSelf='flex-start' w='150px'>
              Calculate
            </Button>
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
