import covid19ImpactEstimator from './estimator';

const input = {
  region: {
    name: 'Africa',
    avgAge: 19.7,
    avgDailyIncomeInUSD: 5,
    avgDailyIncomePopulation: 0.71
  },
  periodType: 'days',
  timeToElapse: 58,
  reportedCases: 674,
  population: 66622705,
  totalHospitalBeds: 1380614
};
const output = {
  data: {
    periodType: 'days',
    population: 66622705,
    region: {
      avgAge: 19.7,
      avgDailyIncomeInUSD: 5,
      avgDailyIncomePopulation: 0.71,
      name: 'Africa'
    },
    reportedCases: 674,
    timeToElapse: 58,
    totalHospitalBeds: 1380614
  },
  impact: {
    casesForICUByRequestedTime: 26502758,
    casesForVentilatorsByRequestedTime: 10601103,
    currentlyInfected: 6740,
    hospitalBedsByRequestedTime: -529571954,
    infectionsByRequestedTime: 3533701120,
    severeCasesByRequestedTime: 530055168
  },
  severeImpact: {
    casesForICUByRequestedTime: 132513792,
    casesForVentilatorsByRequestedTime: 53005516,
    currentlyInfected: 33700,
    hospitalBedsByRequestedTime: -2649792626,
    infectionsByRequestedTime: 17668505600,
    severeCasesByRequestedTime: 2650275840
  }
};
test('should estimate COVID-19 cases', () => {
  const app = covid19ImpactEstimator(input);
  expect(app).toStrictEqual(output);
});
