import {ModalProps} from '../../components/Modal/types';
import {
  DisplayOrder,
  LoadingState,
  Nullable,
  Product,
  ProductSortType,
  TimeFrame,
} from '../../types';

export type AssetsListPartialProps = {
  header?: React.ReactNode;
  products: Nullable<Product[]>;
  loading: LoadingState;
  reload: () => Promise<void>;
};

export type SummaryPartialProps = {
  products: Nullable<Product[]>;
};

export type FilterModalProps = {
  displayOrder: DisplayOrder;
  onDisplayOrderChange: (displayOrder: DisplayOrder) => void;
  timeFrame: TimeFrame;
  onTimeFrameChange: (timeFrame: TimeFrame) => void;
  productSortType?: ProductSortType;
  onProductSortTypeChange: (type?: ProductSortType) => void;
} & Pick<ModalProps, 'open' | 'onClose'>;

export type FilterItemProps = {
  label: string;
  value?: string;
  itemWidth?: number;
  items: FilterItem[];
  allowDeselect?: boolean;
  onChange: (selected?: FilterItem) => void;
};

export type FilterItem = {label: string; value: string};
