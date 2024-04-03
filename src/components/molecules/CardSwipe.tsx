import {Icons, Text} from '@components/atoms';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import React from 'react';
import {View, Animated, TouchableOpacity} from 'react-native';

type Props = {
  data?: any;
  handleLeft?: any;
  handleRight?: any;
  onPress?: () => void;
};

export function CardSwipe({data, handleLeft, handleRight}: Props) {
  const LeftContent = (
    progress: any,
    dragX: Animated.AnimatedInterpolation<string | number>,
  ) => {
    const scale = dragX.interpolate({
      inputRange: [0, 200],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View className="flex-row flex-1 items-center bg-violet-900 elevation-xl border-2 border-neutral-200">
        <Icons
          name="trash-2"
          type="Feather"
          size={24}
          className="ml-5"
          color={'#e66df1'}
        />
        <Animated.Text
          className="font-medium m-3 text-white text-lg"
          style={{transform: [{scale}]}}>
          Excluir
        </Animated.Text>
      </Animated.View>
    );
  };

  const RightContent = (
    progress: any,
    dragX: Animated.AnimatedInterpolation<string | number>,
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity
        className="flex-row items-center bg-violet-900 w-20 justify-center elevation-xl border-2 border-transparent"
        onPress={handleRight}>
        <Animated.View style={{transform: [{scale}]}}>
          <Icons name="trash-2" type="Feather" size={30} color={'#e66df1'} />
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderLeftActions={LeftContent}
        //onSwipeableOpen={handleLeft}
        renderRightActions={RightContent}>
        <View className="bg-white p-4  border-2 border-r-0 border-neutral-200">
          {/* <View className="flex-row absolute top-3 left-[99%]">
            {data.icon}
          </View> */}
          <Text className="text-LightBlue font-bold ">{data.title}</Text>
          <Text className="text-slate-500">{data.aviso}</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
