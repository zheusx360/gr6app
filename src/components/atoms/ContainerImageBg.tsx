import React from 'react';
import {
  ImageBackground,
  ImageBackgroundProps,
  ScrollView,
  View,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type Props = {
  custom: string;
  children: JSX.Element[] | JSX.Element;
  footerItem?: JSX.Element;
  imageBg: ImageBackgroundProps;
  headerItem?: JSX.Element;
  height?: string | number;
};

export function ContainerImageBg({
  custom,
  children,
  imageBg,
  footerItem,
  headerItem,
}: Props) {
  const {width, height} = Dimensions.get('screen');

  return (
    <SafeAreaView className="flex-1" edges={['top', 'left', 'right']}>
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        className="w-full h-[103%] absolute"
      />
      <View className="justify-center items-center px-7">{headerItem}</View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'center',
          width: width,
          height: 'auto',
          paddingBottom: 0,
          backgroundColor: 'transparent',
        }}>
        <View className={`flex-1 bg-transparent-300 px-10  ${custom}`}>
          {children}
        </View>
      </ScrollView>
      {footerItem}
    </SafeAreaView>
  );
}
