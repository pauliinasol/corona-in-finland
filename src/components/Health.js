import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HeadingOne } from "../utils/typography";
import { filterCountries } from "../utils/lib";
import { uniq } from "ramda";
import { CountryCard } from "./Countries";

const DataCard = styled.div`
  padding: 10px;
  font-family: "Inconsolata", monospace;
`;

const DataNumber = styled.span`
  color: #5bc8ac;
  font-weight: bold;
`;

const MainCard = styled.div`
  /* text-align: left; */
`;

export const HealthData = () => {
  const [data, setData] = useState();
  const [error, setErrors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishCoronaData"
      );
      data
        .json()
        .then(data => setData(data))
        .catch(err => setErrors(err));
    }

    fetchData();
  });

  if (!data && data === undefined) {
    return null;
  }

  const countries = filterCountries(data);
  const countryOptions = uniq(countries);

  console.log(countryOptions);

  return (
    <MainCard>
      <HeadingOne>State of corona virus in Finland</HeadingOne>
      <DataCard>
        There have been
        <DataNumber> {data.confirmed.length} </DataNumber>
        corona cases in Finland
      </DataCard>
      <DataCard>
        There have been <DataNumber>{data.deaths.length}</DataNumber> deaths in
        Finland from corona virus
      </DataCard>
      <DataCard>
        There have been <DataNumber>{data.recovered.length}</DataNumber>
        recoveries from corona virus
      </DataCard>
      <CountryCard countries={countries} countryOptions={countryOptions} />
    </MainCard>
  );
};
