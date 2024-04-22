import React from 'react';
import {SafeAreaView, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  children: JSX.Element[] | JSX.Element;
  custom?: string;
};

export const CardLogin = ({children, custom}: Props) => {
  return (
    <SafeAreaView className={`w-[100%] h-[26%] ${custom}`}>
      <View className="w-full h-full">
        <LinearGradient
          className="flex-1 rounded-3xl items-center justify-center p-[7%] border border-orange-400/50"
          colors={['rgba(40, 40, 40, 0.522)', 'rgba(20, 20, 20, 0.500)']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 1}}
          useAngle
          angle={180}>
          {children}
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};
