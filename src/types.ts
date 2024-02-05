export type Product = {
  logoUri: ProductName;
  name: string;
  code: string;
  type: 'stable_coin' | '';
  units: number;
  flatValue: number;
  percentage: number;
  gainsValue: number;
  gainsPercentage: number;
  color: string;
};

export type ProductName = 'tether' | 'pax-gold' | 'rands' | 'ardr';

export type Nullable<T> = T | null;
