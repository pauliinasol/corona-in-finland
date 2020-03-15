import React from "react";
import styled, { keyframes, css } from "styled-components";
import { HeadingTwo } from "../utils/typography";

const CountryStyled = styled.div`
  list-style-type: none;
  text-align: left;
`;

const LocationName = styled.div`
  width: 220px;
  font-size: 20px;
  display: flex;
  align-self: center;
  @media (max-width: 768px) {
    width: 100px;
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
  display: flex;
  align-self: center;
  animation-iteration-count: 1;
  animation-duration: 800ms;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  ${({ fromY }) => css`
    animation-name: ${keyframes`
      0% { width: 0px }
      100% { width: ${fromY + 1}px}
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

export const Location = ({ districtsGrouped }) => {
  const getPx = d => (d < 220 ? d : 220);
  return (
    <>
      <ul>
        <HeadingTwo>Infection location in Finland:</HeadingTwo>
        <CountryStyled>
          {districtsGrouped.map(d => (
            <li key={districtsGrouped.id + d}>
              <LineStyled>
                <LocationName>{d[0]}</LocationName>
                <Line fromY={getPx(d[1])} />
                <LocationsLengthStyled>{d[1]}</LocationsLengthStyled>
              </LineStyled>
            </li>
          ))}
        </CountryStyled>
      </ul>
    </>
  );
};
