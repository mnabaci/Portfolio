export type Product = {
  logoUri: ProductName;
  name: string;
  code: string;
  type: ProductType;
  units: number;
  flatValue: number;
  percentage: number;
  gains: Gains[];
  color: string;
};

export type ProductType = 'stable_coin' | 'crypto' | 'currency';

export type Gains = {
  value: number;
  percentage: number;
  timeFrame: '1d' | '1m' | '3m' | '6m' | '1y';
};

export type TimeFrame = '1d' | '1m' | '3m' | '6m' | '1y';

export type DisplayOrder = 'asc' | 'desc';

export type ProductName = 'tether' | 'pax-gold' | 'rands' | 'ardr';

export type Nullable<T> = T | null;

export type LoadingState = 'idle' | 'pending' | 'succeeded' | 'failed';

export type ProductSortType = 'returns' | 'units' | 'value' | 'weight';
