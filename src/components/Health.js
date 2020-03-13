import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HeadingOne, HeadingTwo, SmallText } from "../utils/typography";
import { filterCountries, filterLocations } from "../utils/lib";
import { uniq } from "ramda";
import { CountryCard } from "./Countries";
import { LastInfection } from "./LastInfection";
import { Location } from "./Location";
import { groupBy, toPairs, sortBy, map, prop, pipe, reverse } from "ramda";

const DataCard = styled.div`
  padding: 10px;
  font-family: "Inconsolata", monospace;
  ${({ center }) =>
    center &&
    `
    display: flex;
    justify-content: center;
  `}
`;

const DataNumber = styled.span`
  color: #5bc8ac;
  font-weight: bold;
`;

const MainCard = styled.div`
  padding: 50px;
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
  }, []);

  if (!data && data === undefined) {
    return null;
  }

  const getSortedTotalCasesByProp = (propName, ...args) =>
    pipe(
      groupBy(prop(propName)),
      toPairs,
      map(([name, cases]) => [name, cases.length]),
      sortBy(prop(1)),
      reverse
    )(...args);

  const countriesGrouped = getSortedTotalCasesByProp(
    "infectionSourceCountry",
    data.confirmed
  );

  const districtsGrouped = getSortedTotalCasesByProp(
    "healthCareDistrict",
    data.confirmed
  );

  console.log(countriesGrouped);

  const lastItem = data.confirmed.slice(-1)[0];

  return (
    <MainCard>
      <HeadingOne>State of corona virus in Finland</HeadingOne>
      <DataCard>
        There have been <DataNumber> {data.confirmed.length} </DataNumber>{" "}
        corona cases in Finland
      </DataCard>
      <DataCard>
        There have been <DataNumber>{data.deaths.length}</DataNumber> death in
        Finland from corona virus
      </DataCard>
      <DataCard>
        There have been <DataNumber>{data.recovered.length}</DataNumber>{" "}
        recoveries from corona virus
      </DataCard>
      <DataCard center>
        <LastInfection lastItem={lastItem} />
      </DataCard>

      <CountryCard countriesGrouped={countriesGrouped} />
      <Location districtsGrouped={districtsGrouped} />
      <HeadingTwo>Keep calm, wash your hands and flatten the curve!</HeadingTwo>
      <SmallText>Data source: copyright (c) 2020 Helsingin Sanomat</SmallText>
      <SmallText>Find me from github: @pauliinasol</SmallText>
    </MainCard>
  );
};
