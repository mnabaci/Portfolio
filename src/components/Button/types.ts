import React from 'react';
import {IconName} from '../Icon/types';
import {ViewStyle} from 'react-native';

export type ButtonProps = {
  width?: number;
  height?: number;
  children?: string;
  prepend?: React.ReactNode;
  icon?: IconName;
  style?: ViewStyle;
  color?: string;
  onPress?: () => void;
};
