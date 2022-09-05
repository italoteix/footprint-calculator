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

export function getDistance(code1: string, code2: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const airport1 = airports[code1];
      const airport2 = airports[code2];

      if (!airport1 || !airport2) {
        reject(new Error('Airport not found'));
        return;
      }

      resolve(
        calcCrow(
          Number(airport1.lat),
          Number(airport1.longitude),
          Number(airport2.lat),
          Number(airport2.lat)
        )
      );
    }, 250);
  });
}
