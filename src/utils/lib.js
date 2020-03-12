export const filterCountries = data => {
  const countries = [];
  data.confirmed.map(d => countries.push(d.infectionSourceCountry));
  console.log(countries);
  return countries;
};
