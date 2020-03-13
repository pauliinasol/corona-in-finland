export const filterCountries = data => {
  const countries = [];
  data.confirmed.map(d => countries.push(d.infectionSourceCountry));
  return countries;
};

export const filterLocations = data => {
  const countries = [];
  data.confirmed.map(d => countries.push(d.healthCareDistrict));
  return countries;
};
