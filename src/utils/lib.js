export const filterCountries = data => {
  const countries = [];
  data.confirmed
    // .filter(
    //   d =>
    //     d.infectionSourceCountry !== null && d.infectionSourceCountry.length > 0

    // )
    .map(d => countries.push(d.infectionSourceCountry));
  console.log(countries);
  return countries;
};
