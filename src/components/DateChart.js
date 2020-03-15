import React from "react";
import styled from "styled-components";
import { SmallText, HeadingTwo } from "../utils/typography";
import "../../node_modules/react-vis/dist/style.css";
import { format } from "date-fns";
import {
  XYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  MarkSeries,
  AreaSeries,
  XAxis,
  YAxis
} from "react-vis";
import { reverse } from "ramda";

export const DateChart = ({ dateGrouped }) => {
  const obj = dateGrouped.map(value => ({
    x: value[0],
    y: value[1]
  }));
  console.log(dateGrouped);

  return (
    <div>
      <HeadingTwo>Amount of infections per day:</HeadingTwo>
      <XYPlot height={300} width={700} xType="ordinal">
        <LineSeries data={reverse(obj)} />
        <XAxis
          tickFormat={function tickFormat(d) {
            const date = new Date(d);
            return format(new Date(date), "dd.MM");
          }}
        />
        <YAxis />
      </XYPlot>
    </div>
  );
};
