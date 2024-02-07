import React from 'react';
import {StyleSheet, Modal as RNModal, View} from 'react-native';
import {ModalProps} from './types';

const Modal = ({open, onClose, children}: ModalProps) => {
  return (
    <RNModal
      visible={open}
      onRequestClose={onClose}
      animationType="slide"
      transparent>
      <View style={styles.container} onTouchEnd={onClose}>
        <View
          style={styles.contentContainer}
          onTouchEnd={e => e.stopPropagation()}>
          {children}
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  contentContainer: {
    bottom: 0,
    position: 'absolute',
    width: '100%',
  },
});

export default Modal;
