export const convertToMoney = (value: number, decimals: number = 2) =>
  `$${(Math.round((value + Number.EPSILON) * 100) / 100).toFixed(decimals)}`;
