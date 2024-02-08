import React, {useMemo, useState} from 'react';
import {LayoutChangeEvent, StyleSheet, Text, View} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import {PieChartPortionProps, PieChartProps} from './types';

const radius = 80;
const circleCircumference = 2 * Math.PI * radius;

const PieChart = ({
  portions,
  label,
  height = 160,
  width = 160,
  barWidth = 20,
  style,
}: PieChartProps) => {
  const [parentWidth, setParentWidth] = useState(width);
  const total = useMemo(
    () => portions.map(p => p.amount).reduce((a1, a2) => a1 + a2),
    [portions],
  );

  const sortedPortions = useMemo(
    () => portions.sort((p1, p2) => p1.color.localeCompare(p2.color)),
    [portions],
  );
  const onLayout = (event: LayoutChangeEvent) => {
    const {width: pWidth} = event.nativeEvent.layout;
    setParentWidth(pWidth);
  };

  return (
    <View
      style={{...styles.container, width: width, height: height, ...style}}
      onLayout={onLayout}>
      <View style={styles.graphWrapper}>
        <Svg height={parentWidth} width={parentWidth} viewBox="0 0 180 180">
          <G rotation={-90} originX="90" originY="90">
            {total === 0 ? (
              <Circle
                cx="50%"
                cy="50%"
                r={radius}
                stroke="#F1F6F9"
                fill="transparent"
                strokeWidth={barWidth}
              />
            ) : (
              <>
                {sortedPortions.map((p, i) => (
                  <Portion
                    barWidth={barWidth}
                    total={total}
                    prevTotal={
                      i === 0
                        ? 0
                        : portions
                            .slice(0, i)
                            .map(por => por.amount)
                            .reduce((a1, a2) => a1 + a2)
                    }
                    amount={p.amount}
                    color={p.color}
                    key={`${p.amount}${p.color}`}
                  />
                ))}
              </>
            )}
          </G>
        </Svg>
        {typeof label === 'string' ? (
          <Text style={styles.label}>{label}</Text>
        ) : (
          <View style={styles.content}>{label}</View>
        )}
      </View>
    </View>
  );
};

const Portion = ({
  barWidth,
  total,
  color,
  amount,
  prevTotal,
}: PieChartPortionProps) => {
  const percentage = useMemo(() => (amount / total) * 100, [amount, total]);

  const strokeDashoffset = useMemo(
    () => circleCircumference - (circleCircumference * percentage) / 100,
    [percentage],
  );

  const angle = useMemo(() => (prevTotal / total) * 360, [prevTotal, total]);

  return (
    <Circle
      cx="50%"
      cy="50%"
      r={radius}
      stroke={color}
      fill="transparent"
      strokeWidth={barWidth}
      strokeDasharray={circleCircumference}
      strokeDashoffset={strokeDashoffset}
      rotation={angle}
      originX="90"
      originY="90"
      strokeLinecap="butt"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  graphWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: 1,
  },
  label: {
    position: 'absolute',
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
    fontSize: 24,
  },
  content: {
    position: 'absolute',
  },
});

export default PieChart;
