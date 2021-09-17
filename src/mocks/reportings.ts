import {
  Categories,
  GetFootprintsDetailsResponse,
  GetFootprintsResponse,
  GetOffsetDetailsResponse,
  GetOffsetResponse,
  GetReportStatusResponse,
  Months,
} from '../contracts';
import { setDate } from '../test/utils';

const reportingsFootprintsDetails_1: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-1': {
        transactions: [
          {
            id: '1',
            date: setDate(1),
            money: {
              amount: 42.53,
              currency: 'EUR',
            },
            description: 'LIDL',
            footprint: {
              co2: 36490.74,
              co2_ratio: 18.82,
            },
          },
          {
            id: '2',
            date: setDate(1),
            money: {
              amount: 12.72,
              currency: 'EUR',
            },
            description: 'REWE',
            footprint: {
              co2: 10913.76,
              co2_ratio: 5.63,
            },
          },
          {
            id: '3',
            date: setDate(1),
            money: {
              amount: 100,
              currency: 'EUR',
            },
            description: 'Good Morning Vietnam',
            footprint: {
              co2: 85800,
              co2_ratio: 44.24,
            },
          },
          {
            id: '4',
            date: setDate(1),
            money: {
              amount: 17,
              currency: 'EUR',
            },
            description: 'Youssef',
            footprint: {
              co2: 14586,
              co2_ratio: 7.52,
            },
          },
          {
            id: '5',
            date: setDate(1),
            money: {
              amount: 53.78,
              currency: 'EUR',
            },
            description: 'Edeka',
            footprint: {
              co2: 46143.24,
              co2_ratio: 23.79,
            },
          },
        ],
        footprint: {
          all: {
            co2: 193933.74,
            co2_ratio: 22.21,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: -50064.3,
            co2_ratio: -0.21,
          },
        },
      },
    },
    living: {
      '-1': {
        transactions: [
          {
            id: '6',
            date: setDate(1),
            money: {
              amount: 796,
              currency: 'EUR',
            },
            description: 'Herr Muller',
            footprint: {
              co2: 374000,
              co2_ratio: 93.35,
            },
          },
          {
            id: '7',
            date: setDate(1),
            money: {
              amount: 47,
              currency: 'EUR',
            },
            description: 'Berliner Wasserbetriebe',
            footprint: {
              co2: 26630,
              co2_ratio: 6.65,
            },
          },
        ],
        footprint: {
          all: {
            co2: 400630,
            co2_ratio: 45.89,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: -142949.11,
            co2_ratio: -0.26,
          },
        },
      },
    },
    travel: {
      '-1': {
        transactions: [
          {
            id: '8',
            date: setDate(1),
            money: {
              amount: 63.42,
              currency: 'EUR',
            },
            description: 'Berliner Verkehrsbetriebe',
            footprint: {
              co2: 8054.34,
              co2_ratio: 96.21,
            },
          },
          {
            id: '9',
            date: setDate(1),
            money: {
              amount: 2.5,
              currency: 'EUR',
            },
            description: 'Berliner Verkehrsbetriebe',
            footprint: {
              co2: 317,
              co2_ratio: 3.79,
            },
          },
        ],
        footprint: {
          all: {
            co2: 8371.34,
            co2_ratio: 0.96,
            extrapolated: true,
          },
          delta_previous_month: {
            co2: -125107.2,
            co2_ratio: -0.94,
          },
        },
      },
    },
    shopping: {
      '-1': {
        transactions: [
          {
            id: '10',
            date: setDate(1),
            money: {
              amount: 157.92,
              currency: 'EUR',
            },
            description: 'ASOS',
            footprint: {
              co2: 148760.64,
              co2_ratio: 66.66,
            },
          },
          {
            id: '11',
            date: setDate(1),
            money: {
              amount: 78.97,
              currency: 'EUR',
            },
            description: 'UNIQLO',
            footprint: {
              co2: 74389.74,
              co2_ratio: 33.34,
            },
          },
        ],
        footprint: {
          all: {
            co2: 223150.38,
            co2_ratio: 25.56,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: -288044.76,
            co2_ratio: -0.56,
          },
        },
      },
    },
    other: {
      '-1': {
        transactions: [
          {
            id: '12',
            date: setDate(1),
            money: {
              amount: 195,
              currency: 'EUR',
            },
            description: 'Frau Mienes',
            footprint: {
              co2: 0,
              co2_ratio: 0,
            },
          },
          {
            id: '13',
            date: setDate(1),
            money: {
              amount: 54,
              currency: 'EUR',
            },
            description: 'AKB bvbg',
            footprint: {
              co2: 47000,
              co2_ratio: 100,
            },
          },
        ],
        footprint: {
          all: {
            co2: 47000,
            co2_ratio: 5.38,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: -17000,
            co2_ratio: -0.27,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_2: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-2': {
        transactions: [
          {
            id: '14',
            date: setDate(2),
            money: {
              amount: 32.95,
              currency: 'EUR',
            },
            description: 'Burger Crew',
            footprint: {
              co2: 28271.1,
              co2_ratio: 11.59,
            },
          },
          {
            id: '15',
            date: setDate(2),
            money: {
              amount: 73.42,
              currency: 'EUR',
            },
            description: 'LIDL',
            footprint: {
              co2: 862994.36,
              co2_ratio: 25.82,
            },
          },
          {
            id: '16',
            date: setDate(2),
            money: {
              amount: 23.75,
              currency: 'EUR',
            },
            description: 'LIDL',
            footprint: {
              co2: 20377.5,
              co2_ratio: 8.35,
            },
          },
          {
            id: '17',
            date: setDate(2),
            money: {
              amount: 67.43,
              currency: 'EUR',
            },
            description: 'EDEKA',
            footprint: {
              co2: 57854.94,
              co2_ratio: 23.71,
            },
          },
          {
            id: '18',
            date: setDate(2),
            money: {
              amount: 38.91,
              currency: 'EUR',
            },
            description: 'LIDL',
            footprint: {
              co2: 33384.78,
              co2_ratio: 13.68,
            },
          },
          {
            id: '19',
            date: setDate(2),
            money: {
              amount: 47.92,
              currency: 'EUR',
            },
            description: 'BIO COMPANY',
            footprint: {
              co2: 41115.36,
              co2_ratio: 16.85,
            },
          },
        ],
        footprint: {
          all: {
            co2: 243998.04,
            co2_ratio: 16.31,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 86197.54,
            co2_ratio: 0.55,
          },
        },
      },
    },
    living: {
      '-2': {
        transactions: [
          {
            id: '20',
            date: setDate(2),
            money: {
              amount: 796,
              currency: 'EUR',
            },
            description: 'Herr Muller',
            footprint: {
              co2: 374000,
              co2_ratio: 68.8,
            },
          },
          {
            id: '21',
            date: setDate(2),
            money: {
              amount: 47,
              currency: 'EUR',
            },
            description: 'Berliner Wasserbetriebe',
            footprint: {
              co2: 26630,
              co2_ratio: 4.9,
            },
          },
          {
            id: '22',
            date: setDate(2),
            money: {
              amount: 293.53,
              currency: 'EUR',
            },
            description: 'Berliner Wasserbetriebe',
            footprint: {
              co2: 142949.11,
              co2_ratio: 26.3,
            },
          },
        ],
        footprint: {
          all: {
            co2: 543579.11,
            co2_ratio: 36.33,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 142949.11,
            co2_ratio: 0.36,
          },
        },
      },
    },
    travel: {
      '-2': {
        transactions: [
          {
            id: '23',
            date: setDate(2),
            money: {
              amount: 63.42,
              currency: 'EUR',
            },
            description: 'Berliner Verkehrsbetriebe',
            footprint: {
              co2: 8054.34,
              co2_ratio: 6.03,
            },
          },
          {
            id: '24',
            date: setDate(2),
            money: {
              amount: 2.5,
              currency: 'EUR',
            },
            description: 'Berliner Verkehrsbetriebe',
            footprint: {
              co2: 317,
              co2_ratio: 0.24,
            },
          },
          {
            id: '25',
            date: setDate(2),
            money: {
              amount: 69.12,
              currency: 'EUR',
            },
            description: 'SHELL',
            footprint: {
              co2: 125107.2,
              co2_ratio: 93.73,
            },
          },
        ],
        footprint: {
          all: {
            co2: 133478.54,
            co2_ratio: 8.92,
            extrapolated: true,
          },
          delta_previous_month: {
            co2: 125107.2,
            co2_ratio: 14.94,
          },
        },
      },
    },
    shopping: {
      '-2': {
        transactions: [
          {
            id: '26',
            date: setDate(2),
            money: {
              amount: 300.91,
              currency: 'EUR',
            },
            description: 'Decathlon',
            footprint: {
              co2: 283457.22,
              co2_ratio: 55.45,
            },
          },
          {
            id: '27',
            date: setDate(2),
            money: {
              amount: 27.95,
              currency: 'EUR',
            },
            description: 'Decathlon',
            footprint: {
              co2: 26328.9,
              co2_ratio: 5.15,
            },
          },
          {
            id: '28',
            date: setDate(2),
            money: {
              amount: 38.91,
              currency: 'EUR',
            },
            description: 'ASOS',
            footprint: {
              co2: 36653.22,
              co2_ratio: 7.17,
            },
          },
          {
            id: '29',
            date: setDate(2),
            money: {
              amount: 62.9,
              currency: 'EUR',
            },
            description: 'ARKET',
            footprint: {
              co2: 59251.8,
              co2_ratio: 11.59,
            },
          },
          {
            id: '30',
            date: setDate(2),
            money: {
              amount: 112,
              currency: 'EUR',
            },
            description: 'COS',
            footprint: {
              co2: 105504,
              co2_ratio: 20.64,
            },
          },
        ],
        footprint: {
          all: {
            co2: 511195.14,
            co2_ratio: 34.17,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 455683.08,
            co2_ratio: 8.21,
          },
        },
      },
    },
    other: {
      '-2': {
        transactions: [
          {
            id: '31',
            date: setDate(2),
            money: {
              amount: 27,
              currency: 'EUR',
            },
            description: 'AVA Club',
            footprint: {
              co2: 0,
              co2_ratio: 0,
            },
          },
          {
            id: '32',
            date: setDate(2),
            money: {
              amount: 82,
              currency: 'EUR',
            },
            description: 'DJR  GmbH',
            footprint: {
              co2: 64000,
              co2_ratio: 100,
            },
          },
        ],
        footprint: {
          all: {
            co2: 64000,
            co2_ratio: 4.28,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 52760,
            co2_ratio: 4.69,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_3: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-3': {
        transactions: [
          {
            id: '33',
            date: setDate(3),
            money: {
              amount: 76,
              currency: 'EUR',
            },
            description: 'LIDL',
            footprint: {
              co2: 36490.74,
              co2_ratio: 23.12,
            },
          },
          {
            id: '34',
            date: setDate(3),
            money: {
              amount: 27.45,
              currency: 'EUR',
            },
            description: 'Bio Company',
            footprint: {
              co2: 10913.76,
              co2_ratio: 6.92,
            },
          },
          {
            id: '35',
            date: setDate(3),
            money: {
              amount: 100,
              currency: 'EUR',
            },
            description: 'Alnatura',
            footprint: {
              co2: 18960,
              co2_ratio: 12.02,
            },
          },
          {
            id: '36',
            date: setDate(3),
            money: {
              amount: 17,
              currency: 'EUR',
            },
            description: 'Alnatura',
            footprint: {
              co2: 14586,
              co2_ratio: 9.24,
            },
          },
          {
            id: '37',
            date: setDate(3),
            money: {
              amount: 53.78,
              currency: 'EUR',
            },
            description: 'LIDL',
            footprint: {
              co2: 76850,
              co2_ratio: 48.7,
            },
          },
        ],
        footprint: {
          all: {
            co2: 157800.5,
            co2_ratio: 24.91,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 157800.5,
            co2_ratio: 100,
          },
        },
      },
    },
    living: {
      '-3': {
        transactions: [
          {
            id: '38',
            date: setDate(3),
            money: {
              amount: 796,
              currency: 'EUR',
            },
            description: 'Herr Muller',
            footprint: {
              co2: 374000,
              co2_ratio: 93.35,
            },
          },
          {
            id: '39',
            date: setDate(3),
            money: {
              amount: 47,
              currency: 'EUR',
            },
            description: 'Berliner Wasserbetriebe',
            footprint: {
              co2: 26630,
              co2_ratio: 6.65,
            },
          },
        ],
        footprint: {
          all: {
            co2: 400630,
            co2_ratio: 63.24,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 400630,
            co2_ratio: 100,
          },
        },
      },
    },
    travel: {
      '-3': {
        transactions: [
          {
            id: '40',
            date: setDate(3),
            money: {
              amount: 63.42,
              currency: 'EUR',
            },
            description: 'Berliner Verkehrsbetriebe',
            footprint: {
              co2: 8054.34,
              co2_ratio: 96.21,
            },
          },
          {
            id: '41',
            date: setDate(3),
            money: {
              amount: 2.5,
              currency: 'EUR',
            },
            description: 'Berliner Verkehrsbetriebe',
            footprint: {
              co2: 317,
              co2_ratio: 3.79,
            },
          },
        ],
        footprint: {
          all: {
            co2: 8371.34,
            co2_ratio: 1.32,
            extrapolated: true,
          },
          delta_previous_month: {
            co2: 8371.34,
            co2_ratio: 100,
          },
        },
      },
    },
    shopping: {
      '-3': {
        transactions: [
          {
            id: '42',
            date: setDate(3),
            money: {
              amount: 18.93,
              currency: 'EUR',
            },
            description: 'ASOS',
            footprint: {
              co2: 17832.06,
              co2_ratio: 32.12,
            },
          },
          {
            id: '43',
            date: setDate(3),
            money: {
              amount: 40,
              currency: 'EUR',
            },
            description: 'ASOS',
            footprint: {
              co2: 37680,
              co2_ratio: 67.88,
            },
          },
        ],
        footprint: {
          all: {
            co2: 55512.06,
            co2_ratio: 8.76,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 55512.06,
            co2_ratio: 100,
          },
        },
      },
    },
    other: {
      '-3': {
        transactions: [
          {
            id: '44',
            date: setDate(3),
            money: {
              amount: 23,
              currency: 'EUR',
            },
            description: 'Sophie',
            footprint: {
              co2: 0,
              co2_ratio: 0,
            },
          },
          {
            id: '45',
            date: setDate(3),
            money: {
              amount: 17,
              currency: 'EUR',
            },
            description: 'zozo GmbH',
            footprint: {
              co2: 11240,
              co2_ratio: 100,
            },
          },
        ],
        footprint: {
          all: {
            co2: 11240,
            co2_ratio: 1.77,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 11240,
            co2_ratio: 100,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_4: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-4': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    living: {
      '-4': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    travel: {
      '-4': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: true,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    shopping: {
      '-4': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    other: {
      '-4': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_5: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-5': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    living: {
      '-5': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    travel: {
      '-5': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: true,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    shopping: {
      '-5': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    other: {
      '-5': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_6: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-6': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    living: {
      '-6': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    travel: {
      '-6': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: true,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    shopping: {
      '-6': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    other: {
      '-6': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_7: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-7': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    living: {
      '-7': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    travel: {
      '-7': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: true,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    shopping: {
      '-7': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    other: {
      '-7': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_8: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-8': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    living: {
      '-8': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    travel: {
      '-8': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: true,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    shopping: {
      '-8': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    other: {
      '-8': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_9: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-9': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    living: {
      '-9': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    travel: {
      '-9': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: true,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    shopping: {
      '-9': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    other: {
      '-9': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_10: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-10': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    living: {
      '-10': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    travel: {
      '-10': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    shopping: {
      '-10': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    other: {
      '-10': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_11: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-11': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    living: {
      '-11': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    travel: {
      '-11': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    shopping: {
      '-11': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    other: {
      '-11': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetails_12: GetFootprintsDetailsResponse = {
  grouped_by_category_month: {
    food: {
      '-12': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    living: {
      '-12': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    travel: {
      '-12': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    shopping: {
      '-12': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
    other: {
      '-12': {
        transactions: [],
        footprint: {
          all: {
            co2: 0,
            co2_ratio: 0,
            extrapolated: false,
          },
          delta_previous_month: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
  },
};

const reportingsFootprintsDetailsPerMonth = {
  '-1': reportingsFootprintsDetails_1,
  '-2': reportingsFootprintsDetails_2,
  '-3': reportingsFootprintsDetails_3,
  '-4': reportingsFootprintsDetails_4,
  '-5': reportingsFootprintsDetails_5,
  '-6': reportingsFootprintsDetails_6,
  '-7': reportingsFootprintsDetails_7,
  '-8': reportingsFootprintsDetails_8,
  '-9': reportingsFootprintsDetails_9,
  '-10': reportingsFootprintsDetails_10,
  '-11': reportingsFootprintsDetails_11,
  '-12': reportingsFootprintsDetails_12,
};

export const reportingsFootprints: GetFootprintsResponse = {
  footprints: {
    all: {
      co2: 3002890.19,
      co2_ratio: 100,
    },
    grouped_by_category: {
      food: {
        co2: 595732.28,
        co2_ratio: 19.84,
        extrapolated: false,
      },
      living: {
        co2: 1344839.11,
        co2_ratio: 44.78,
        extrapolated: false,
      },
      travel: {
        co2: 150221.22,
        co2_ratio: 5.0,
        extrapolated: true,
      },
      shopping: {
        co2: 789857.58,
        co2_ratio: 26.3,
        extrapolated: false,
      },
      other: {
        co2: 122240,
        co2_ratio: 4.07,
        extrapolated: false,
      },
    },
    grouped_by_month: {
      '-1': {
        all: {
          co2: 873085.46,
          co2_ratio: 100,
        },
        grouped_by_category: {
          food: {
            co2: 193933.74,
            co2_ratio: 22.21,
          },
          living: {
            co2: 400630,
            co2_ratio: 45.89,
          },
          travel: {
            co2: 8371.34,
            co2_ratio: 0.96,
          },
          shopping: {
            co2: 223150.38,
            co2_ratio: 25.56,
          },
          other: {
            co2: 47000,
            co2_ratio: 5.38,
          },
        },
      },
      '-2': {
        all: {
          co2: 1496250.83,
          co2_ratio: 100,
        },
        grouped_by_category: {
          food: {
            co2: 243998.04,
            co2_ratio: 16.31,
          },
          living: {
            co2: 543579.11,
            co2_ratio: 36.33,
          },
          travel: {
            co2: 133478.54,
            co2_ratio: 8.92,
          },
          shopping: {
            co2: 511195.14,
            co2_ratio: 34.17,
          },
          other: {
            co2: 64000,
            co2_ratio: 4.28,
          },
        },
      },
      '-3': {
        all: {
          co2: 633553.9,
          co2_ratio: 100,
        },
        grouped_by_category: {
          food: {
            co2: 157800.5,
            co2_ratio: 24.91,
          },
          living: {
            co2: 400630,
            co2_ratio: 63.24,
          },
          travel: {
            co2: 8371.34,
            co2_ratio: 1.32,
          },
          shopping: {
            co2: 55512.06,
            co2_ratio: 8.76,
          },
          other: {
            co2: 11240,
            co2_ratio: 1.77,
          },
        },
      },
      '-4': {
        all: {
          co2: 0,
          co2_ratio: 0,
        },
        grouped_by_category: {
          food: {
            co2: 0,
            co2_ratio: 0,
          },
          living: {
            co2: 0,
            co2_ratio: 0,
          },
          travel: {
            co2: 0,
            co2_ratio: 0,
          },
          shopping: {
            co2: 0,
            co2_ratio: 0,
          },
          other: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
      '-5': {
        all: {
          co2: 0,
          co2_ratio: 0,
        },
        grouped_by_category: {
          food: {
            co2: 0,
            co2_ratio: 0,
          },
          living: {
            co2: 0,
            co2_ratio: 0,
          },
          travel: {
            co2: 0,
            co2_ratio: 0,
          },
          shopping: {
            co2: 0,
            co2_ratio: 0,
          },
          other: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
      '-6': {
        all: {
          co2: 0,
          co2_ratio: 0,
        },
        grouped_by_category: {
          food: {
            co2: 0,
            co2_ratio: 0,
          },
          living: {
            co2: 0,
            co2_ratio: 0,
          },
          travel: {
            co2: 0,
            co2_ratio: 0,
          },
          shopping: {
            co2: 0,
            co2_ratio: 0,
          },
          other: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
      '-7': {
        all: {
          co2: 0,
          co2_ratio: 0,
        },
        grouped_by_category: {
          food: {
            co2: 0,
            co2_ratio: 0,
          },
          living: {
            co2: 0,
            co2_ratio: 0,
          },
          travel: {
            co2: 0,
            co2_ratio: 0,
          },
          shopping: {
            co2: 0,
            co2_ratio: 0,
          },
          other: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
      '-8': {
        all: {
          co2: 0,
          co2_ratio: 0,
        },
        grouped_by_category: {
          food: {
            co2: 0,
            co2_ratio: 0,
          },
          living: {
            co2: 0,
            co2_ratio: 0,
          },
          travel: {
            co2: 0,
            co2_ratio: 0,
          },
          shopping: {
            co2: 0,
            co2_ratio: 0,
          },
          other: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
      '-9': {
        all: {
          co2: 0,
          co2_ratio: 0,
        },
        grouped_by_category: {
          food: {
            co2: 0,
            co2_ratio: 0,
          },
          living: {
            co2: 0,
            co2_ratio: 0,
          },
          travel: {
            co2: 0,
            co2_ratio: 0,
          },
          shopping: {
            co2: 0,
            co2_ratio: 0,
          },
          other: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
      '-10': {
        all: {
          co2: 0,
          co2_ratio: 0,
        },
        grouped_by_category: {
          food: {
            co2: 0,
            co2_ratio: 0,
          },
          living: {
            co2: 0,
            co2_ratio: 0,
          },
          travel: {
            co2: 0,
            co2_ratio: 0,
          },
          shopping: {
            co2: 0,
            co2_ratio: 0,
          },
          other: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
      '-11': {
        all: {
          co2: 0,
          co2_ratio: 0,
        },
        grouped_by_category: {
          food: {
            co2: 0,
            co2_ratio: 0,
          },
          living: {
            co2: 0,
            co2_ratio: 0,
          },
          travel: {
            co2: 0,
            co2_ratio: 0,
          },
          shopping: {
            co2: 0,
            co2_ratio: 0,
          },
          other: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
      '-12': {
        all: {
          co2: 0,
          co2_ratio: 0,
        },
        grouped_by_category: {
          food: {
            co2: 0,
            co2_ratio: 0,
          },
          living: {
            co2: 0,
            co2_ratio: 0,
          },
          travel: {
            co2: 0,
            co2_ratio: 0,
          },
          shopping: {
            co2: 0,
            co2_ratio: 0,
          },
          other: {
            co2: 0,
            co2_ratio: 0,
          },
        },
      },
    },
  },
  comparables: {
    food: {
      trees_to_plant: 480,
      packages_delivered: 280,
      cows_annually: 13,
      dishwasher_runs: 2484,
    },
    living: {
      trees_to_plant: 480,
      packages_delivered: 280,
      cows_annually: 13,
      dishwasher_runs: 2484,
    },
    travel: {
      trees_to_plant: 480,
      packages_delivered: 280,
      cows_annually: 13,
      dishwasher_runs: 2484,
    },
    shopping: {
      trees_to_plant: 480,
      packages_delivered: 280,
      cows_annually: 13,
      dishwasher_runs: 2484,
    },
    other: {
      trees_to_plant: 480,
      packages_delivered: 280,
      cows_annually: 13,
      dishwasher_runs: 2484,
    },
  },
  peers: {
    co2_annually: {
      co2: 1002890,
      co2_ratio: 100,
    },
  },
};

export const createReportingsFootprintsDetailsPerMonth = (month: Months): GetFootprintsDetailsResponse =>
  reportingsFootprintsDetailsPerMonth[month];

export const createReportingsFootprintsDetailsPerMonthPerCategory = (
  month: Months,
  categories: Categories[]
): GetFootprintsDetailsResponse => ({
  ...createReportingsFootprintsDetailsPerMonth(month),
  grouped_by_category_month: {
    ...categories.reduce(
      (acc, category) => ({
        ...acc,
        [category]: createReportingsFootprintsDetailsPerMonth(month).grouped_by_category_month[category],
      }),
      {}
    ),
  },
});

export const reportStatusCompleted: GetReportStatusResponse = {
  status: 'completed',
  status_description: 'Status completed',
};

export const reportStatusPending: GetReportStatusResponse = {
  status: 'pending',
  status_description: 'Status pending',
};

export const reportStatusError: GetReportStatusResponse = {
  status: 'error',
  status_description: 'Error status',
};

const offsetsGroupedByMonth = {
  '-1': 45600,
  '-2': 85600,
  '-3': 880045,
  '-4': 10000,
  '-5': 11500,
  '-6': 13000,
  '-7': 325000,
  '-8': 15670,
  '-9': 14500,
  '-10': 300034,
  '-11': 123400,
  '-12': 0,
};
const offsetsDetails_1 = {
  '-1': {
    transactions: [
      {
        id: '1',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Offsetting',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 10000,
      },
      {
        id: '2',
        date: '2021-07-20',
        money: {
          amount: 345.45,
          currency: 'EUR',
        },
        name: 'Second Offsetting',
        description: 'by donation for Sidra wind farm project, UPC Renewables',
        offset: 14000,
      },
      {
        id: '5',
        date: '2021-07-08',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Fifth Offsetting',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 4890,
      },
      {
        id: '3',
        date: '2021-07-14',
        money: {
          amount: 450.21,
          currency: 'EUR',
        },
        name: 'Third Offsetting',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 23450,
      },
      {
        id: '4',
        date: '2021-07-11',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Fourth Offsetting',
        description: 'by donation for EcoFood, Gold Standard',
        offset: 1234,
      },
    ],
    offset: 45600,
  },
};
const offsetsDetails_2 = {
  '-2': {
    transactions: [
      {
        id: 'example-transaction-id',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Compensation',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 85600,
      },
    ],
    offset: 85600,
  },
};
const offsetsDetails_3 = {
  '-3': {
    transactions: [],
    offset: 48.0002433,
  },
};
const offsetsDetails_4 = {
  '-4': {
    transactions: [
      {
        id: 'example-transaction-id',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Compensation',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 48.0002433,
      },
    ],
    offset: 48.0002433,
  },
};
const offsetsDetails_5 = {
  '-5': {
    transactions: [
      {
        id: 'example-transaction-id',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Compensation',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 48.0002433,
      },
    ],
    offset: 48.0002433,
  },
};
const offsetsDetails_6 = {
  '-6': {
    transactions: [
      {
        id: 'example-transaction-id',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Compensation',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 48.0002433,
      },
    ],
    offset: 48.0002433,
  },
};
const offsetsDetails_7 = {
  '-7': {
    transactions: [
      {
        id: 'example-transaction-id',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Compensation',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 48.0002433,
      },
    ],
    offset: 48.0002433,
  },
};
const offsetsDetails_8 = {
  '-8': {
    transactions: [
      {
        id: 'example-transaction-id',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Compensation',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 48.0002433,
      },
    ],
    offset: 48.0002433,
  },
};
const offsetsDetails_9 = {
  '-9': {
    transactions: [
      {
        id: 'example-transaction-id',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Compensation',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 48.0002433,
      },
    ],
    offset: 48.0002433,
  },
};
const offsetsDetails_10 = {
  '-10': {
    transactions: [
      {
        id: 'example-transaction-id',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Compensation',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 48.0002433,
      },
    ],
    offset: 48.0002433,
  },
};
const offsetsDetails_11 = {
  '-11': {
    transactions: [
      {
        id: 'example-transaction-id',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Compensation',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 48.0002433,
      },
    ],
    offset: 48.0002433,
  },
};
const offsetsDetails_12 = {
  '-12': {
    transactions: [
      {
        id: 'example-transaction-id',
        date: '2021-07-28',
        money: {
          amount: 123.45,
          currency: 'EUR',
        },
        name: 'Compensation',
        description: "by donation for Greentech's Emissions Reduction, Gold Standard",
        offset: 48.0002433,
      },
    ],
    offset: 48.0002433,
  },
};
const offsetsDetailsAnnually = {
  ...offsetsDetails_12,
  ...offsetsDetails_11,
  ...offsetsDetails_10,
  ...offsetsDetails_9,
  ...offsetsDetails_8,
  ...offsetsDetails_7,
  ...offsetsDetails_6,
  ...offsetsDetails_5,
  ...offsetsDetails_4,
  ...offsetsDetails_3,
  ...offsetsDetails_2,
  ...offsetsDetails_1,
};

export const createMockedOffsets = (months: Months[]): GetOffsetResponse => ({
  offsets: {
    all: 1824349,
    grouped_by_month: {
      ...months.reduce(
        (acc, month) => ({
          ...acc,
          [month]: offsetsGroupedByMonth[month],
        }),
        {}
      ),
    },
  },
});

export const createMockedOffsetsDetails = (months: Months[]): GetOffsetDetailsResponse => ({
  grouped_by_month: {
    ...months.reduce(
      (acc, month) => ({
        ...acc,
        [month]: offsetsDetailsAnnually[month],
      }),
      {}
    ),
  },
});

export const offsetsDetailsEmptyTransactions_1: GetOffsetDetailsResponse = {
  grouped_by_month: {
    '-1': {
      transactions: [],
      offset: 0,
    },
  },
};
