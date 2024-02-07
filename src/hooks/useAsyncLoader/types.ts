import {Nullable} from '../../types';

export type AsyncLoaderResult<T> = {
  data: Nullable<T>;
  loading: boolean;
  error: Nullable<Error>;
  reload: () => Promise<void>;
};
