import {BgGradient} from '@assets/images';
import {ContainerImageBg, Text} from '@components/atoms';
import {Header} from '@components/molecules';
import React from 'react';
import {View} from 'react-native';

export function HomeScreen() {
  return (
    <ContainerImageBg
      custom={'items-center justify-center px-7'}
      imageBg={BgGradient}>
      <Header title="HOME" iconRigthFirstScreen="NotificationScreen" />
      <View className="flex-1 -pt-4 justify-center">
        <Text variant="title" custom="text-white">
          HOME SCREEN
        </Text>
      </View>
    </ContainerImageBg>
  );
}
