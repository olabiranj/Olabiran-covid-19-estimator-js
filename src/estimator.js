const covid19ImpactEstimator = (data) => {
  // OUTPUT DECLARATION
  const output = {
    data: { ...data }, // the input data you got
    impact: {}, // your best case estimation
    severeImpact: {} // your severe case estimation
  };

  const getHospitalBedsByRequestedTime = (
    totalHospitalBeds,
    severeCasesByRequestedTime
  ) => {
    let useableBedSpace = Math.floor(totalHospitalBeds * 0.35);
    return useableBedSpace - severeCasesByRequestedTime;
  };

  // LOGICS
  output.impact.currentlyInfected = data.reportedCases * 10;
  output.severeImpact.currentlyInfected = data.reportedCases * 50;
  output.impact.infectionsByRequestedTime =
    output.impact.currentlyInfected * 512;
  output.severeImpact.infectionsByRequestedTime =
    output.severeImpact.currentlyInfected * 512;
  output.impact.severeCasesByRequestedTime = Math.floor(
    output.impact.infectionsByRequestedTime * 0.15
  );
  output.severeImpact.severeCasesByRequestedTime = Math.floor(
    output.severeImpact.infectionsByRequestedTime * 0.15
  );
  output.impact.HospitalBedsByRequestedTime = getHospitalBedsByRequestedTime(
    data.totalHospitalBeds,
    output.impact.severeCasesByRequestedTime
  );
  output.severeImpact.HospitalBedsByRequestedTime = getHospitalBedsByRequestedTime(
    data.totalHospitalBeds,
    output.severeImpact.severeCasesByRequestedTime
  );
  output.impact.casesForICUByRequestedTime = Math.floor(
    output.impact.severeCasesByRequestedTime * 0.05
  );
  output.severeImpact.casesForICUByRequestedTime = Math.floor(
    output.severeImpact.severeCasesByRequestedTime * 0.05
  );
  output.impact.casesForVentilatorsByRequestedTime = Math.floor(
    output.impact.severeCasesByRequestedTime * 0.02
  );
  output.severeImpact.casesForVentilatorsByRequestedTime = Math.floor(
    output.severeImpact.severeCasesByRequestedTime * 0.02
  );
  output.impact.dollarsInFlight = Math.floor(
    output.impact.severeCasesByRequestedTime *
      data.region.avgDailyIncomePopulation *
      data.region.avgDailyIncomeInUSD *
      data.timeToElapse
  );
  output.severeImpact.dollarsInFlight = Math.floor(
    output.severeImpact.severeCasesByRequestedTime *
      data.region.avgDailyIncomePopulation *
      data.region.avgDailyIncomeInUSD *
      data.timeToElapse
  );

  // OUTPUT OBJECT
  return { ...output };
};
export default covid19ImpactEstimator;
