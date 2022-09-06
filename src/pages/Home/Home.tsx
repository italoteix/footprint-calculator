import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import {
  Box,
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
import { useQuery } from '@tanstack/react-query';

import { ReactComponent as AirplaneIcon } from '../../assets/images/airplane.svg';
import { TravelType } from '../../model';
import { AirportOption, AirplaneAutocomplete } from '../../components/AirplaneAutocomplete';
import { getDistance } from '../../mockedServer/getDistance';
import { calculateFootprint } from '../../utils/calculateFootprint';
import { errorMessages } from '../../utils/validation';

interface Inputs {
  departure: AirportOption;
  destination: AirportOption;
  numberOfTravelers: number;
  type: TravelType;
}

const emptyFormValue = {
  departure: { label: '', value: '' },
  destination: { label: '', value: '' },
  numberOfTravelers: 0,
  type: TravelType.ONE_WAY
};

export const Home = () => {
  const [submitedValues, setSubmitedValues] = useState(emptyFormValue);
  const { data: footprint } = useQuery(
    ['distances', submitedValues.departure.value, submitedValues.destination.value],
    () =>
      getDistance(submitedValues.departure.value, submitedValues.destination.value).then(
        (distance) =>
          calculateFootprint({
            distance,
            numberOfTravelers: submitedValues.numberOfTravelers,
            type: submitedValues.type
          })
      )
  );
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSubmitedValues(data);
  };

  const { required } = errorMessages;

  return (
    <Container maxW='container.xl' pt={14}>
      <Grid
        templateRows={{ md: 'repeat(2, auto)' }}
        templateColumns={{ md: '3fr 1fr' }}
        rowGap={10}
        columnGap={16}
      >
        <GridItem>
          <Heading as='h1' mb={2} textTransform='uppercase'>
            Calculate your footprint
          </Heading>
          <Text lineHeight='taller'>
            Understand your footprint and compensate for your emissions. It takes less than a minute
            to measure your impact.
          </Text>
        </GridItem>

        <GridItem rowStart={{ md: 2 }}>
          <Flex alignItems='center' mb={6}>
            <Icon as={AirplaneIcon} h={12} w={12} mr={4} />
            <Heading textTransform='uppercase' fontSize='lg' as='h4'>
              Flights
            </Heading>
            {footprint && (
              <Text as='small' fontWeight='bold' fontSize='sm' marginLeft='auto'>
                {footprint} kg
              </Text>
            )}
          </Flex>

          <VStack spacing={6} as='form' onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name='departure'
              control={control}
              rules={{ required }}
              render={({ field }) => (
                <AirplaneAutocomplete
                  placeholder='From*'
                  {...field}
                  isInvalid={Boolean(errors.departure)}
                />
              )}
            />
            <Controller
              name='destination'
              control={control}
              rules={{ required }}
              render={({ field }) => (
                <AirplaneAutocomplete
                  placeholder='To*'
                  {...field}
                  isInvalid={Boolean(errors.destination)}
                />
              )}
            />
            <Controller
              name='numberOfTravelers'
              control={control}
              rules={{ required }}
              render={({ field }) => (
                <NumberInput w='100%' {...field} isInvalid={Boolean(errors.numberOfTravelers)}>
                  <NumberInputField placeholder='Number of travelers*' />
                </NumberInput>
              )}
            />
            <Controller
              name='type'
              control={control}
              rules={{ required }}
              render={({ field }) => (
                <Select placeholder='Type*' {...field} isInvalid={Boolean(errors.type)}>
                  <option value={TravelType.ONE_WAY}>One way</option>
                  <option value={TravelType.RETURN_TRIP}>Return trip</option>
                </Select>
              )}
            />
            <Button type='submit' colorScheme='brand' alignSelf='flex-start' w='150px'>
              Calculate
            </Button>
          </VStack>
        </GridItem>

        <GridItem rowStart={{ md: 2 }}>
          <VStack spacing={6} alignItems='flex-start'>
            {footprint && (
              <Box>
                <Heading fontSize='2xl' mb={5}>
                  {footprint} kg
                </Heading>
                <Text color='gray.400'>Your CO2 footprint</Text>
              </Box>
            )}

            <Box>
              <Heading fontSize='2xl' mb={5}>
                6.1 tonnes
              </Heading>
              <Text color='gray.400'>World average CO2 footprint per person per year</Text>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};
