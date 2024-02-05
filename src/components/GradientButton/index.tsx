import React from 'react';
import {Defs, LinearGradient, Rect, Stop, Svg} from 'react-native-svg';
import {GradientButtonProps} from './types';
import {StyleSheet} from 'react-native';
import Button from '../Button';

const GradientButton = ({
  fromColor,
  toColor,
  reverseGradient,
  children,
  ...rest
}: GradientButtonProps) => {
  return (
    <Button
      prepend={
        <Svg
          height={'100%'}
          width={'100%'}
          style={StyleSheet.absoluteFillObject}>
          <Defs>
            <LinearGradient
              id="grad"
              x1={reverseGradient ? '100%' : '10%'}
              y1="0%"
              x2={reverseGradient ? '10%' : '100%'}
              y2="0%">
              <Stop offset="0" stopColor={fromColor} />
              <Stop offset="1" stopColor={toColor} />
            </LinearGradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#grad)" />
        </Svg>
      }
      {...rest}>
      {children}
    </Button>
  );
};

export default GradientButton;
