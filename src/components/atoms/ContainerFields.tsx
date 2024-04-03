import React from 'react';
import {Text, View} from 'react-native';

type FieldsProps = {
  text?: string;
  children?: JSX.Element;
  custom?: string;
  error?: boolean;
};

export function ContainerFields({text, children, custom, error}: FieldsProps) {
  return (
    <View
      className={`rounded-2xl h-14 py-2.5 border border-[#9360d7] self-center w-full bg-DarkViolet  justify-center items-center ${custom} ${
        error && 'border-rd-error border-2'
      }`}>
      {text && (
        <Text
          className={`text-Silver text-center bg-DarkViolet absolute -top-4 left-5 font-medium font-opensans-medium text-base px-2 ${
            error && 'text-rd-error'
          }`}>
          {text}
        </Text>
      )}
      {children}
    </View>
  );
}
