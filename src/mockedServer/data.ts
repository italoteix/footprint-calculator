interface AirportData {
  code: string;
  lat: string;
  longitude: string;
}

export const airports: Record<string, AirportData> = {
  DOH: {
    code: 'DOH',
    lat: '25.261125',
    longitude: '51.565056'
  },
  HND: {
    code: 'HND',
    lat: '35.552258',
    longitude: '139.779694'
  },
  SIN: {
    code: 'SIN',
    lat: '1.350189',
    longitude: '103.994433'
  },
  ICN: {
    code: 'ICN',
    lat: '37.469075',
    longitude: '126.450517'
  },
  NRT: {
    code: 'NRT',
    lat: '35.764722',
    longitude: '140.386389'
  },
  MUC: {
    code: 'MUC',
    lat: '48.353783',
    longitude: '11.786086'
  },
  ZRH: {
    code: 'ZRH',
    lat: '47.464722',
    longitude: '8.549167'
  },
  LHR: {
    code: 'LHR',
    lat: '51.477500',
    longitude: '-0.461389'
  },
  KIX: {
    code: 'KIX',
    lat: '34.427306',
    longitude: '135.244072'
  },
  HKG: {
    code: 'HKG',
    lat: '22.308889',
    longitude: '113.914722'
  }
};
