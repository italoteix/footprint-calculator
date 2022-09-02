import { TravelType } from '../model';

interface CalculateFootprintArgs {
  distance: number;
  numberOfTravelers: number;
  type: TravelType;
}

const C02_G_PER_PASSENGER_PER_KM = 285;
const GRAMS_TO_KG = 1000;

const travelTypeRatio: Record<TravelType, number> = {
  ONE_WAY: 1,
  RETURN_TRIP: 2
};

export const calculateFootprint = ({
  distance,
  numberOfTravelers,
  type
}: CalculateFootprintArgs) => {
  return (
    (distance * numberOfTravelers * travelTypeRatio[type] * C02_G_PER_PASSENGER_PER_KM) /
    GRAMS_TO_KG
  ).toFixed(2);
};
