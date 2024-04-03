import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

export type InputProps = TextInputProps & {
  leftItens?: JSX.Element;
  rightItens?: JSX.Element;
  error?: string;
  styles?: string;
};

export function Input({leftItens, rightItens, styles, ...rest}: InputProps) {
  return (
    <View className="w-full flex-row justify-center items-center px-4">
      {leftItens}
      <TextInput
        className={`flex-1 h-10  ${styles}`}
        keyboardAppearance="dark"
        {...rest}
      />
      {rightItens}
    </View>
  );
}
