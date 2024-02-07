import {Product} from '../../types';
import data from '../../../src/data.json';

export default class ProductService {
  static readonly fetchProducts = async (): Promise<Product[]> => {
    return new Promise(resolve =>
      setTimeout(() => resolve(data as Product[]), 2000),
    );
  };
}
