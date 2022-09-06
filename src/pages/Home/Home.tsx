import { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import {
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  Grid,
  GridItem,
  Heading,
  Icon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  VStack
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';

import { ReactComponent as AirplaneIcon } from '../../assets/images/airplane.svg';
import { TravelType } from '../../model';
import { AirportOption, AirplaneAutocomplete } from '../../components/AirplaneAutocomplete';
import { AsideBlock } from '../../components/AsideBlock';
import { getDistance } from '../../mockedServer/getDistance';
import { calculateFootprint } from '../../utils/calculateFootprint';
import { errorMessages, integerRegex } from '../../utils/validation';

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
  const { data: footprint, isLoading } = useQuery(
    ['distances', submitedValues.departure.value, submitedValues.destination.value],
    () =>
      getDistance(submitedValues.departure.value, submitedValues.destination.value).then(
        (distance) =>
          calculateFootprint({
            distance,
            numberOfTravelers: submitedValues.numberOfTravelers,
            type: submitedValues.type
          })
      ),
    { staleTime: Infinity, refetchOnWindowFocus: false, refetchOnMount: false }
  );
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitted }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSubmitedValues(data);
  };

  const { required, integer } = errorMessages;

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
                <FormControl isInvalid={Boolean(errors.departure)}>
                  <AirplaneAutocomplete placeholder='From*' {...field} />
                  <FormErrorMessage>{errors.departure?.message}</FormErrorMessage>
                </FormControl>
              )}
            />
            <Controller
              name='destination'
              control={control}
              rules={{ required }}
              render={({ field }) => (
                <FormControl isInvalid={Boolean(errors.destination)}>
                  <AirplaneAutocomplete placeholder='To*' {...field} />
                  <FormErrorMessage>{errors.destination?.message}</FormErrorMessage>
                </FormControl>
              )}
            />
            <Controller
              name='numberOfTravelers'
              control={control}
              rules={{
                required,
                pattern: {
                  value: integerRegex,
                  message: integer
                }
              }}
              render={({ field }) => (
                <FormControl isInvalid={Boolean(errors.numberOfTravelers)}>
                  <NumberInput w='100%' {...field} min={1} step={1}>
                    <NumberInputField placeholder='Number of travelers*' />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <FormErrorMessage>{errors.numberOfTravelers?.message}</FormErrorMessage>
                </FormControl>
              )}
            />
            <Controller
              name='type'
              control={control}
              rules={{ required }}
              render={({ field }) => (
                <FormControl isInvalid={Boolean(errors.type)}>
                  <Select placeholder='Type*' {...field}>
                    <option value={TravelType.ONE_WAY}>One way</option>
                    <option value={TravelType.RETURN_TRIP}>Return trip</option>
                  </Select>
                  <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
                </FormControl>
              )}
            />
            <Button
              type='submit'
              colorScheme='brand'
              alignSelf='flex-start'
              w='150px'
              isLoading={isSubmitted && isLoading}
            >
              Calculate
            </Button>
          </VStack>
        </GridItem>

        <GridItem rowStart={{ md: 2 }}>
          <VStack spacing={6} alignItems='flex-start'>
            {footprint && <AsideBlock title={`${footprint} kg`} message='Your CO2 footprint' />}

            <AsideBlock
              title='6.1 tonnes'
              message='World average CO2 footprint per person per year'
            />
          </VStack>
        </GridItem>
      </Grid>
    </Container>
  );
};
