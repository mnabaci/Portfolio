import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../../components/Button';
import GradientButton from '../../components/GradientButton';
import PieChart from '../../components/PieChart';
import {SummaryPartialProps} from './types';

const SummaryPartial = ({products = []}: SummaryPartialProps) => {
  if (!products) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftActionsWrapper}>
        <Button icon="bell" />
        <GradientButton
          icon="arrow-down-right"
          fromColor="#2d3759"
          toColor="#0f1428">
          Deposit
        </GradientButton>
        <View style={styles.paddingView} />
      </View>
      <PieChart
        barWidth={5}
        style={styles.chart}
        portions={products.map(p => ({amount: p.flatValue, color: p.color}))}
        label={
          <View style={styles.chartLabel}>
            <Text style={styles.chartLabelTitle}>Portfolio value</Text>
            <Text style={styles.chartLabelValue}>
              $
              {products.length === 0
                ? 0
                : products.map(p => p.flatValue).reduce((v1, v2) => v1 + v2)}
            </Text>
          </View>
        }
      />
      <View style={styles.rightActionsWrapper}>
        <GradientButton
          icon="arrow-up-right"
          fromColor="#2d3759"
          toColor="#0f1428"
          reverseGradient>
          Withdraw
        </GradientButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 260,
  },
  leftActionsWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  chart: {
    flex: 4,
  },
  chartLabel: {top: '-15%', alignItems: 'center'},
  chartLabelTitle: {color: '#9ba0ae', marginBottom: 10},
  chartLabelValue: {color: '#ffffff', fontSize: 23, fontWeight: '600'},
  rightActionsWrapper: {flex: 1},
  paddingView: {height: 70},
});

export default SummaryPartial;
