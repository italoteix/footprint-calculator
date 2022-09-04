import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  Select,
  OptionBase,
  GroupBase,
  ChakraStylesConfig,
  Props,
  SelectInstance
} from 'chakra-react-select';

export interface AirportOption extends OptionBase {
  label: string;
  value: string;
}

const options = [
  {
    value: 'DOH',
    label: 'Doha, Hamad International Airport (DOH), Qatar'
  },
  {
    value: 'HND',
    label: 'Tokyo, Tokyo Haneda International (HND), Japan'
  },
  {
    value: 'SIN',
    label: 'Singapore, Changi (SIN), Singapore'
  },
  {
    value: 'ICN',
    label: 'Seoul, Incheon International (ICN), Korea'
  },
  {
    value: 'NRT',
    label: 'Tokyo, Narita International Airport (NRT), Japan'
  },
  {
    value: 'MUC',
    label: 'Munich, Franz Josef Strauss (MUC), Germany'
  },
  {
    value: 'ZRH',
    label: 'Zurich, Zürich-Kloten (ZRH), Switzerland'
  },
  {
    value: 'LHR',
    label: 'London, London Heathrow (LHR), United Kingdom'
  },
  {
    value: 'KIX',
    label: 'Osaka, Kansai International (KIX), Japan'
  },
  {
    value: 'HKG',
    label: 'Hong Kong, Hong Kong International (HKG), Hong Kong'
  }
];

type AirplaneAutocompleteProps = Props<AirportOption, false, GroupBase<AirportOption>>;

const RawAirplaneAutocomplete: ForwardRefRenderFunction<
  SelectInstance<AirportOption, false, GroupBase<AirportOption>>,
  AirplaneAutocompleteProps
> = (props, ref) => {
  const chakraStyles: ChakraStylesConfig<AirportOption, false, GroupBase<AirportOption>> = {
    container: (provided) => ({
      ...provided,
      w: '100%'
    })
  };

  return (
    <Select<AirportOption, false, GroupBase<AirportOption>>
      options={options}
      useBasicStyles
      isMulti={false}
      chakraStyles={chakraStyles}
      {...props}
      ref={ref}
    />
  );
};

export const AirplaneAutocomplete = forwardRef(RawAirplaneAutocomplete);
