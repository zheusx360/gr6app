import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  GestureResponderEvent,
  View,
  Text,
} from 'react-native';

export type TouchProps = TouchableOpacityProps & {
  leftItens?: JSX.Element;
  rightItens?: JSX.Element;
  error?: string;
  styles?: string;
  title?: string;
  placeholder?: any;
  custom?: string;
  onPress?: ((event: GestureResponderEvent) => void) | (() => void);
};

export function ButtonTranslucent({
  leftItens,
  rightItens,
  onPress,
  styles,
  custom,
  title,
  ...rest
}: TouchProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded-2xl mb-4 h-14 py-2.5 border border-[#9360d7] 
      self-center w-full  bg-Black/40  justify-center items-center 
      ${custom}`}
      {...rest}>
      {leftItens}
      <View className={`${leftItens ? '' : `pl-5  self-start`}`}>
        <Text className="text-white self-left text-lg">{title}</Text>
      </View>
      {rightItens}
    </TouchableOpacity>
  );
}
