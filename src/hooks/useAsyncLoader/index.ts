import {useCallback, useEffect, useState} from 'react';
import {Nullable} from '../../types';
import {AsyncLoaderResult} from './types';

const useAsyncLoader = <T>(func: () => Promise<T>): AsyncLoaderResult<T> => {
  const [data, setData] = useState<Nullable<T>>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Nullable<Error | null>>(null);

  const loadData = useCallback(
    () =>
      func()
        .then(d => setData(d))
        .catch(setError)
        .finally(() => setLoading(false)),
    [func],
  );

  const reload = useCallback(() => {
    setLoading(true);
    return loadData();
  }, [loadData]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {data, loading, error, reload: reload};
};

export default useAsyncLoader;
