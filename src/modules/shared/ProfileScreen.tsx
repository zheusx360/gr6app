import {BgGradient} from '@assets/images';
import {ContainerImageBg, Text} from '@components/atoms';
import {Header} from '@components/molecules';
import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '@routes/app.routes';
import React from 'react';
import {View} from 'react-native';

export function ProfileScreen() {
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();

  return (
    <ContainerImageBg
      custom={'items-center justify-center px-7'}
      imageBg={BgGradient}>
      <Header title="PERFIL" />
      <View className="flex-1 -pt-4 justify-center">
        <Text variant="title" custom="text-white">
          PERFIL
        </Text>
      </View>
    </ContainerImageBg>
  );
}
