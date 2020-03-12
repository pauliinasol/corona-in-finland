import React from "react";
import styled, { keyframes, css } from "styled-components";
import { HeadingTwo } from "../utils/typography";

const CountryStyled = styled.div`
  list-style-type: none;
  text-align: left;
`;

const CountryCode = styled.div`
  width: 120px;
`;

const CountriesLengthStyled = styled.div`
  margin-left: 10px;
`;

const LineStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 5px;
  * {
    display: flex;
    align-items: center;
  }
`;

const Line = styled.div`
  background-color: #eb8a44;
  height: 10px;
  animation-iteration-count: 1;
  animation-duration: 800ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  ${({ fromY }) => css`
    animation-name: ${keyframes`
      0% { width: 0px }
      100% { width: ${fromY * 3}px}
    `};
  `}
`;

export const CountryCard = ({ countries, countryOptions }) => {
  const countriesLength = c =>
    countries.filter(country => country === c).length;

  const getCountryCode = c => (c === null ? "unknown" : c);
  return (
    <>
      <ul>
        <HeadingTwo>Infection source country:</HeadingTwo>

        <CountryStyled>
          {countryOptions.map(c => (
            <li>
              <LineStyled>
                <CountryCode>{getCountryCode(c)}</CountryCode>
                <Line fromY={countriesLength(c)} />
                <CountriesLengthStyled>
                  {countriesLength(c)}
                </CountriesLengthStyled>
              </LineStyled>
            </li>
          ))}
        </CountryStyled>
      </ul>
    </>
  );
};
