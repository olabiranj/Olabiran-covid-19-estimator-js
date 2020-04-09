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
    casesForICUByRequestedTime: 25881,
    casesForVentilatorsByRequestedTime: 10352,
    currentlyInfected: 6740,
    hospitalBedsByRequestedTime: -34418,
    infectionsByRequestedTime: 3450880,
    severeCasesByRequestedTime: 517632
  },
  severeImpact: {
    casesForICUByRequestedTime: 129408,
    casesForVentilatorsByRequestedTime: 51763,
    currentlyInfected: 33700,
    hospitalBedsByRequestedTime: -2104946,
    infectionsByRequestedTime: 17254400,
    severeCasesByRequestedTime: 2588160
  }
};
test('should estimate COVID-19 cases', () => {
  const app = covid19ImpactEstimator(input);
  expect(app).toStrictEqual(output);
});
