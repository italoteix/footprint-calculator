import { airports } from './data';
// Converts numeric degrees to radians
function toRad(Value: number) {
  return (Value * Math.PI) / 180;
}

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const lat1InRad = toRad(lat1);
  const lat2InRad = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1InRad) * Math.cos(lat2InRad);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d.toFixed(2);
}

type IATA = string;

export function getDistance(from: IATA, to: IATA): Promise<string> {
  return new Promise((resolve, reject) => {
    // small timeout to simulate network latency, for demo purposes
    setTimeout(() => {
      const originAirport = airports[from];
      const destinationAirport = airports[to];

      if (!originAirport || !destinationAirport) {
        reject(new Error('Airport not found'));
        return;
      }

      resolve(
        calcCrow(
          Number(originAirport.lat),
          Number(originAirport.longitude),
          Number(destinationAirport.lat),
          Number(destinationAirport.longitude)
        )
      );
    }, 250);
  });
}
