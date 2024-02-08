import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {LayoutPartialProps} from './types';
import Button from '../../components/Button';

const LayoutPartial = ({children}: LayoutPartialProps) => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={styles.background.backgroundColor}
      />
      <View style={styles.main}>{children}</View>
      <View style={styles.footer}>
        <Button icon="wallet" style={styles.footerButton}>
          Portfolio
        </Button>
        <Button
          icon="report-columns"
          color="#9195a0"
          style={styles.footerButton}>
          Products
        </Button>
        <Button icon="gift" color="#9195a0" style={styles.footerButton}>
          Rewards
        </Button>
        <Button icon="user" color="#9195a0" style={styles.footerButton}>
          Profile
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {backgroundColor: '#0f1428'},
  footerButton: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderTopLeftRadius: 20,
    paddingVertical: 10,
    borderTopRightRadius: 20,
    backgroundColor: '#1c233df3',
  },
  main: {height: '100%'},
});

export default LayoutPartial;
