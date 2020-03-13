import React from "react";
import styled, { keyframes, css } from "styled-components";
import { HeadingTwo } from "../utils/typography";

const CountryStyled = styled.div`
  list-style-type: none;
  text-align: left;
`;

const CountryCode = styled.div`
  width: 220px;
  font-size: 20px;
  @media (max-width: 768px) {
    width: 80px;
  }
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
  @media (max-width: 768px) {
    ${({ fromY }) => css`
      animation-name: ${keyframes`
      0% { width: 0px }
      100% { width: ${fromY}px}
    `};
    `}
  }
`;

export const CountryCard = ({ countriesGrouped }) => {
  const getCountryCode = c => (c === "null" ? "unknown" : c);

  return (
    <>
      <ul>
        <HeadingTwo>Infection source country:</HeadingTwo>
        <CountryStyled>
          {countriesGrouped.map(c => (
            <li key={countriesGrouped.id + c}>
              <LineStyled>
                <CountryCode>{getCountryCode(c[0])}</CountryCode>
                <Line fromY={c[1]} />
                <CountriesLengthStyled>{c[1]}</CountriesLengthStyled>
              </LineStyled>
            </li>
          ))}
        </CountryStyled>
      </ul>
    </>
  );
};
