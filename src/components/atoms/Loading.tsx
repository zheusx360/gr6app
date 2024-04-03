import React from 'react';
import {View, ActivityIndicator, ActivityIndicatorProps} from 'react-native';
import colors from '@themes/colors.json';

type Props = ActivityIndicatorProps & {
  styles?: string;
  variant?: keyof typeof loadingTypes;
};

const defaultStyle =
  'absolute bg-transparent opacity-75 flex-1 justify-center items-center';

const loadingTypes = {
  default: `${defaultStyle}`,
  fullscreen: `${defaultStyle} inset-x-0 inset-y-0 bg-black/60`,
};

export function Loading({styles, variant = 'default', ...rest}: Props) {
  return (
    <View className={`${loadingTypes[variant]} ${styles}`}>
      <ActivityIndicator size="large" color="#EEE" {...rest} />
    </View>
  );
}
