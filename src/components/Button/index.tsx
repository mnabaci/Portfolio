import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ButtonProps} from './types';
import Icon from '../Icon';

const Button = ({
  width = 70,
  height = 70,
  style,
  children,
  icon,
  prepend,
  color,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={{...styles.button, width: width, height: height, ...style}}
      onPress={onPress}
      activeOpacity={0.7}>
      {prepend}
      {(children || icon) && (
        <View style={styles.content}>
          {icon && (
            <Icon name={icon} width={20} height={20} color={color ?? 'white'} />
          )}
          {children && (
            <Text style={{...styles.text, color: color ?? styles.text.color}}>
              {children}
            </Text>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});

export default Button;
