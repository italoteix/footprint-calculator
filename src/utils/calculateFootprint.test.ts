import { TravelType } from '../model';
import { calculateFootprint } from './calculateFootprint';

describe('useCalculateFootprint', () => {
  test('calculateFootprint return correct value for one way travel', () => {
    expect(
      calculateFootprint({ distance: '1000', numberOfTravelers: 2, type: TravelType.ONE_WAY })
    ).toBe('570.00');
  });

  test('calculateFootprint return correct value for return trip travel', () => {
    expect(
      calculateFootprint({ distance: '1000', numberOfTravelers: 3, type: TravelType.RETURN_TRIP })
    ).toBe('1710.00');
  });
});
