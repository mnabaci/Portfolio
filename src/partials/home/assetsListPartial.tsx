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
import {Product} from '../../types';
import ProductListItem from '../../components/ProductListItem';
import {AssetsListPartialProps} from './types';
import {FilterModal} from '.';

const renderItem = (product: ListRenderItemInfo<Product>) => (
  <ProductListItem product={product.item} />
);

const wait = (timeout: number) => {
  // Defined the timeout function for testing purpose
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const AssetsListPartial = ({header, products}: AssetsListPartialProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onModalClose = useCallback(() => setIsOpen(false), []);

  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    wait(2000).then(() => setIsRefreshing(false));
  }, []);

  return (
    <FlatList
      refreshControl={
        <RefreshControl
          colors={['white', 'white']}
          tintColor="white"
          refreshing={isRefreshing}
          onRefresh={onRefresh}
        />
      }
      style={styles.list}
      keyExtractor={item => item.code}
      ListHeaderComponent={
        <>
          {header}
          <FilterModal open={isOpen} onClose={onModalClose} />
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
