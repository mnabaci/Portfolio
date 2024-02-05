import React from 'react';
import {ViewStyle} from 'react-native';

export type PieChartProps = {
  portions: PieChartPortion[];
  label: string | React.ReactNode;
  width?: number;
  height?: number;
  barWidth?: number;
  style?: ViewStyle;
};

export type PieChartPortionProps = {
  total: number;
  prevTotal: number;
  barWidth: number;
} & PieChartPortion;

export type PieChartPortion = {
  amount: number;
  color: string;
};
