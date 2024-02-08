import React, {useEffect} from 'react';
import {Layout} from '../../partials/common';
import {AssetsListPartial, SummaryPartial} from '../../partials/home';
import {useFetchProducts, useProducts} from '../../reducers/productsReducer';

function App(): React.JSX.Element {
  const fetchProducts = useFetchProducts();
  const {products, loading} = useProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Layout>
      <AssetsListPartial
        header={<SummaryPartial products={products} />}
        products={products}
        loading={loading}
        reload={async () => {
          await fetchProducts();
        }}
      />
    </Layout>
  );
}

export default App;
