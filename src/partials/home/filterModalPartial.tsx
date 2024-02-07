import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from '../../components/Modal';
import {FilterItemProps, FilterModalProps} from './types';
import Button from '../../components/Button';
import {DisplayOrder, TimeFrame} from '../../types';

const FilterModalPartial = ({
  onClose,
  open,
  displayOrder,
  onDisplayOrderChange,
  timeFrame,
  onTimeFrameChange,
}: FilterModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <View style={styles.container}>
        <FilterItem
          label="Time interval"
          value={timeFrame}
          itemWidth={50}
          onChange={i => onTimeFrameChange(i.value as TimeFrame)}
          items={[
            {label: '1D', value: '1d' as TimeFrame},
            {label: '1M', value: '1m' as TimeFrame},
            {label: '3M', value: '3m' as TimeFrame},
            {label: '6M', value: '6m' as TimeFrame},
            {label: '1Y', value: '1y' as TimeFrame},
          ]}
        />
        <FilterItem
          label="View"
          itemWidth={70}
          onChange={() => {}}
          items={[
            {label: 'Returns', value: 'returns'},
            {label: 'Units', value: 'units'},
            {label: 'Value', value: 'value'},
            {label: 'Weight', value: 'weight'},
          ]}
        />
        <FilterItem
          label="Order"
          itemWidth={90}
          onChange={i => onDisplayOrderChange(i.value as DisplayOrder)}
          value={displayOrder}
          items={[
            {label: 'Ascending', value: 'asc' as DisplayOrder},
            {label: 'Descending', value: 'desc' as DisplayOrder},
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
  onChange,
}: FilterItemProps) => {
  return (
    <View style={styles.filterItemContainer}>
      <Text style={styles.filterItemTitle}>{label}</Text>
      <View style={styles.filterItemList}>
        {items.map(i => (
          <Button
            onPress={() => onChange(i)}
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
