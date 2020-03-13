import React from "react";
import styled from "styled-components";
import { SmallText, SmallTextColor } from "../utils/typography";
import { format } from "date-fns";

const LastInfectionStyled = styled.div`
  min-height: 40px;
  width: 300px;
  border: 1px solid #5bc8ac;
  border-radius: 20px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfectionItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
`;

const ItemAnim = styled.span`
  animation-name: animation;
  animation-duration: 400ms; /* or: Xms */
  animation-iteration-count: 1;
  animation-timing-function: ease-in; /* or: ease, ease-in, ease-in-out, linear, cubic-bezier(x1, y1, x2, y2) */
  animation-fill-mode: forwards; /* or: backwards, both, none */
  @keyframes animation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const LastInfection = ({ lastItem }) => {
  return (
    <LastInfectionStyled>
      <SmallText>Last Infection:</SmallText>
      <SmallTextColor>
        <InfectionItemStyled>
          <ItemAnim>
            {lastItem.healthCareDistrict && lastItem.healthCareDistrict}:{" "}
          </ItemAnim>
          <ItemAnim>
            {lastItem.date && format(new Date(lastItem.date), "dd-MM-yyyy")}
          </ItemAnim>
        </InfectionItemStyled>
      </SmallTextColor>
    </LastInfectionStyled>
  );
};
