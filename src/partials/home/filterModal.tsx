import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from '../../components/Modal';
import {FilterModalProps} from './types';

const FilterModal = ({onClose, open}: FilterModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <View style={styles.container}>
        <Text>Test</Text>
      </View>
    </Modal>
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
});

export default FilterModal;
