import {DisplayOrder, ProductSortType, ProductType, TimeFrame} from '../types';

const productTypeNameMapping: Record<ProductType, string> = {
  crypto: 'Crypto',
  currency: 'Currency',
  stable_coin: 'Stable coin',
};
export const getProductTypeName = (type: ProductType) =>
  productTypeNameMapping[type];

const timeFrameMapping: Record<TimeFrame, string> = {
  '1d': '1D',
  '1m': '1M',
  '3m': '3M',
  '6m': '6M',
  '1y': '1Y',
};

export const getTimeFrameName = (timeFrame: TimeFrame) =>
  timeFrameMapping[timeFrame];

const productSortTypeNameMapping: Record<ProductSortType, string> = {
  returns: 'Returns',
  units: 'Units',
  value: 'Value',
  weight: 'Weight',
};

export const getProductSortTypeName = (type: ProductSortType) =>
  productSortTypeNameMapping[type];

const displayOrderMapping: Record<DisplayOrder, string> = {
  asc: 'Ascending',
  desc: 'Descending',
};

export const getDisplayOrderName = (order: DisplayOrder) =>
  displayOrderMapping[order];
