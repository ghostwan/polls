import { Election } from '../types'

// Couleurs par parti
const COLORS: Record<string, string> = {
  LR: '#0066CC',
  PS: '#FF6699',
  FN: '#0D2C54',
  RN: '#0D2C54',
  LREM: '#FFD700',
  RE: '#FFD700',
  LFI: '#CC0000',
  EELV: '#00A86B',
  PCF: '#DD0000',
  DLR: '#8B4513',
  NPA: '#B22222',
  LO: '#8B0000',
  MoDem: '#FF8C00',
  UDI: '#00BFFF',
  REC: '#003366',
  SOL: '#FF4500',
  DVD: '#87CEEB',
  DVG: '#FFB6C1',
}

export const elections: Election[] = [
  // ============================================================
  // PRESIDENTIELLE 2022
  // ============================================================
  {
    id: 'pres-2022',
    name: 'Présidentielle 2022',
    type: 'presidentielle',
    year: 2022,
    rounds: [
      {
        round: 1,
        date: '2022-04-10',
        candidates: [
          { id: 'macron-2022', name: 'Emmanuel Macron', party: 'LREM', color: COLORS.LREM },
          { id: 'lepen-2022', name: 'Marine Le Pen', party: 'RN', color: COLORS.RN },
          { id: 'melenchon-2022', name: 'Jean-Luc Mélenchon', party: 'LFI', color: COLORS.LFI },
          { id: 'zemmour-2022', name: 'Éric Zemmour', party: 'REC', color: COLORS.REC },
          { id: 'pecresse-2022', name: 'Valérie Pécresse', party: 'LR', color: COLORS.LR },
          { id: 'jadot-2022', name: 'Yannick Jadot', party: 'EELV', color: COLORS.EELV },
          { id: 'lassalle-2022', name: 'Jean Lassalle', party: 'RES', color: '#8FBC8F' },
          { id: 'roussel-2022', name: 'Fabien Roussel', party: 'PCF', color: COLORS.PCF },
          { id: 'dupont-2022', name: 'Nicolas Dupont-Aignan', party: 'DLR', color: COLORS.DLR },
          { id: 'hidalgo-2022', name: 'Anne Hidalgo', party: 'PS', color: COLORS.PS },
          { id: 'poutou-2022', name: 'Philippe Poutou', party: 'NPA', color: COLORS.NPA },
          { id: 'arthaud-2022', name: 'Nathalie Arthaud', party: 'LO', color: COLORS.LO },
        ],
        results: [
          { candidateId: 'macron-2022', score: 27.85 },
          { candidateId: 'lepen-2022', score: 23.15 },
          { candidateId: 'melenchon-2022', score: 21.95 },
          { candidateId: 'zemmour-2022', score: 7.07 },
          { candidateId: 'pecresse-2022', score: 4.78 },
          { candidateId: 'jadot-2022', score: 4.63 },
          { candidateId: 'lassalle-2022', score: 3.13 },
          { candidateId: 'roussel-2022', score: 2.28 },
          { candidateId: 'dupont-2022', score: 2.06 },
          { candidateId: 'hidalgo-2022', score: 1.75 },
          { candidateId: 'poutou-2022', score: 0.77 },
          { candidateId: 'arthaud-2022', score: 0.56 },
        ],
        polls: [
          {
            date: '2021-10-01',
            pollster: 'Harris Interactive',
            sampleSize: 1408,
            scores: {
              'macron-2022': 25, 'lepen-2022': 17, 'melenchon-2022': 10,
              'zemmour-2022': 13, 'pecresse-2022': 11, 'jadot-2022': 7,
              'lassalle-2022': 1, 'roussel-2022': 3, 'dupont-2022': 2,
              'hidalgo-2022': 5, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2021-11-15',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: {
              'macron-2022': 24, 'lepen-2022': 18, 'melenchon-2022': 9,
              'zemmour-2022': 17, 'pecresse-2022': 10, 'jadot-2022': 6,
              'lassalle-2022': 1, 'roussel-2022': 2.5, 'dupont-2022': 2,
              'hidalgo-2022': 4, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2021-12-15',
            pollster: 'Ipsos',
            sampleSize: 1600,
            scores: {
              'macron-2022': 24, 'lepen-2022': 16, 'melenchon-2022': 9,
              'zemmour-2022': 14, 'pecresse-2022': 16, 'jadot-2022': 5,
              'lassalle-2022': 1, 'roussel-2022': 3, 'dupont-2022': 2,
              'hidalgo-2022': 3.5, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2022-01-10',
            pollster: 'Harris Interactive',
            sampleSize: 1505,
            scores: {
              'macron-2022': 25, 'lepen-2022': 16.5, 'melenchon-2022': 10,
              'zemmour-2022': 13, 'pecresse-2022': 15, 'jadot-2022': 5,
              'lassalle-2022': 1.5, 'roussel-2022': 3, 'dupont-2022': 2,
              'hidalgo-2022': 3, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2022-02-01',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: {
              'macron-2022': 25, 'lepen-2022': 17, 'melenchon-2022': 10.5,
              'zemmour-2022': 14, 'pecresse-2022': 14.5, 'jadot-2022': 5,
              'lassalle-2022': 2, 'roussel-2022': 3, 'dupont-2022': 2,
              'hidalgo-2022': 2.5, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2022-02-15',
            pollster: 'OpinionWay',
            sampleSize: 1060,
            scores: {
              'macron-2022': 25, 'lepen-2022': 17.5, 'melenchon-2022': 11.5,
              'zemmour-2022': 14, 'pecresse-2022': 13, 'jadot-2022': 5,
              'lassalle-2022': 2, 'roussel-2022': 3.5, 'dupont-2022': 2,
              'hidalgo-2022': 2, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2022-03-01',
            pollster: 'Elabe',
            sampleSize: 1505,
            scores: {
              'macron-2022': 26, 'lepen-2022': 18, 'melenchon-2022': 12,
              'zemmour-2022': 13, 'pecresse-2022': 11, 'jadot-2022': 5,
              'lassalle-2022': 2.5, 'roussel-2022': 3, 'dupont-2022': 2,
              'hidalgo-2022': 2, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2022-03-10',
            pollster: 'Ifop',
            sampleSize: 1460,
            scores: {
              'macron-2022': 28, 'lepen-2022': 19, 'melenchon-2022': 13,
              'zemmour-2022': 11, 'pecresse-2022': 10, 'jadot-2022': 5,
              'lassalle-2022': 2.5, 'roussel-2022': 3, 'dupont-2022': 2,
              'hidalgo-2022': 2, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2022-03-18',
            pollster: 'Harris Interactive',
            sampleSize: 1605,
            scores: {
              'macron-2022': 29, 'lepen-2022': 20, 'melenchon-2022': 14,
              'zemmour-2022': 10, 'pecresse-2022': 9, 'jadot-2022': 5,
              'lassalle-2022': 3, 'roussel-2022': 2.5, 'dupont-2022': 2,
              'hidalgo-2022': 1.5, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2022-03-25',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'macron-2022': 27.5, 'lepen-2022': 21, 'melenchon-2022': 16,
              'zemmour-2022': 9, 'pecresse-2022': 8, 'jadot-2022': 5,
              'lassalle-2022': 3, 'roussel-2022': 2.5, 'dupont-2022': 2,
              'hidalgo-2022': 1.5, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2022-04-01',
            pollster: 'Ifop',
            sampleSize: 1498,
            scores: {
              'macron-2022': 27, 'lepen-2022': 22, 'melenchon-2022': 17,
              'zemmour-2022': 8.5, 'pecresse-2022': 7.5, 'jadot-2022': 4.5,
              'lassalle-2022': 3, 'roussel-2022': 2.5, 'dupont-2022': 2,
              'hidalgo-2022': 1.5, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2022-04-05',
            pollster: 'Elabe',
            sampleSize: 1504,
            scores: {
              'macron-2022': 26.5, 'lepen-2022': 23, 'melenchon-2022': 18,
              'zemmour-2022': 8, 'pecresse-2022': 7, 'jadot-2022': 4.5,
              'lassalle-2022': 3, 'roussel-2022': 2.5, 'dupont-2022': 2,
              'hidalgo-2022': 1.5, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
          {
            date: '2022-04-08',
            pollster: 'Ipsos',
            sampleSize: 3007,
            scores: {
              'macron-2022': 26, 'lepen-2022': 24, 'melenchon-2022': 19,
              'zemmour-2022': 7, 'pecresse-2022': 6, 'jadot-2022': 4.5,
              'lassalle-2022': 3, 'roussel-2022': 2.5, 'dupont-2022': 2,
              'hidalgo-2022': 2, 'poutou-2022': 1, 'arthaud-2022': 0.5,
            },
          },
        ],
      },
      {
        round: 2,
        date: '2022-04-24',
        candidates: [
          { id: 'macron-2022', name: 'Emmanuel Macron', party: 'LREM', color: COLORS.LREM },
          { id: 'lepen-2022', name: 'Marine Le Pen', party: 'RN', color: COLORS.RN },
        ],
        results: [
          { candidateId: 'macron-2022', score: 58.55 },
          { candidateId: 'lepen-2022', score: 41.45 },
        ],
        polls: [
          {
            date: '2022-04-11',
            pollster: 'Ifop',
            sampleSize: 1470,
            scores: { 'macron-2022': 54, 'lepen-2022': 46 },
          },
          {
            date: '2022-04-12',
            pollster: 'Harris Interactive',
            sampleSize: 1407,
            scores: { 'macron-2022': 54, 'lepen-2022': 46 },
          },
          {
            date: '2022-04-14',
            pollster: 'Elabe',
            sampleSize: 1504,
            scores: { 'macron-2022': 55.5, 'lepen-2022': 44.5 },
          },
          {
            date: '2022-04-18',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: { 'macron-2022': 55.5, 'lepen-2022': 44.5 },
          },
          {
            date: '2022-04-19',
            pollster: 'Ifop',
            sampleSize: 1494,
            scores: { 'macron-2022': 55, 'lepen-2022': 45 },
          },
          {
            date: '2022-04-20',
            pollster: 'OpinionWay',
            sampleSize: 1050,
            scores: { 'macron-2022': 56, 'lepen-2022': 44 },
          },
          {
            date: '2022-04-22',
            pollster: 'Ifop',
            sampleSize: 2093,
            scores: { 'macron-2022': 57, 'lepen-2022': 43 },
          },
        ],
      },
    ],
  },

  // ============================================================
  // PRESIDENTIELLE 2017
  // ============================================================
  {
    id: 'pres-2017',
    name: 'Présidentielle 2017',
    type: 'presidentielle',
    year: 2017,
    rounds: [
      {
        round: 1,
        date: '2017-04-23',
        candidates: [
          { id: 'macron-2017', name: 'Emmanuel Macron', party: 'EM', color: COLORS.LREM },
          { id: 'lepen-2017', name: 'Marine Le Pen', party: 'FN', color: COLORS.FN },
          { id: 'fillon-2017', name: 'François Fillon', party: 'LR', color: COLORS.LR },
          { id: 'melenchon-2017', name: 'Jean-Luc Mélenchon', party: 'LFI', color: COLORS.LFI },
          { id: 'hamon-2017', name: 'Benoît Hamon', party: 'PS', color: COLORS.PS },
          { id: 'dupont-2017', name: 'Nicolas Dupont-Aignan', party: 'DLR', color: COLORS.DLR },
          { id: 'lassalle-2017', name: 'Jean Lassalle', party: 'RES', color: '#8FBC8F' },
          { id: 'poutou-2017', name: 'Philippe Poutou', party: 'NPA', color: COLORS.NPA },
          { id: 'arthaud-2017', name: 'Nathalie Arthaud', party: 'LO', color: COLORS.LO },
          { id: 'asselineau-2017', name: 'François Asselineau', party: 'UPR', color: '#4682B4' },
          { id: 'cheminade-2017', name: 'Jacques Cheminade', party: 'S&P', color: '#9370DB' },
        ],
        results: [
          { candidateId: 'macron-2017', score: 24.01 },
          { candidateId: 'lepen-2017', score: 21.30 },
          { candidateId: 'fillon-2017', score: 20.01 },
          { candidateId: 'melenchon-2017', score: 19.58 },
          { candidateId: 'hamon-2017', score: 6.36 },
          { candidateId: 'dupont-2017', score: 4.70 },
          { candidateId: 'lassalle-2017', score: 1.21 },
          { candidateId: 'poutou-2017', score: 1.09 },
          { candidateId: 'arthaud-2017', score: 0.64 },
          { candidateId: 'asselineau-2017', score: 0.92 },
          { candidateId: 'cheminade-2017', score: 0.18 },
        ],
        polls: [
          {
            date: '2017-01-15',
            pollster: 'Ifop',
            sampleSize: 1404,
            scores: {
              'macron-2017': 22, 'lepen-2017': 26, 'fillon-2017': 21,
              'melenchon-2017': 11, 'hamon-2017': 13, 'dupont-2017': 3,
              'lassalle-2017': 0.5, 'poutou-2017': 1, 'arthaud-2017': 0.5,
              'asselineau-2017': 0.5, 'cheminade-2017': 0,
            },
          },
          {
            date: '2017-02-01',
            pollster: 'Harris Interactive',
            sampleSize: 1500,
            scores: {
              'macron-2017': 20, 'lepen-2017': 25, 'fillon-2017': 19,
              'melenchon-2017': 12, 'hamon-2017': 16, 'dupont-2017': 3,
              'lassalle-2017': 0.5, 'poutou-2017': 1, 'arthaud-2017': 0.5,
              'asselineau-2017': 0.5, 'cheminade-2017': 0,
            },
          },
          {
            date: '2017-02-15',
            pollster: 'Ipsos',
            sampleSize: 1503,
            scores: {
              'macron-2017': 23, 'lepen-2017': 26, 'fillon-2017': 19,
              'melenchon-2017': 11, 'hamon-2017': 14, 'dupont-2017': 3,
              'lassalle-2017': 0.5, 'poutou-2017': 1, 'arthaud-2017': 0.5,
              'asselineau-2017': 0.5, 'cheminade-2017': 0,
            },
          },
          {
            date: '2017-03-01',
            pollster: 'BVA',
            sampleSize: 1000,
            scores: {
              'macron-2017': 25, 'lepen-2017': 26, 'fillon-2017': 18,
              'melenchon-2017': 12.5, 'hamon-2017': 12, 'dupont-2017': 3,
              'lassalle-2017': 1, 'poutou-2017': 1, 'arthaud-2017': 0.5,
              'asselineau-2017': 0.5, 'cheminade-2017': 0,
            },
          },
          {
            date: '2017-03-15',
            pollster: 'Ifop',
            sampleSize: 1475,
            scores: {
              'macron-2017': 26, 'lepen-2017': 25, 'fillon-2017': 18,
              'melenchon-2017': 14, 'hamon-2017': 11, 'dupont-2017': 3.5,
              'lassalle-2017': 1, 'poutou-2017': 1, 'arthaud-2017': 0.5,
              'asselineau-2017': 0.5, 'cheminade-2017': 0,
            },
          },
          {
            date: '2017-04-01',
            pollster: 'Elabe',
            sampleSize: 1002,
            scores: {
              'macron-2017': 25, 'lepen-2017': 23, 'fillon-2017': 19,
              'melenchon-2017': 18, 'hamon-2017': 9, 'dupont-2017': 3,
              'lassalle-2017': 1, 'poutou-2017': 1, 'arthaud-2017': 0.5,
              'asselineau-2017': 0.5, 'cheminade-2017': 0,
            },
          },
          {
            date: '2017-04-08',
            pollster: 'OpinionWay',
            sampleSize: 1040,
            scores: {
              'macron-2017': 24, 'lepen-2017': 22.5, 'fillon-2017': 19.5,
              'melenchon-2017': 18, 'hamon-2017': 8.5, 'dupont-2017': 4,
              'lassalle-2017': 1, 'poutou-2017': 1, 'arthaud-2017': 0.5,
              'asselineau-2017': 0.5, 'cheminade-2017': 0,
            },
          },
          {
            date: '2017-04-14',
            pollster: 'Ifop',
            sampleSize: 1504,
            scores: {
              'macron-2017': 24, 'lepen-2017': 22, 'fillon-2017': 19.5,
              'melenchon-2017': 19, 'hamon-2017': 8, 'dupont-2017': 4,
              'lassalle-2017': 1, 'poutou-2017': 1, 'arthaud-2017': 0.5,
              'asselineau-2017': 0.5, 'cheminade-2017': 0,
            },
          },
          {
            date: '2017-04-18',
            pollster: 'Harris Interactive',
            sampleSize: 1495,
            scores: {
              'macron-2017': 24, 'lepen-2017': 22.5, 'fillon-2017': 19,
              'melenchon-2017': 19.5, 'hamon-2017': 7.5, 'dupont-2017': 4.5,
              'lassalle-2017': 1, 'poutou-2017': 1, 'arthaud-2017': 0.5,
              'asselineau-2017': 0.5, 'cheminade-2017': 0,
            },
          },
          {
            date: '2017-04-21',
            pollster: 'Ipsos',
            sampleSize: 4870,
            scores: {
              'macron-2017': 24, 'lepen-2017': 22, 'fillon-2017': 19.5,
              'melenchon-2017': 19.5, 'hamon-2017': 7.5, 'dupont-2017': 4.5,
              'lassalle-2017': 1, 'poutou-2017': 1, 'arthaud-2017': 0.5,
              'asselineau-2017': 0.5, 'cheminade-2017': 0,
            },
          },
        ],
      },
      {
        round: 2,
        date: '2017-05-07',
        candidates: [
          { id: 'macron-2017', name: 'Emmanuel Macron', party: 'EM', color: COLORS.LREM },
          { id: 'lepen-2017', name: 'Marine Le Pen', party: 'FN', color: COLORS.FN },
        ],
        results: [
          { candidateId: 'macron-2017', score: 66.10 },
          { candidateId: 'lepen-2017', score: 33.90 },
        ],
        polls: [
          {
            date: '2017-04-24',
            pollster: 'Ifop',
            sampleSize: 1403,
            scores: { 'macron-2017': 62, 'lepen-2017': 38 },
          },
          {
            date: '2017-04-26',
            pollster: 'Harris Interactive',
            sampleSize: 1498,
            scores: { 'macron-2017': 64, 'lepen-2017': 36 },
          },
          {
            date: '2017-04-28',
            pollster: 'Elabe',
            sampleSize: 1003,
            scores: { 'macron-2017': 62, 'lepen-2017': 38 },
          },
          {
            date: '2017-05-01',
            pollster: 'Ipsos',
            sampleSize: 1408,
            scores: { 'macron-2017': 60, 'lepen-2017': 40 },
          },
          {
            date: '2017-05-03',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: { 'macron-2017': 61, 'lepen-2017': 39 },
          },
          {
            date: '2017-05-05',
            pollster: 'Ipsos',
            sampleSize: 4497,
            scores: { 'macron-2017': 63, 'lepen-2017': 37 },
          },
        ],
      },
    ],
  },

  // ============================================================
  // PRESIDENTIELLE 2012
  // ============================================================
  {
    id: 'pres-2012',
    name: 'Présidentielle 2012',
    type: 'presidentielle',
    year: 2012,
    rounds: [
      {
        round: 1,
        date: '2012-04-22',
        candidates: [
          { id: 'hollande-2012', name: 'François Hollande', party: 'PS', color: COLORS.PS },
          { id: 'sarkozy-2012', name: 'Nicolas Sarkozy', party: 'UMP', color: COLORS.LR },
          { id: 'lepen-2012', name: 'Marine Le Pen', party: 'FN', color: COLORS.FN },
          { id: 'melenchon-2012', name: 'Jean-Luc Mélenchon', party: 'FG', color: COLORS.LFI },
          { id: 'bayrou-2012', name: 'François Bayrou', party: 'MoDem', color: COLORS.MoDem },
          { id: 'joly-2012', name: 'Eva Joly', party: 'EELV', color: COLORS.EELV },
          { id: 'dupont-2012', name: 'Nicolas Dupont-Aignan', party: 'DLR', color: COLORS.DLR },
          { id: 'poutou-2012', name: 'Philippe Poutou', party: 'NPA', color: COLORS.NPA },
          { id: 'arthaud-2012', name: 'Nathalie Arthaud', party: 'LO', color: COLORS.LO },
          { id: 'cheminade-2012', name: 'Jacques Cheminade', party: 'S&P', color: '#9370DB' },
        ],
        results: [
          { candidateId: 'hollande-2012', score: 28.63 },
          { candidateId: 'sarkozy-2012', score: 27.18 },
          { candidateId: 'lepen-2012', score: 17.90 },
          { candidateId: 'melenchon-2012', score: 11.10 },
          { candidateId: 'bayrou-2012', score: 9.13 },
          { candidateId: 'joly-2012', score: 2.31 },
          { candidateId: 'dupont-2012', score: 1.79 },
          { candidateId: 'poutou-2012', score: 1.15 },
          { candidateId: 'arthaud-2012', score: 0.56 },
          { candidateId: 'cheminade-2012', score: 0.25 },
        ],
        polls: [
          {
            date: '2012-01-15',
            pollster: 'Ifop',
            sampleSize: 1400,
            scores: {
              'hollande-2012': 29, 'sarkozy-2012': 24, 'lepen-2012': 18,
              'melenchon-2012': 8, 'bayrou-2012': 13, 'joly-2012': 3,
              'dupont-2012': 1.5, 'poutou-2012': 1, 'arthaud-2012': 0.5, 'cheminade-2012': 0,
            },
          },
          {
            date: '2012-02-01',
            pollster: 'BVA',
            sampleSize: 1008,
            scores: {
              'hollande-2012': 28.5, 'sarkozy-2012': 25, 'lepen-2012': 17,
              'melenchon-2012': 9, 'bayrou-2012': 13, 'joly-2012': 3,
              'dupont-2012': 1.5, 'poutou-2012': 1, 'arthaud-2012': 0.5, 'cheminade-2012': 0,
            },
          },
          {
            date: '2012-02-15',
            pollster: 'Ipsos',
            sampleSize: 1503,
            scores: {
              'hollande-2012': 28, 'sarkozy-2012': 26, 'lepen-2012': 16,
              'melenchon-2012': 10, 'bayrou-2012': 13, 'joly-2012': 2.5,
              'dupont-2012': 1.5, 'poutou-2012': 1, 'arthaud-2012': 0.5, 'cheminade-2012': 0,
            },
          },
          {
            date: '2012-03-01',
            pollster: 'Harris Interactive',
            sampleSize: 1408,
            scores: {
              'hollande-2012': 29, 'sarkozy-2012': 26, 'lepen-2012': 16.5,
              'melenchon-2012': 10, 'bayrou-2012': 11.5, 'joly-2012': 2.5,
              'dupont-2012': 1.5, 'poutou-2012': 1, 'arthaud-2012': 0.5, 'cheminade-2012': 0,
            },
          },
          {
            date: '2012-03-15',
            pollster: 'Ifop',
            sampleSize: 1478,
            scores: {
              'hollande-2012': 28.5, 'sarkozy-2012': 27, 'lepen-2012': 15.5,
              'melenchon-2012': 11, 'bayrou-2012': 11, 'joly-2012': 2.5,
              'dupont-2012': 1.5, 'poutou-2012': 1, 'arthaud-2012': 0.5, 'cheminade-2012': 0,
            },
          },
          {
            date: '2012-04-01',
            pollster: 'OpinionWay',
            sampleSize: 1056,
            scores: {
              'hollande-2012': 28, 'sarkozy-2012': 27.5, 'lepen-2012': 16,
              'melenchon-2012': 13, 'bayrou-2012': 10, 'joly-2012': 2,
              'dupont-2012': 1.5, 'poutou-2012': 1, 'arthaud-2012': 0.5, 'cheminade-2012': 0,
            },
          },
          {
            date: '2012-04-10',
            pollster: 'Ifop',
            sampleSize: 1500,
            scores: {
              'hollande-2012': 27.5, 'sarkozy-2012': 27, 'lepen-2012': 16,
              'melenchon-2012': 14, 'bayrou-2012': 10, 'joly-2012': 2.5,
              'dupont-2012': 1, 'poutou-2012': 1, 'arthaud-2012': 0.5, 'cheminade-2012': 0,
            },
          },
          {
            date: '2012-04-15',
            pollster: 'Ipsos',
            sampleSize: 1450,
            scores: {
              'hollande-2012': 28, 'sarkozy-2012': 27, 'lepen-2012': 16,
              'melenchon-2012': 14, 'bayrou-2012': 10, 'joly-2012': 2,
              'dupont-2012': 1, 'poutou-2012': 1, 'arthaud-2012': 0.5, 'cheminade-2012': 0,
            },
          },
          {
            date: '2012-04-20',
            pollster: 'Ifop',
            sampleSize: 3507,
            scores: {
              'hollande-2012': 28, 'sarkozy-2012': 26.5, 'lepen-2012': 16,
              'melenchon-2012': 13.5, 'bayrou-2012': 10.5, 'joly-2012': 2.5,
              'dupont-2012': 1.5, 'poutou-2012': 1, 'arthaud-2012': 0.5, 'cheminade-2012': 0,
            },
          },
        ],
      },
      {
        round: 2,
        date: '2012-05-06',
        candidates: [
          { id: 'hollande-2012', name: 'François Hollande', party: 'PS', color: COLORS.PS },
          { id: 'sarkozy-2012', name: 'Nicolas Sarkozy', party: 'UMP', color: COLORS.LR },
        ],
        results: [
          { candidateId: 'hollande-2012', score: 51.64 },
          { candidateId: 'sarkozy-2012', score: 48.36 },
        ],
        polls: [
          {
            date: '2012-04-23',
            pollster: 'Ifop',
            sampleSize: 1404,
            scores: { 'hollande-2012': 54, 'sarkozy-2012': 46 },
          },
          {
            date: '2012-04-25',
            pollster: 'Harris Interactive',
            sampleSize: 1411,
            scores: { 'hollande-2012': 54.5, 'sarkozy-2012': 45.5 },
          },
          {
            date: '2012-04-28',
            pollster: 'BVA',
            sampleSize: 1000,
            scores: { 'hollande-2012': 53, 'sarkozy-2012': 47 },
          },
          {
            date: '2012-05-01',
            pollster: 'Ipsos',
            sampleSize: 1506,
            scores: { 'hollande-2012': 53.5, 'sarkozy-2012': 46.5 },
          },
          {
            date: '2012-05-03',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: { 'hollande-2012': 52.5, 'sarkozy-2012': 47.5 },
          },
          {
            date: '2012-05-04',
            pollster: 'Ipsos',
            sampleSize: 4507,
            scores: { 'hollande-2012': 52, 'sarkozy-2012': 48 },
          },
        ],
      },
    ],
  },

  // ============================================================
  // PRESIDENTIELLE 2007
  // ============================================================
  {
    id: 'pres-2007',
    name: 'Présidentielle 2007',
    type: 'presidentielle',
    year: 2007,
    rounds: [
      {
        round: 1,
        date: '2007-04-22',
        candidates: [
          { id: 'sarkozy-2007', name: 'Nicolas Sarkozy', party: 'UMP', color: COLORS.LR },
          { id: 'royal-2007', name: 'Ségolène Royal', party: 'PS', color: COLORS.PS },
          { id: 'bayrou-2007', name: 'François Bayrou', party: 'UDF', color: COLORS.MoDem },
          { id: 'lepen-2007', name: 'Jean-Marie Le Pen', party: 'FN', color: COLORS.FN },
          { id: 'besancenot-2007', name: 'Olivier Besancenot', party: 'LCR', color: COLORS.NPA },
          { id: 'buffet-2007', name: 'Marie-George Buffet', party: 'PCF', color: COLORS.PCF },
          { id: 'voynet-2007', name: 'Dominique Voynet', party: 'Verts', color: COLORS.EELV },
          { id: 'villiers-2007', name: 'Philippe de Villiers', party: 'MPF', color: '#8B4513' },
          { id: 'laguiller-2007', name: 'Arlette Laguiller', party: 'LO', color: COLORS.LO },
          { id: 'bove-2007', name: 'José Bové', party: 'Alt.', color: '#2E8B57' },
          { id: 'nihous-2007', name: 'Frédéric Nihous', party: 'CPNT', color: '#6B8E23' },
          { id: 'schivardi-2007', name: 'Gérard Schivardi', party: 'PT', color: '#CD5C5C' },
        ],
        results: [
          { candidateId: 'sarkozy-2007', score: 31.18 },
          { candidateId: 'royal-2007', score: 25.87 },
          { candidateId: 'bayrou-2007', score: 18.57 },
          { candidateId: 'lepen-2007', score: 10.44 },
          { candidateId: 'besancenot-2007', score: 4.08 },
          { candidateId: 'buffet-2007', score: 1.93 },
          { candidateId: 'voynet-2007', score: 1.57 },
          { candidateId: 'villiers-2007', score: 2.23 },
          { candidateId: 'laguiller-2007', score: 1.33 },
          { candidateId: 'bove-2007', score: 1.32 },
          { candidateId: 'nihous-2007', score: 1.15 },
          { candidateId: 'schivardi-2007', score: 0.34 },
        ],
        polls: [
          {
            date: '2007-01-15',
            pollster: 'Ifop',
            sampleSize: 1400,
            scores: {
              'sarkozy-2007': 31, 'royal-2007': 26, 'bayrou-2007': 12,
              'lepen-2007': 14, 'besancenot-2007': 4, 'buffet-2007': 3,
              'voynet-2007': 2, 'villiers-2007': 2.5, 'laguiller-2007': 2,
              'bove-2007': 1.5, 'nihous-2007': 0.5, 'schivardi-2007': 0.5,
            },
          },
          {
            date: '2007-02-15',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'sarkozy-2007': 30, 'royal-2007': 25, 'bayrou-2007': 16,
              'lepen-2007': 13, 'besancenot-2007': 4, 'buffet-2007': 2.5,
              'voynet-2007': 1.5, 'villiers-2007': 2, 'laguiller-2007': 2,
              'bove-2007': 1.5, 'nihous-2007': 0.5, 'schivardi-2007': 0.5,
            },
          },
          {
            date: '2007-03-01',
            pollster: 'BVA',
            sampleSize: 1004,
            scores: {
              'sarkozy-2007': 29, 'royal-2007': 24, 'bayrou-2007': 20,
              'lepen-2007': 12, 'besancenot-2007': 3.5, 'buffet-2007': 2.5,
              'voynet-2007': 1.5, 'villiers-2007': 2, 'laguiller-2007': 1.5,
              'bove-2007': 2, 'nihous-2007': 0.5, 'schivardi-2007': 0.5,
            },
          },
          {
            date: '2007-03-15',
            pollster: 'Harris Interactive',
            sampleSize: 1405,
            scores: {
              'sarkozy-2007': 28.5, 'royal-2007': 24, 'bayrou-2007': 22,
              'lepen-2007': 12, 'besancenot-2007': 3, 'buffet-2007': 2,
              'voynet-2007': 1.5, 'villiers-2007': 2, 'laguiller-2007': 1.5,
              'bove-2007': 1.5, 'nihous-2007': 0.5, 'schivardi-2007': 0.5,
            },
          },
          {
            date: '2007-04-01',
            pollster: 'Ifop',
            sampleSize: 1504,
            scores: {
              'sarkozy-2007': 29, 'royal-2007': 24, 'bayrou-2007': 21,
              'lepen-2007': 12.5, 'besancenot-2007': 3, 'buffet-2007': 2,
              'voynet-2007': 1.5, 'villiers-2007': 2, 'laguiller-2007': 1.5,
              'bove-2007': 1.5, 'nihous-2007': 0.5, 'schivardi-2007': 0.5,
            },
          },
          {
            date: '2007-04-10',
            pollster: 'OpinionWay',
            sampleSize: 1048,
            scores: {
              'sarkozy-2007': 29.5, 'royal-2007': 24.5, 'bayrou-2007': 19,
              'lepen-2007': 12, 'besancenot-2007': 4, 'buffet-2007': 2,
              'voynet-2007': 1.5, 'villiers-2007': 2, 'laguiller-2007': 1.5,
              'bove-2007': 1.5, 'nihous-2007': 1, 'schivardi-2007': 0.5,
            },
          },
          {
            date: '2007-04-17',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: {
              'sarkozy-2007': 30, 'royal-2007': 25, 'bayrou-2007': 19,
              'lepen-2007': 12, 'besancenot-2007': 4, 'buffet-2007': 2,
              'voynet-2007': 1.5, 'villiers-2007': 2, 'laguiller-2007': 1.5,
              'bove-2007': 1.5, 'nihous-2007': 0.5, 'schivardi-2007': 0.5,
            },
          },
          {
            date: '2007-04-20',
            pollster: 'Ipsos',
            sampleSize: 3505,
            scores: {
              'sarkozy-2007': 30.5, 'royal-2007': 25.5, 'bayrou-2007': 18.5,
              'lepen-2007': 11.5, 'besancenot-2007': 4, 'buffet-2007': 2,
              'voynet-2007': 1.5, 'villiers-2007': 2, 'laguiller-2007': 1.5,
              'bove-2007': 1.5, 'nihous-2007': 0.5, 'schivardi-2007': 0.5,
            },
          },
        ],
      },
      {
        round: 2,
        date: '2007-05-06',
        candidates: [
          { id: 'sarkozy-2007', name: 'Nicolas Sarkozy', party: 'UMP', color: COLORS.LR },
          { id: 'royal-2007', name: 'Ségolène Royal', party: 'PS', color: COLORS.PS },
        ],
        results: [
          { candidateId: 'sarkozy-2007', score: 53.06 },
          { candidateId: 'royal-2007', score: 46.94 },
        ],
        polls: [
          {
            date: '2007-04-23',
            pollster: 'Ifop',
            sampleSize: 1400,
            scores: { 'sarkozy-2007': 53, 'royal-2007': 47 },
          },
          {
            date: '2007-04-26',
            pollster: 'Harris Interactive',
            sampleSize: 1404,
            scores: { 'sarkozy-2007': 54, 'royal-2007': 46 },
          },
          {
            date: '2007-04-30',
            pollster: 'BVA',
            sampleSize: 1001,
            scores: { 'sarkozy-2007': 54, 'royal-2007': 46 },
          },
          {
            date: '2007-05-02',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: { 'sarkozy-2007': 55, 'royal-2007': 45 },
          },
          {
            date: '2007-05-04',
            pollster: 'Ifop',
            sampleSize: 3507,
            scores: { 'sarkozy-2007': 53.5, 'royal-2007': 46.5 },
          },
        ],
      },
    ],
  },

  // ============================================================
  // PRESIDENTIELLE 2002
  // ============================================================
  {
    id: 'pres-2002',
    name: 'Présidentielle 2002',
    type: 'presidentielle',
    year: 2002,
    rounds: [
      {
        round: 1,
        date: '2002-04-21',
        candidates: [
          { id: 'chirac-2002', name: 'Jacques Chirac', party: 'RPR', color: COLORS.LR },
          { id: 'lepen-2002', name: 'Jean-Marie Le Pen', party: 'FN', color: COLORS.FN },
          { id: 'jospin-2002', name: 'Lionel Jospin', party: 'PS', color: COLORS.PS },
          { id: 'bayrou-2002', name: 'François Bayrou', party: 'UDF', color: COLORS.MoDem },
          { id: 'laguiller-2002', name: 'Arlette Laguiller', party: 'LO', color: COLORS.LO },
          { id: 'chevenement-2002', name: 'Jean-Pierre Chevènement', party: 'MDC', color: '#4169E1' },
          { id: 'mamere-2002', name: 'Noël Mamère', party: 'Verts', color: COLORS.EELV },
          { id: 'besancenot-2002', name: 'Olivier Besancenot', party: 'LCR', color: COLORS.NPA },
          { id: 'saint-josse-2002', name: 'Jean Saint-Josse', party: 'CPNT', color: '#6B8E23' },
          { id: 'madelin-2002', name: 'Alain Madelin', party: 'DL', color: '#1E90FF' },
          { id: 'hue-2002', name: 'Robert Hue', party: 'PCF', color: COLORS.PCF },
          { id: 'megret-2002', name: 'Bruno Mégret', party: 'MNR', color: '#2F4F4F' },
          { id: 'taubira-2002', name: 'Christiane Taubira', party: 'PRG', color: '#DB7093' },
          { id: 'boutin-2002', name: 'Christine Boutin', party: 'FRS', color: '#6495ED' },
          { id: 'gluckstein-2002', name: 'Daniel Gluckstein', party: 'PT', color: '#CD5C5C' },
          { id: 'lepage-2002', name: 'Corinne Lepage', party: 'CAP21', color: '#3CB371' },
        ],
        results: [
          { candidateId: 'chirac-2002', score: 19.88 },
          { candidateId: 'lepen-2002', score: 16.86 },
          { candidateId: 'jospin-2002', score: 16.18 },
          { candidateId: 'bayrou-2002', score: 6.84 },
          { candidateId: 'laguiller-2002', score: 5.72 },
          { candidateId: 'chevenement-2002', score: 5.33 },
          { candidateId: 'mamere-2002', score: 5.25 },
          { candidateId: 'besancenot-2002', score: 4.25 },
          { candidateId: 'saint-josse-2002', score: 4.23 },
          { candidateId: 'madelin-2002', score: 3.91 },
          { candidateId: 'hue-2002', score: 3.37 },
          { candidateId: 'megret-2002', score: 2.34 },
          { candidateId: 'taubira-2002', score: 2.32 },
          { candidateId: 'boutin-2002', score: 1.19 },
          { candidateId: 'gluckstein-2002', score: 0.47 },
          { candidateId: 'lepage-2002', score: 1.88 },
        ],
        polls: [
          {
            date: '2002-02-01',
            pollster: 'Ifop',
            sampleSize: 1400,
            scores: {
              'chirac-2002': 22, 'lepen-2002': 10, 'jospin-2002': 22,
              'bayrou-2002': 7, 'laguiller-2002': 6, 'chevenement-2002': 7,
              'mamere-2002': 5.5, 'besancenot-2002': 3, 'saint-josse-2002': 3,
              'madelin-2002': 4, 'hue-2002': 4.5, 'megret-2002': 2.5,
              'taubira-2002': 2, 'boutin-2002': 1, 'gluckstein-2002': 0.5,
              'lepage-2002': 1,
            },
          },
          {
            date: '2002-03-01',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'chirac-2002': 21, 'lepen-2002': 11, 'jospin-2002': 21,
              'bayrou-2002': 7, 'laguiller-2002': 6, 'chevenement-2002': 6,
              'mamere-2002': 6, 'besancenot-2002': 4, 'saint-josse-2002': 3,
              'madelin-2002': 4, 'hue-2002': 4, 'megret-2002': 2,
              'taubira-2002': 2, 'boutin-2002': 1, 'gluckstein-2002': 0.5,
              'lepage-2002': 1.5,
            },
          },
          {
            date: '2002-03-15',
            pollster: 'BVA',
            sampleSize: 1005,
            scores: {
              'chirac-2002': 21, 'lepen-2002': 12, 'jospin-2002': 20,
              'bayrou-2002': 7, 'laguiller-2002': 6, 'chevenement-2002': 5.5,
              'mamere-2002': 6, 'besancenot-2002': 4, 'saint-josse-2002': 3.5,
              'madelin-2002': 4, 'hue-2002': 3.5, 'megret-2002': 2.5,
              'taubira-2002': 2, 'boutin-2002': 1, 'gluckstein-2002': 0.5,
              'lepage-2002': 1.5,
            },
          },
          {
            date: '2002-04-01',
            pollster: 'Ifop',
            sampleSize: 1505,
            scores: {
              'chirac-2002': 20, 'lepen-2002': 13, 'jospin-2002': 19,
              'bayrou-2002': 6.5, 'laguiller-2002': 7, 'chevenement-2002': 5,
              'mamere-2002': 6, 'besancenot-2002': 4.5, 'saint-josse-2002': 3.5,
              'madelin-2002': 4, 'hue-2002': 3.5, 'megret-2002': 2.5,
              'taubira-2002': 2, 'boutin-2002': 1, 'gluckstein-2002': 0.5,
              'lepage-2002': 1.5,
            },
          },
          {
            date: '2002-04-10',
            pollster: 'Ipsos',
            sampleSize: 1506,
            scores: {
              'chirac-2002': 19.5, 'lepen-2002': 14, 'jospin-2002': 18,
              'bayrou-2002': 7, 'laguiller-2002': 7, 'chevenement-2002': 5,
              'mamere-2002': 6, 'besancenot-2002': 4.5, 'saint-josse-2002': 4,
              'madelin-2002': 4, 'hue-2002': 3.5, 'megret-2002': 2.5,
              'taubira-2002': 2, 'boutin-2002': 1, 'gluckstein-2002': 0.5,
              'lepage-2002': 1.5,
            },
          },
          {
            date: '2002-04-18',
            pollster: 'Ifop',
            sampleSize: 3007,
            scores: {
              'chirac-2002': 20, 'lepen-2002': 14.5, 'jospin-2002': 18.5,
              'bayrou-2002': 6.5, 'laguiller-2002': 6.5, 'chevenement-2002': 5,
              'mamere-2002': 5.5, 'besancenot-2002': 4.5, 'saint-josse-2002': 4,
              'madelin-2002': 4, 'hue-2002': 3.5, 'megret-2002': 2.5,
              'taubira-2002': 2, 'boutin-2002': 1, 'gluckstein-2002': 0.5,
              'lepage-2002': 1.5,
            },
          },
        ],
      },
      {
        round: 2,
        date: '2002-05-05',
        candidates: [
          { id: 'chirac-2002', name: 'Jacques Chirac', party: 'RPR', color: COLORS.LR },
          { id: 'lepen-2002', name: 'Jean-Marie Le Pen', party: 'FN', color: COLORS.FN },
        ],
        results: [
          { candidateId: 'chirac-2002', score: 82.21 },
          { candidateId: 'lepen-2002', score: 17.79 },
        ],
        polls: [
          {
            date: '2002-04-22',
            pollster: 'Ifop',
            sampleSize: 1402,
            scores: { 'chirac-2002': 80, 'lepen-2002': 20 },
          },
          {
            date: '2002-04-25',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: { 'chirac-2002': 82, 'lepen-2002': 18 },
          },
          {
            date: '2002-04-29',
            pollster: 'BVA',
            sampleSize: 1004,
            scores: { 'chirac-2002': 81, 'lepen-2002': 19 },
          },
          {
            date: '2002-05-03',
            pollster: 'Ifop',
            sampleSize: 3507,
            scores: { 'chirac-2002': 82, 'lepen-2002': 18 },
          },
        ],
      },
    ],
  },

  // ============================================================
  // EUROPEENNES 2024
  // ============================================================
  {
    id: 'euro-2024',
    name: 'Européennes 2024',
    type: 'europeenne',
    year: 2024,
    rounds: [
      {
        round: 1,
        date: '2024-06-09',
        candidates: [
          { id: 'rn-2024e', name: 'Jordan Bardella (RN)', party: 'RN', color: COLORS.RN },
          { id: 're-2024e', name: 'Valérie Hayer (RE)', party: 'RE', color: COLORS.RE },
          { id: 'ps-2024e', name: 'Raphaël Glucksmann (PS-PP)', party: 'PS', color: COLORS.PS },
          { id: 'lfi-2024e', name: 'Manon Aubry (LFI)', party: 'LFI', color: COLORS.LFI },
          { id: 'lr-2024e', name: 'François-Xavier Bellamy (LR)', party: 'LR', color: COLORS.LR },
          { id: 'eelv-2024e', name: 'Marie Toussaint (EELV)', party: 'EELV', color: COLORS.EELV },
          { id: 'rec-2024e', name: 'Marion Maréchal (REC)', party: 'REC', color: COLORS.REC },
        ],
        results: [
          { candidateId: 'rn-2024e', score: 31.37 },
          { candidateId: 're-2024e', score: 14.60 },
          { candidateId: 'ps-2024e', score: 13.83 },
          { candidateId: 'lfi-2024e', score: 9.89 },
          { candidateId: 'lr-2024e', score: 7.25 },
          { candidateId: 'eelv-2024e', score: 5.50 },
          { candidateId: 'rec-2024e', score: 5.47 },
        ],
        polls: [
          {
            date: '2024-01-15',
            pollster: 'Harris Interactive',
            sampleSize: 1500,
            scores: {
              'rn-2024e': 28, 're-2024e': 19, 'ps-2024e': 11,
              'lfi-2024e': 8.5, 'lr-2024e': 7, 'eelv-2024e': 7,
              'rec-2024e': 6,
            },
          },
          {
            date: '2024-02-15',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: {
              'rn-2024e': 29, 're-2024e': 18, 'ps-2024e': 12,
              'lfi-2024e': 8, 'lr-2024e': 7, 'eelv-2024e': 7,
              'rec-2024e': 6,
            },
          },
          {
            date: '2024-03-15',
            pollster: 'Elabe',
            sampleSize: 1504,
            scores: {
              'rn-2024e': 30, 're-2024e': 17.5, 'ps-2024e': 13,
              'lfi-2024e': 8.5, 'lr-2024e': 7, 'eelv-2024e': 6.5,
              'rec-2024e': 6,
            },
          },
          {
            date: '2024-04-15',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'rn-2024e': 31, 're-2024e': 17, 'ps-2024e': 13,
              'lfi-2024e': 9, 'lr-2024e': 7, 'eelv-2024e': 6,
              'rec-2024e': 5.5,
            },
          },
          {
            date: '2024-05-15',
            pollster: 'Ifop',
            sampleSize: 1504,
            scores: {
              'rn-2024e': 32, 're-2024e': 16, 'ps-2024e': 14,
              'lfi-2024e': 9, 'lr-2024e': 7, 'eelv-2024e': 5.5,
              'rec-2024e': 5.5,
            },
          },
          {
            date: '2024-06-01',
            pollster: 'Harris Interactive',
            sampleSize: 1505,
            scores: {
              'rn-2024e': 32, 're-2024e': 15.5, 'ps-2024e': 14,
              'lfi-2024e': 9.5, 'lr-2024e': 7, 'eelv-2024e': 5.5,
              'rec-2024e': 5.5,
            },
          },
          {
            date: '2024-06-07',
            pollster: 'Ipsos',
            sampleSize: 3007,
            scores: {
              'rn-2024e': 33, 're-2024e': 15, 'ps-2024e': 14,
              'lfi-2024e': 9, 'lr-2024e': 7, 'eelv-2024e': 5.5,
              'rec-2024e': 5.5,
            },
          },
        ],
      },
    ],
  },

  // ============================================================
  // EUROPEENNES 2019
  // ============================================================
  {
    id: 'euro-2019',
    name: 'Européennes 2019',
    type: 'europeenne',
    year: 2019,
    rounds: [
      {
        round: 1,
        date: '2019-05-26',
        candidates: [
          { id: 'rn-2019e', name: 'Jordan Bardella (RN)', party: 'RN', color: COLORS.RN },
          { id: 'lrem-2019e', name: 'Nathalie Loiseau (LREM)', party: 'LREM', color: COLORS.LREM },
          { id: 'eelv-2019e', name: 'Yannick Jadot (EELV)', party: 'EELV', color: COLORS.EELV },
          { id: 'lr-2019e', name: 'François-Xavier Bellamy (LR)', party: 'LR', color: COLORS.LR },
          { id: 'lfi-2019e', name: 'Manon Aubry (LFI)', party: 'LFI', color: COLORS.LFI },
          { id: 'ps-2019e', name: 'Raphaël Glucksmann (PS-PP)', party: 'PS', color: COLORS.PS },
        ],
        results: [
          { candidateId: 'rn-2019e', score: 23.34 },
          { candidateId: 'lrem-2019e', score: 22.42 },
          { candidateId: 'eelv-2019e', score: 13.48 },
          { candidateId: 'lr-2019e', score: 8.48 },
          { candidateId: 'lfi-2019e', score: 6.31 },
          { candidateId: 'ps-2019e', score: 6.19 },
        ],
        polls: [
          {
            date: '2019-03-01',
            pollster: 'Ifop',
            sampleSize: 1400,
            scores: {
              'rn-2019e': 22, 'lrem-2019e': 23, 'eelv-2019e': 9,
              'lr-2019e': 12, 'lfi-2019e': 8, 'ps-2019e': 5.5,
            },
          },
          {
            date: '2019-04-01',
            pollster: 'Harris Interactive',
            sampleSize: 1505,
            scores: {
              'rn-2019e': 22, 'lrem-2019e': 22, 'eelv-2019e': 9.5,
              'lr-2019e': 13, 'lfi-2019e': 7.5, 'ps-2019e': 5.5,
            },
          },
          {
            date: '2019-05-01',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'rn-2019e': 23, 'lrem-2019e': 22, 'eelv-2019e': 10,
              'lr-2019e': 12, 'lfi-2019e': 7, 'ps-2019e': 5.5,
            },
          },
          {
            date: '2019-05-15',
            pollster: 'Elabe',
            sampleSize: 1504,
            scores: {
              'rn-2019e': 24, 'lrem-2019e': 22, 'eelv-2019e': 11,
              'lr-2019e': 11, 'lfi-2019e': 7, 'ps-2019e': 5.5,
            },
          },
          {
            date: '2019-05-24',
            pollster: 'Ifop',
            sampleSize: 3007,
            scores: {
              'rn-2019e': 24, 'lrem-2019e': 22.5, 'eelv-2019e': 12,
              'lr-2019e': 10, 'lfi-2019e': 6.5, 'ps-2019e': 6,
            },
          },
        ],
      },
    ],
  },

  // ============================================================
  // EUROPEENNES 2014
  // ============================================================
  {
    id: 'euro-2014',
    name: 'Européennes 2014',
    type: 'europeenne',
    year: 2014,
    rounds: [
      {
        round: 1,
        date: '2014-05-25',
        candidates: [
          { id: 'fn-2014e', name: 'FN', party: 'FN', color: COLORS.FN },
          { id: 'ump-2014e', name: 'UMP', party: 'UMP', color: COLORS.LR },
          { id: 'ps-2014e', name: 'PS', party: 'PS', color: COLORS.PS },
          { id: 'eelv-2014e', name: 'EELV', party: 'EELV', color: COLORS.EELV },
          { id: 'udi-2014e', name: 'UDI-MoDem', party: 'UDI', color: COLORS.UDI },
          { id: 'fg-2014e', name: 'Front de Gauche', party: 'FG', color: COLORS.LFI },
        ],
        results: [
          { candidateId: 'fn-2014e', score: 24.86 },
          { candidateId: 'ump-2014e', score: 20.81 },
          { candidateId: 'ps-2014e', score: 13.98 },
          { candidateId: 'eelv-2014e', score: 8.95 },
          { candidateId: 'udi-2014e', score: 9.94 },
          { candidateId: 'fg-2014e', score: 6.61 },
        ],
        polls: [
          {
            date: '2014-03-01',
            pollster: 'Ifop',
            sampleSize: 1400,
            scores: {
              'fn-2014e': 22, 'ump-2014e': 22, 'ps-2014e': 18,
              'eelv-2014e': 9, 'udi-2014e': 10, 'fg-2014e': 8,
            },
          },
          {
            date: '2014-04-01',
            pollster: 'Harris Interactive',
            sampleSize: 1505,
            scores: {
              'fn-2014e': 23, 'ump-2014e': 22, 'ps-2014e': 17,
              'eelv-2014e': 9, 'udi-2014e': 10, 'fg-2014e': 7.5,
            },
          },
          {
            date: '2014-05-01',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'fn-2014e': 24, 'ump-2014e': 21, 'ps-2014e': 16,
              'eelv-2014e': 9, 'udi-2014e': 10, 'fg-2014e': 7,
            },
          },
          {
            date: '2014-05-20',
            pollster: 'Ifop',
            sampleSize: 3007,
            scores: {
              'fn-2014e': 24, 'ump-2014e': 21, 'ps-2014e': 15,
              'eelv-2014e': 9, 'udi-2014e': 10, 'fg-2014e': 7,
            },
          },
         ],
      },
    ],
  },

  // ============================================================
  // LEGISLATIVES 2024 (anticipées)
  // ============================================================
  {
    id: 'leg-2024',
    name: 'Législatives 2024',
    type: 'legislative',
    year: 2024,
    rounds: [
      {
        round: 1,
        date: '2024-06-30',
        candidates: [
          { id: 'rn-2024l', name: 'RN + alliés', party: 'RN', color: COLORS.RN },
          { id: 'nfp-2024l', name: 'Nouveau Front Populaire', party: 'NFP', color: '#CC0000' },
          { id: 'ens-2024l', name: 'Ensemble', party: 'RE', color: COLORS.RE },
          { id: 'lr-2024l', name: 'LR + divers droite', party: 'LR', color: COLORS.LR },
          { id: 'rec-2024l', name: 'Reconquête', party: 'REC', color: COLORS.REC },
          { id: 'dvg-2024l', name: 'Divers gauche', party: 'DVG', color: COLORS.DVG },
          { id: 'dvd-2024l', name: 'Divers droite', party: 'DVD', color: COLORS.DVD },
        ],
        results: [
          { candidateId: 'rn-2024l', score: 33.15 },
          { candidateId: 'nfp-2024l', score: 27.99 },
          { candidateId: 'ens-2024l', score: 20.04 },
          { candidateId: 'lr-2024l', score: 10.23 },
          { candidateId: 'rec-2024l', score: 0.77 },
          { candidateId: 'dvg-2024l', score: 2.65 },
          { candidateId: 'dvd-2024l', score: 3.07 },
        ],
        polls: [
          {
            date: '2024-06-11',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: {
              'rn-2024l': 34, 'nfp-2024l': 29, 'ens-2024l': 19,
              'lr-2024l': 10, 'rec-2024l': 2, 'dvg-2024l': 2, 'dvd-2024l': 3,
            },
          },
          {
            date: '2024-06-14',
            pollster: 'Harris Interactive',
            sampleSize: 1505,
            scores: {
              'rn-2024l': 35, 'nfp-2024l': 28, 'ens-2024l': 19.5,
              'lr-2024l': 10, 'rec-2024l': 1.5, 'dvg-2024l': 2, 'dvd-2024l': 3,
            },
          },
          {
            date: '2024-06-17',
            pollster: 'Elabe',
            sampleSize: 1504,
            scores: {
              'rn-2024l': 36, 'nfp-2024l': 27.5, 'ens-2024l': 20,
              'lr-2024l': 9, 'rec-2024l': 1.5, 'dvg-2024l': 2, 'dvd-2024l': 3,
            },
          },
          {
            date: '2024-06-20',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'rn-2024l': 35.5, 'nfp-2024l': 29, 'ens-2024l': 19.5,
              'lr-2024l': 9.5, 'rec-2024l': 1, 'dvg-2024l': 2, 'dvd-2024l': 2.5,
            },
          },
          {
            date: '2024-06-23',
            pollster: 'Ifop',
            sampleSize: 1504,
            scores: {
              'rn-2024l': 36, 'nfp-2024l': 28.5, 'ens-2024l': 20,
              'lr-2024l': 9, 'rec-2024l': 1, 'dvg-2024l': 2, 'dvd-2024l': 2.5,
            },
          },
          {
            date: '2024-06-25',
            pollster: 'OpinionWay',
            sampleSize: 1060,
            scores: {
              'rn-2024l': 35, 'nfp-2024l': 29, 'ens-2024l': 20,
              'lr-2024l': 9.5, 'rec-2024l': 1, 'dvg-2024l': 2, 'dvd-2024l': 2.5,
            },
          },
          {
            date: '2024-06-28',
            pollster: 'Ipsos',
            sampleSize: 3007,
            scores: {
              'rn-2024l': 35, 'nfp-2024l': 29, 'ens-2024l': 20.5,
              'lr-2024l': 9, 'rec-2024l': 1, 'dvg-2024l': 2, 'dvd-2024l': 2.5,
            },
          },
        ],
      },
      {
        round: 2,
        date: '2024-07-07',
        candidates: [
          { id: 'nfp-2024l', name: 'Nouveau Front Populaire', party: 'NFP', color: '#CC0000' },
          { id: 'ens-2024l', name: 'Ensemble', party: 'RE', color: COLORS.RE },
          { id: 'rn-2024l', name: 'RN + alliés', party: 'RN', color: COLORS.RN },
          { id: 'lr-2024l', name: 'LR + divers droite', party: 'LR', color: COLORS.LR },
          { id: 'dvg-2024l', name: 'Divers gauche', party: 'DVG', color: COLORS.DVG },
          { id: 'dvd-2024l', name: 'Divers droite', party: 'DVD', color: COLORS.DVD },
        ],
        results: [
          // En sièges (on convertit en %) - 577 sièges total
          { candidateId: 'nfp-2024l', score: 31.37 }, // 181 sièges
          { candidateId: 'ens-2024l', score: 28.08 }, // 162 sièges
          { candidateId: 'rn-2024l', score: 24.96 }, // 144 sièges
          { candidateId: 'lr-2024l', score: 8.32 }, // 48 sièges
          { candidateId: 'dvg-2024l', score: 3.81 }, // 22 sièges
          { candidateId: 'dvd-2024l', score: 3.47 }, // 20 sièges
        ],
        polls: [
          {
            date: '2024-07-01',
            pollster: 'Ifop',
            sampleSize: 1504,
            // Projections en sièges converties en %
            scores: {
              'nfp-2024l': 28.42, 'ens-2024l': 21.49, 'rn-2024l': 38.82,
              'lr-2024l': 7.28, 'dvg-2024l': 2.08, 'dvd-2024l': 1.91,
            },
          },
          {
            date: '2024-07-03',
            pollster: 'Harris Interactive',
            sampleSize: 1505,
            scores: {
              'nfp-2024l': 29.46, 'ens-2024l': 22.01, 'rn-2024l': 37.44,
              'lr-2024l': 7.11, 'dvg-2024l': 2.08, 'dvd-2024l': 1.91,
            },
          },
          {
            date: '2024-07-05',
            pollster: 'Ipsos',
            sampleSize: 3007,
            scores: {
              'nfp-2024l': 30.16, 'ens-2024l': 23.22, 'rn-2024l': 35.18,
              'lr-2024l': 7.45, 'dvg-2024l': 2.08, 'dvd-2024l': 1.91,
            },
          },
        ],
      },
    ],
  },

  // ============================================================
  // LEGISLATIVES 2022
  // ============================================================
  {
    id: 'leg-2022',
    name: 'Législatives 2022',
    type: 'legislative',
    year: 2022,
    rounds: [
      {
        round: 1,
        date: '2022-06-12',
        candidates: [
          { id: 'nupes-2022l', name: 'NUPES', party: 'NUPES', color: '#CC0000' },
          { id: 'ens-2022l', name: 'Ensemble (LREM-MoDem)', party: 'LREM', color: COLORS.LREM },
          { id: 'rn-2022l', name: 'RN', party: 'RN', color: COLORS.RN },
          { id: 'lr-2022l', name: 'LR + UDI', party: 'LR', color: COLORS.LR },
          { id: 'rec-2022l', name: 'Reconquête', party: 'REC', color: COLORS.REC },
          { id: 'dvg-2022l', name: 'Divers gauche', party: 'DVG', color: COLORS.DVG },
          { id: 'eelv-2022l', name: 'Écologistes (hors NUPES)', party: 'EELV', color: COLORS.EELV },
        ],
        results: [
          { candidateId: 'nupes-2022l', score: 25.66 },
          { candidateId: 'ens-2022l', score: 25.75 },
          { candidateId: 'rn-2022l', score: 18.68 },
          { candidateId: 'lr-2022l', score: 11.29 },
          { candidateId: 'rec-2022l', score: 4.24 },
          { candidateId: 'dvg-2022l', score: 3.53 },
          { candidateId: 'eelv-2022l', score: 2.15 },
        ],
        polls: [
          {
            date: '2022-05-01',
            pollster: 'Ifop',
            sampleSize: 1504,
            scores: {
              'nupes-2022l': 26, 'ens-2022l': 27, 'rn-2022l': 20,
              'lr-2022l': 12, 'rec-2022l': 5, 'dvg-2022l': 3, 'eelv-2022l': 2,
            },
          },
          {
            date: '2022-05-15',
            pollster: 'Harris Interactive',
            sampleSize: 1505,
            scores: {
              'nupes-2022l': 27, 'ens-2022l': 27, 'rn-2022l': 19,
              'lr-2022l': 12, 'rec-2022l': 4.5, 'dvg-2022l': 3, 'eelv-2022l': 2,
            },
          },
          {
            date: '2022-05-25',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'nupes-2022l': 27, 'ens-2022l': 26.5, 'rn-2022l': 19.5,
              'lr-2022l': 11.5, 'rec-2022l': 5, 'dvg-2022l': 3, 'eelv-2022l': 2,
            },
          },
          {
            date: '2022-06-01',
            pollster: 'Elabe',
            sampleSize: 1504,
            scores: {
              'nupes-2022l': 26.5, 'ens-2022l': 26, 'rn-2022l': 20,
              'lr-2022l': 11.5, 'rec-2022l': 5, 'dvg-2022l': 3.5, 'eelv-2022l': 2,
            },
          },
          {
            date: '2022-06-05',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: {
              'nupes-2022l': 26, 'ens-2022l': 26, 'rn-2022l': 20.5,
              'lr-2022l': 11, 'rec-2022l': 5, 'dvg-2022l': 3.5, 'eelv-2022l': 2,
            },
          },
          {
            date: '2022-06-09',
            pollster: 'Harris Interactive',
            sampleSize: 1505,
            scores: {
              'nupes-2022l': 26.5, 'ens-2022l': 26, 'rn-2022l': 20,
              'lr-2022l': 11.5, 'rec-2022l': 5, 'dvg-2022l': 3.5, 'eelv-2022l': 2,
            },
          },
          {
            date: '2022-06-10',
            pollster: 'Ipsos',
            sampleSize: 3007,
            scores: {
              'nupes-2022l': 26, 'ens-2022l': 26.5, 'rn-2022l': 19.5,
              'lr-2022l': 11.5, 'rec-2022l': 5, 'dvg-2022l': 3.5, 'eelv-2022l': 2,
            },
          },
        ],
      },
    ],
  },

  // ============================================================
  // LEGISLATIVES 2017
  // ============================================================
  {
    id: 'leg-2017',
    name: 'Législatives 2017',
    type: 'legislative',
    year: 2017,
    rounds: [
      {
        round: 1,
        date: '2017-06-11',
        candidates: [
          { id: 'lrem-2017l', name: 'LREM + MoDem', party: 'LREM', color: COLORS.LREM },
          { id: 'lr-2017l', name: 'LR + UDI', party: 'LR', color: COLORS.LR },
          { id: 'fn-2017l', name: 'Front National', party: 'FN', color: COLORS.FN },
          { id: 'fi-2017l', name: 'France Insoumise', party: 'LFI', color: COLORS.LFI },
          { id: 'ps-2017l', name: 'PS + alliés', party: 'PS', color: COLORS.PS },
          { id: 'eelv-2017l', name: 'EELV', party: 'EELV', color: COLORS.EELV },
          { id: 'pcf-2017l', name: 'PCF', party: 'PCF', color: COLORS.PCF },
        ],
        results: [
          { candidateId: 'lrem-2017l', score: 32.32 },
          { candidateId: 'lr-2017l', score: 21.56 },
          { candidateId: 'fn-2017l', score: 13.20 },
          { candidateId: 'fi-2017l', score: 11.03 },
          { candidateId: 'ps-2017l', score: 7.44 },
          { candidateId: 'eelv-2017l', score: 4.30 },
          { candidateId: 'pcf-2017l', score: 2.72 },
        ],
        polls: [
          {
            date: '2017-05-10',
            pollster: 'Ifop',
            sampleSize: 1500,
            scores: {
              'lrem-2017l': 29, 'lr-2017l': 22, 'fn-2017l': 17,
              'fi-2017l': 13, 'ps-2017l': 8, 'eelv-2017l': 4, 'pcf-2017l': 3,
            },
          },
          {
            date: '2017-05-17',
            pollster: 'Harris Interactive',
            sampleSize: 1505,
            scores: {
              'lrem-2017l': 30, 'lr-2017l': 21, 'fn-2017l': 17,
              'fi-2017l': 12, 'ps-2017l': 8, 'eelv-2017l': 4, 'pcf-2017l': 3,
            },
          },
          {
            date: '2017-05-24',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'lrem-2017l': 31, 'lr-2017l': 22, 'fn-2017l': 16,
              'fi-2017l': 12, 'ps-2017l': 8, 'eelv-2017l': 4, 'pcf-2017l': 3,
            },
          },
          {
            date: '2017-05-30',
            pollster: 'Elabe',
            sampleSize: 1504,
            scores: {
              'lrem-2017l': 31, 'lr-2017l': 22, 'fn-2017l': 16,
              'fi-2017l': 11.5, 'ps-2017l': 8, 'eelv-2017l': 4, 'pcf-2017l': 3,
            },
          },
          {
            date: '2017-06-03',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: {
              'lrem-2017l': 32, 'lr-2017l': 21, 'fn-2017l': 15,
              'fi-2017l': 12, 'ps-2017l': 8, 'eelv-2017l': 4, 'pcf-2017l': 3,
            },
          },
          {
            date: '2017-06-07',
            pollster: 'OpinionWay',
            sampleSize: 1060,
            scores: {
              'lrem-2017l': 32, 'lr-2017l': 21.5, 'fn-2017l': 15,
              'fi-2017l': 12, 'ps-2017l': 7.5, 'eelv-2017l': 4.5, 'pcf-2017l': 3,
            },
          },
          {
            date: '2017-06-09',
            pollster: 'Ipsos',
            sampleSize: 3007,
            scores: {
              'lrem-2017l': 32, 'lr-2017l': 21, 'fn-2017l': 14,
              'fi-2017l': 12, 'ps-2017l': 8, 'eelv-2017l': 4.5, 'pcf-2017l': 3,
            },
          },
        ],
      },
    ],
  },

  // ============================================================
  // LEGISLATIVES 2012
  // ============================================================
  {
    id: 'leg-2012',
    name: 'Législatives 2012',
    type: 'legislative',
    year: 2012,
    rounds: [
      {
        round: 1,
        date: '2012-06-10',
        candidates: [
          { id: 'ps-2012l', name: 'PS + alliés', party: 'PS', color: COLORS.PS },
          { id: 'ump-2012l', name: 'UMP', party: 'UMP', color: COLORS.LR },
          { id: 'fn-2012l', name: 'Front National', party: 'FN', color: COLORS.FN },
          { id: 'fg-2012l', name: 'Front de Gauche', party: 'FG', color: COLORS.LFI },
          { id: 'eelv-2012l', name: 'EELV', party: 'EELV', color: COLORS.EELV },
          { id: 'modem-2012l', name: 'MoDem', party: 'MoDem', color: COLORS.MoDem },
          { id: 'dvd-2012l', name: 'Divers droite', party: 'DVD', color: COLORS.DVD },
        ],
        results: [
          { candidateId: 'ps-2012l', score: 29.35 },
          { candidateId: 'ump-2012l', score: 27.12 },
          { candidateId: 'fn-2012l', score: 13.60 },
          { candidateId: 'fg-2012l', score: 6.91 },
          { candidateId: 'eelv-2012l', score: 5.46 },
          { candidateId: 'modem-2012l', score: 1.77 },
          { candidateId: 'dvd-2012l', score: 5.49 },
        ],
        polls: [
          {
            date: '2012-05-10',
            pollster: 'Ifop',
            sampleSize: 1400,
            scores: {
              'ps-2012l': 32, 'ump-2012l': 26, 'fn-2012l': 15,
              'fg-2012l': 7, 'eelv-2012l': 5.5, 'modem-2012l': 3, 'dvd-2012l': 4.5,
            },
          },
          {
            date: '2012-05-18',
            pollster: 'Harris Interactive',
            sampleSize: 1505,
            scores: {
              'ps-2012l': 33, 'ump-2012l': 27, 'fn-2012l': 14,
              'fg-2012l': 7, 'eelv-2012l': 5, 'modem-2012l': 3, 'dvd-2012l': 4.5,
            },
          },
          {
            date: '2012-05-25',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'ps-2012l': 33, 'ump-2012l': 27, 'fn-2012l': 15,
              'fg-2012l': 7, 'eelv-2012l': 5, 'modem-2012l': 2.5, 'dvd-2012l': 4.5,
            },
          },
          {
            date: '2012-06-01',
            pollster: 'BVA',
            sampleSize: 1003,
            scores: {
              'ps-2012l': 32, 'ump-2012l': 26.5, 'fn-2012l': 15,
              'fg-2012l': 7.5, 'eelv-2012l': 5, 'modem-2012l': 2.5, 'dvd-2012l': 5,
            },
          },
          {
            date: '2012-06-05',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: {
              'ps-2012l': 32, 'ump-2012l': 27, 'fn-2012l': 15,
              'fg-2012l': 7, 'eelv-2012l': 5, 'modem-2012l': 2.5, 'dvd-2012l': 5,
            },
          },
          {
            date: '2012-06-08',
            pollster: 'Ipsos',
            sampleSize: 3007,
            scores: {
              'ps-2012l': 31, 'ump-2012l': 27, 'fn-2012l': 15,
              'fg-2012l': 7, 'eelv-2012l': 5, 'modem-2012l': 2.5, 'dvd-2012l': 5,
            },
          },
        ],
      },
    ],
  },

  // ============================================================
  // LEGISLATIVES 2007
  // ============================================================
  {
    id: 'leg-2007',
    name: 'Législatives 2007',
    type: 'legislative',
    year: 2007,
    rounds: [
      {
        round: 1,
        date: '2007-06-10',
        candidates: [
          { id: 'ump-2007l', name: 'UMP', party: 'UMP', color: COLORS.LR },
          { id: 'ps-2007l', name: 'PS + PRG', party: 'PS', color: COLORS.PS },
          { id: 'pcf-2007l', name: 'PCF', party: 'PCF', color: COLORS.PCF },
          { id: 'fn-2007l', name: 'Front National', party: 'FN', color: COLORS.FN },
          { id: 'verts-2007l', name: 'Les Verts', party: 'Verts', color: COLORS.EELV },
          { id: 'modem-2007l', name: 'MoDem', party: 'MoDem', color: COLORS.MoDem },
          { id: 'dvd-2007l', name: 'Divers droite', party: 'DVD', color: COLORS.DVD },
        ],
        results: [
          { candidateId: 'ump-2007l', score: 39.54 },
          { candidateId: 'ps-2007l', score: 24.73 },
          { candidateId: 'pcf-2007l', score: 4.29 },
          { candidateId: 'fn-2007l', score: 4.29 },
          { candidateId: 'verts-2007l', score: 3.25 },
          { candidateId: 'modem-2007l', score: 7.61 },
          { candidateId: 'dvd-2007l', score: 4.89 },
        ],
        polls: [
          {
            date: '2007-05-10',
            pollster: 'Ifop',
            sampleSize: 1400,
            scores: {
              'ump-2007l': 36, 'ps-2007l': 26, 'pcf-2007l': 5,
              'fn-2007l': 5, 'verts-2007l': 4, 'modem-2007l': 10, 'dvd-2007l': 5,
            },
          },
          {
            date: '2007-05-18',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'ump-2007l': 37, 'ps-2007l': 27, 'pcf-2007l': 4.5,
              'fn-2007l': 4.5, 'verts-2007l': 3.5, 'modem-2007l': 9, 'dvd-2007l': 5,
            },
          },
          {
            date: '2007-05-25',
            pollster: 'Harris Interactive',
            sampleSize: 1405,
            scores: {
              'ump-2007l': 37, 'ps-2007l': 26, 'pcf-2007l': 5,
              'fn-2007l': 5, 'verts-2007l': 4, 'modem-2007l': 9, 'dvd-2007l': 5,
            },
          },
          {
            date: '2007-06-01',
            pollster: 'BVA',
            sampleSize: 1003,
            scores: {
              'ump-2007l': 38, 'ps-2007l': 26, 'pcf-2007l': 4.5,
              'fn-2007l': 4.5, 'verts-2007l': 3.5, 'modem-2007l': 8, 'dvd-2007l': 5,
            },
          },
          {
            date: '2007-06-05',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: {
              'ump-2007l': 38, 'ps-2007l': 26, 'pcf-2007l': 4.5,
              'fn-2007l': 4.5, 'verts-2007l': 3.5, 'modem-2007l': 8, 'dvd-2007l': 5,
            },
          },
          {
            date: '2007-06-08',
            pollster: 'Ipsos',
            sampleSize: 3007,
            scores: {
              'ump-2007l': 38, 'ps-2007l': 26, 'pcf-2007l': 4.5,
              'fn-2007l': 4.5, 'verts-2007l': 3.5, 'modem-2007l': 8, 'dvd-2007l': 5,
            },
          },
        ],
      },
    ],
  },

  // ============================================================
  // LEGISLATIVES 2002
  // ============================================================
  {
    id: 'leg-2002',
    name: 'Législatives 2002',
    type: 'legislative',
    year: 2002,
    rounds: [
      {
        round: 1,
        date: '2002-06-09',
        candidates: [
          { id: 'ump-2002l', name: 'UMP (RPR-DL-UDF)', party: 'UMP', color: COLORS.LR },
          { id: 'ps-2002l', name: 'PS', party: 'PS', color: COLORS.PS },
          { id: 'fn-2002l', name: 'Front National', party: 'FN', color: COLORS.FN },
          { id: 'pcf-2002l', name: 'PCF', party: 'PCF', color: COLORS.PCF },
          { id: 'verts-2002l', name: 'Les Verts', party: 'Verts', color: COLORS.EELV },
          { id: 'prg-2002l', name: 'PRG + MDC + DVG', party: 'DVG', color: COLORS.DVG },
          { id: 'udf-2002l', name: 'UDF (dissidents)', party: 'UDF', color: COLORS.MoDem },
        ],
        results: [
          { candidateId: 'ump-2002l', score: 33.30 },
          { candidateId: 'ps-2002l', score: 24.11 },
          { candidateId: 'fn-2002l', score: 11.34 },
          { candidateId: 'pcf-2002l', score: 4.82 },
          { candidateId: 'verts-2002l', score: 4.51 },
          { candidateId: 'prg-2002l', score: 6.96 },
          { candidateId: 'udf-2002l', score: 4.85 },
        ],
        polls: [
          {
            date: '2002-05-10',
            pollster: 'Ifop',
            sampleSize: 1400,
            scores: {
              'ump-2002l': 38, 'ps-2002l': 22, 'fn-2002l': 10,
              'pcf-2002l': 5, 'verts-2002l': 5, 'prg-2002l': 7, 'udf-2002l': 5,
            },
          },
          {
            date: '2002-05-20',
            pollster: 'Ipsos',
            sampleSize: 1500,
            scores: {
              'ump-2002l': 39, 'ps-2002l': 23, 'fn-2002l': 10,
              'pcf-2002l': 5, 'verts-2002l': 4.5, 'prg-2002l': 6.5, 'udf-2002l': 4.5,
            },
          },
          {
            date: '2002-05-28',
            pollster: 'BVA',
            sampleSize: 1003,
            scores: {
              'ump-2002l': 38, 'ps-2002l': 24, 'fn-2002l': 10,
              'pcf-2002l': 5, 'verts-2002l': 5, 'prg-2002l': 6, 'udf-2002l': 5,
            },
          },
          {
            date: '2002-06-01',
            pollster: 'Ifop',
            sampleSize: 1507,
            scores: {
              'ump-2002l': 38, 'ps-2002l': 24, 'fn-2002l': 10,
              'pcf-2002l': 5, 'verts-2002l': 5, 'prg-2002l': 6, 'udf-2002l': 5,
            },
          },
          {
            date: '2002-06-07',
            pollster: 'Ipsos',
            sampleSize: 3007,
            scores: {
              'ump-2002l': 37, 'ps-2002l': 24, 'fn-2002l': 10,
              'pcf-2002l': 5, 'verts-2002l': 5, 'prg-2002l': 6.5, 'udf-2002l': 5,
            },
          },
        ],
      },
    ],
  },
]
