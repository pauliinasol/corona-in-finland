import React from "react";
import styled from "styled-components";
import { HeadingTwo } from "../utils/typography";

const CountryStyled = styled.div`
  list-style-type: none;
  text-align: left;
`;

const LineStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  > * {
    margin: 10px;
  }
`;

const Line = styled.div`
  background-color: #eb8a44;
  height: 10px;
  width: 70px;
`;

export const CountryCard = ({ countries, countryOptions }) => {
  const countriesLength = c =>
    countries.filter(country => country === c).length;
  return (
    <>
      <ul>
        <HeadingTwo>Infection source country:</HeadingTwo>

        <CountryStyled>
          {countryOptions.map(c => (
            <li>
              <LineStyled>
                {c} <Line /> {countriesLength(c)}
              </LineStyled>
            </li>
          ))}
        </CountryStyled>
      </ul>
    </>
  );
};
