import {SvgProps} from 'react-native-svg';
import {ProductName} from '../../types';

export type IconProps = {name: IconName} & SvgProps;
export type IconName =
  | 'arrow-down-right'
  | 'arrow-up-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'bell'
  | 'filter'
  | 'wallet'
  | 'report-columns'
  | 'gift'
  | 'user'
  | ProductName;
