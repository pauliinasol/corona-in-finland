import React from "react";
import styled, { keyframes, css } from "styled-components";
import { HeadingTwo } from "../utils/typography";

const CountryStyled = styled.div`
  list-style-type: none;
  text-align: left;
`;

const LocationName = styled.div`
  width: 250px;
  font-size: 20px;
  @media (max-width: 768px) {
    width: 80px;
    font-size: 14px;
  }
`;

const LocationsLengthStyled = styled.div`
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

export const Location = ({ locations, infectionLocation }) => {
  const locationsLength = l =>
    locations.filter(location => location === l).length;

  const getCountryCode = l => (l === null ? "unknown" : l);
  return (
    <>
      <ul>
        <HeadingTwo>Infection location in Finland:</HeadingTwo>
        <CountryStyled>
          {infectionLocation.map(l => (
            <li key={infectionLocation.id + l}>
              <LineStyled>
                <LocationName>{getCountryCode(l)}</LocationName>
                <Line fromY={locationsLength(l)} />
                <LocationsLengthStyled>
                  {locationsLength(l)}
                </LocationsLengthStyled>
              </LineStyled>
            </li>
          ))}
        </CountryStyled>
      </ul>
    </>
  );
};
