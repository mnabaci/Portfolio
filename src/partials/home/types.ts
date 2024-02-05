import {ModalProps} from '../../components/Modal/types';
import {Product} from '../../types';

export type AssetsListPartialProps = {
  header?: React.ReactNode;
  products: Product[];
};

export type SummaryPartialProps = {
  products: Product[];
};

export type FilterModalProps = Pick<ModalProps, 'open' | 'onClose'>;
