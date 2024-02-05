import {
  Bell,
  ArrowDownRight,
  ArrowUpRight,
  FilterList,
  ArrowUp,
  ArrowDown,
  Wallet,
  ReportColumns,
  Gift,
  User,
} from 'iconoir-react-native';
import {IconName, IconProps} from './types';
import React from 'react';
import {Svg, SvgProps} from 'react-native-svg';
import Tether from '../../assets/images/products/tether.svg';
import PaxGold from '../../assets/images/products/pax-gold.svg';
import Rands from '../../assets/images/products/rands.svg';
import Ardr from '../../assets/images/products/ardr.svg';

const iconList: Record<
  IconName,
  | React.ForwardRefExoticComponent<SvgProps & React.RefAttributes<Svg>>
  | React.FC<SvgProps>
> = {
  'arrow-down-right': ArrowDownRight,
  'arrow-up-right': ArrowUpRight,
  bell: Bell,
  filter: FilterList,
  tether: Tether,
  'arrow-down': ArrowDown,
  'arrow-up': ArrowUp,
  'pax-gold': PaxGold,
  rands: Rands,
  wallet: Wallet,
  'report-columns': ReportColumns,
  gift: Gift,
  user: User,
  ardr: Ardr,
};

const Icon = ({name, ...rest}: IconProps) => {
  return <>{React.createElement(iconList[name], rest)}</>;
};

export default Icon;
