import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProductListItemProps} from './types';
import Icon from '../Icon';
import {convertToMoney} from '../../utils/money';

const ProductListItem = ({product, timeFrame}: ProductListItemProps) => {
  const gains = useMemo(
    () => product.gains.find(g => g.timeFrame === timeFrame),
    [product, timeFrame],
  );
  const isGain = useMemo(() => !gains || gains.value >= 0, [gains]);

  const gainsColor = useMemo(
    () => (isGain ? styles.success : styles.error),
    [isGain],
  );

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.productInfoContainer}>
          <View style={styles.icon}>
            <Icon name={product.logoUri} width={40} height={40} />
          </View>
          <View style={styles.productNameContainer}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productType}>{product.type}</Text>
          </View>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.flatValue}>
            {convertToMoney(product.flatValue)}
          </Text>
          <View style={styles.gainsContainer}>
            {!gains?.value ? (
              <Text style={{color: gainsColor.color, ...styles.noGains}}>
                -
              </Text>
            ) : (
              <>
                <Text style={{...styles.gainsValue, color: gainsColor.color}}>
                  {convertToMoney(gains.value)}
                </Text>
                <View
                  style={{
                    ...styles.gainsPercentageContainer,
                    backgroundColor: gainsColor.backgroundColor,
                  }}>
                  <Icon
                    name={isGain ? 'arrow-up' : 'arrow-down'}
                    width={10}
                    height={10}
                    strokeWidth={4}
                    color={gainsColor.color}
                  />
                  <Text
                    style={{
                      ...styles.gainsPercentage,
                      color: gainsColor.color,
                    }}>
                    {gains.percentage}%
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </View>
      <View style={styles.hr} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    gap: 10,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  icon: {marginRight: 5, borderRadius: 50},
  productInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  productName: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  productType: {color: '#9ba0ae'},
  summaryContainer: {gap: 5, alignItems: 'flex-end'},
  productNameContainer: {
    gap: 5,
  },
  flatValue: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  gainsContainer: {flexDirection: 'row', gap: 10, alignItems: 'center'},
  gainsPercentageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    padding: 5,
    borderRadius: 10,
  },
  success: {color: '#2f9d8a', backgroundColor: '#142d37'},
  error: {color: '#ff6961', backgroundColor: '#ff817c30'},
  gainsPercentage: {fontSize: 14, fontWeight: '600'},
  gainsValue: {fontSize: 14, fontWeight: '600'},
  hr: {
    height: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#272c44',
    marginLeft: 70,
    marginRight: 10,
  },
  noGains: {
    paddingVertical: 5,
  },
});
export default ProductListItem;
