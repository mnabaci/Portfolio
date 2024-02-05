import {ButtonProps} from '../Button/types';

export type GradientButtonProps = {
  fromColor: string;
  toColor: string;
  reverseGradient?: boolean;
} & ButtonProps;
