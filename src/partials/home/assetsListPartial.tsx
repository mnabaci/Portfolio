import React, {useCallback, useState} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '../../components/Button';
import {DisplayOrder, Product, TimeFrame} from '../../types';
import ProductListItem from '../../components/ProductListItem';
import {AssetsListPartialProps} from './types';
import {FilterModalPartial} from '.';
import {LoadingPartial} from '../common';

const AssetsListPartial = ({
  header,
  products,
  loading,
  reload,
}: AssetsListPartialProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('1d');
  const [displayOrder, setDisplayOrder] = useState<DisplayOrder>('asc');

  const onModalClose = useCallback(() => setIsOpen(false), []);

  const renderItem = useCallback(
    (product: ListRenderItemInfo<Product>) => (
      <ProductListItem product={product.item} timeFrame={timeFrame} />
    ),
    [timeFrame],
  );

  if (loading) {
    return <LoadingPartial />;
  }

  // Error handling
  if (!products) {
    return <Text>An unexpected error occurred.</Text>;
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          colors={['white', 'white']}
          tintColor="white"
          refreshing={loading}
          onRefresh={reload}
        />
      }
      style={styles.list}
      keyExtractor={item => item.code}
      ListHeaderComponent={
        <>
          {header}
          <FilterModalPartial
            open={isOpen}
            onClose={onModalClose}
            timeFrame={timeFrame}
            onTimeFrameChange={setTimeFrame}
            displayOrder={displayOrder}
            onDisplayOrderChange={setDisplayOrder}
          />
          <View style={styles.container}>
            <View style={styles.actionsContainer}>
              <Text style={styles.actionsTitle}>Your holdings</Text>
              <View style={styles.filterContainer}>
                <Text style={styles.filterText}>1D</Text>
                <Button
                  icon="filter"
                  style={styles.filterButton}
                  onPress={() => setIsOpen(true)}
                />
              </View>
            </View>
          </View>
        </>
      }
      data={products}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 15, paddingVertical: 10},
  actionsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionsTitle: {color: '#ffffff', fontSize: 16, fontWeight: '600'},
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  filterText: {color: '#9ba0ae', fontSize: 16, fontWeight: '600'},
  filterButton: {
    width: 35,
    height: 35,
    borderRadius: 10,
    backgroundColor: '#2e3859',
  },
  list: {
    height: '100%',
  },
});

export default AssetsListPartial;
