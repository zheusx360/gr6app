import React from 'react';
import {View, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {Loading} from '../atoms/Loading';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {Text} from '@components/atoms';

type Props = TouchableOpacityProps & {
  isLoading?: boolean;
  title: string;
  custom?: string;
  itemLeft?: JSX.Element;
  itemRight?: JSX.Element;
  color1?: string;
  color2?: string;
  color3?: string;
  angle?: number;
  angleCenter?: {x: number; y: number};
  customText?: string;
};

export function Buttom({
  isLoading,
  title,
  custom,
  itemLeft,
  itemRight,
  color1 = '#ad6206',
  color2 = '#744118',
  color3,
  angle,
  angleCenter,
  customText,
  ...rest
}: Props) {
  const stateStyle = rest.disabled
    ? `shadow-lg shadow-Black`
    : 'shadow-lg shadow-Black';
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      {...rest}
      className={`flex rounded-2xl h-14 w-full justify-center bg-transparent items-center ${custom}`}
      disabled={isLoading || rest.disabled}>
      <LinearGradient
        className={`flex-row items-center h-full w-full justify-center flex rounded-2xl ${stateStyle}`}
        colors={color3 ? [color1, color2, color3] : [color1, color2]}
        angle={angle}
        useAngle={!!angle}
        angleCenter={angleCenter}>
        {!isLoading && (
          <>
            {itemLeft}
            <Text
              className={`${
                rest.disabled ? 'text-gray-400/50' : 'text-gray-200'
              }  text-xl font-opensans-regular font-medium ${customText}`}>
              {title}
            </Text>
            {itemRight}
          </>
        )}
      </LinearGradient>

      {isLoading && <Loading />}
    </TouchableOpacity>
  );
}
