import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from '../../components/Modal';
import {FilterItemProps, FilterModalProps} from './types';
import Button from '../../components/Button';
import {DisplayOrder, ProductSortType, TimeFrame} from '../../types';
import {
  getDisplayOrderName,
  getProductSortTypeName,
  getTimeFrameName,
} from '../../utils/copy';

const FilterModalPartial = ({
  onClose,
  open,
  displayOrder,
  onDisplayOrderChange,
  timeFrame,
  onTimeFrameChange,
  productSortType,
  onProductSortTypeChange,
}: FilterModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <View style={styles.container}>
        <FilterItem
          label="Time interval"
          value={timeFrame}
          itemWidth={50}
          onChange={i => onTimeFrameChange(i?.value as TimeFrame)}
          items={[
            {label: getTimeFrameName('1d'), value: '1d' as TimeFrame},
            {label: getTimeFrameName('1m'), value: '1m' as TimeFrame},
            {label: getTimeFrameName('3m'), value: '3m' as TimeFrame},
            {label: getTimeFrameName('6m'), value: '6m' as TimeFrame},
            {label: getTimeFrameName('1y'), value: '1y' as TimeFrame},
          ]}
        />
        <FilterItem
          label="View"
          itemWidth={70}
          value={productSortType}
          onChange={s =>
            onProductSortTypeChange(s?.value as ProductSortType | undefined)
          }
          items={[
            {
              label: getProductSortTypeName('returns'),
              value: 'returns' as ProductSortType,
            },
            {
              label: getProductSortTypeName('units'),
              value: 'units' as ProductSortType,
            },
            {
              label: getProductSortTypeName('value'),
              value: 'value' as ProductSortType,
            },
            {
              label: getProductSortTypeName('weight'),
              value: 'weight' as ProductSortType,
            },
          ]}
          allowDeselect
        />
        <FilterItem
          label="Order"
          itemWidth={90}
          onChange={i => onDisplayOrderChange(i?.value as DisplayOrder)}
          value={displayOrder}
          items={[
            {label: getDisplayOrderName('asc'), value: 'asc' as DisplayOrder},
            {label: getDisplayOrderName('desc'), value: 'desc' as DisplayOrder},
          ]}
        />
      </View>
    </Modal>
  );
};

const FilterItem = ({
  label,
  items,
  value,
  itemWidth,
  allowDeselect,
  onChange,
}: FilterItemProps) => {
  return (
    <View style={styles.filterItemContainer}>
      <Text style={styles.filterItemTitle}>{label}</Text>
      <View style={styles.filterItemList}>
        {items.map(i => (
          <Button
            onPress={() =>
              i.value === value && allowDeselect ? onChange() : onChange(i)
            }
            style={{
              ...styles.filterItemAction,
              ...(i.value === value ? styles.selectedItem : {}),
              width: itemWidth,
            }}
            key={`${i.value}${i.label}`}>
            {i.label}
          </Button>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2b3451',
    padding: 10,
    paddingBottom: 40,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  filterItemContainer: {
    padding: 10,
    gap: 15,
  },
  filterItemTitle: {
    color: '#ffffff',
  },
  filterItemList: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
  },
  filterItemAction: {
    width: 'auto',
    height: 'auto',
    padding: 8,
    backgroundColor: '#28314b',
    borderRadius: 8,
  },
  selectedItem: {backgroundColor: '#2a2fc1'},
});

export default FilterModalPartial;
