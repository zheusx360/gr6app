import {Icons, IconsType} from '@components/atoms/Icons';
import {Text} from '@components/atoms/Text';
import React, {useEffect, useState} from 'react';
import {BackHandler, Platform, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {CustomModal} from './CustomModal';
import {useAuth} from '@modules/auth/hooks/useAuth';
import {AppNavigatorRoutesProps} from '@routes/app.routes';

type HeaderProps = {
  title: string;
  leftIconColor?: string;
  leftIconName?: string;
  leftIconType?: keyof typeof IconsType;
  leftIconSize?: number;
  iconRigthFirstColor?: string;
  iconRigthSecondColor?: string;
  iconRigthFirstScreen?: string;
  iconRightSecondScreen?: string;
  iconRightFirstName?: string;
  iconRightSecondName?: string;
  iconRightFirstType?: keyof typeof IconsType;
  iconRightSecondType?: keyof typeof IconsType;
  iconRightFirstSize?: number;
  iconRightSecondSize?: number;
  enableIconRightFirst?: boolean;
  enableIconRightSecond?: boolean;
  custom?: string;
};

export function Header({
  title,
  leftIconColor = '#fec88dcd',
  leftIconName = 'arrow-back-ios-new',
  leftIconType = 'MaterialIcons',
  leftIconSize = 26,
  iconRigthFirstColor = '#fec88dcd',
  iconRigthSecondColor = '#fec88dcd',
  iconRigthFirstScreen = 'SettingScreen',
  iconRightSecondScreen = 'SettingScreen',
  iconRightFirstSize = 24,
  iconRightSecondSize = 26,
  iconRightFirstName = 'bell',
  iconRightFirstType = 'FontAwesome',
  iconRightSecondName = 'gear',
  iconRightSecondType = 'FontAwesome',
  enableIconRightFirst = true,
  enableIconRightSecond = true,
  custom,
}: HeaderProps) {
  const {navigate, goBack} = useNavigation<AppNavigatorRoutesProps>();
  const route = useRoute();
  const [showModal, setShowModal] = useState(false);
  const {signOut} = useAuth();

  const goBackEvent = () => {
    route.name === 'HomeScreen' ? setShowModal(true) : goBack();
  };

  function handleBackButtonClick() {
    goBackEvent();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <>
      <View
        className={`w-full h-12 flex-row bg-Transparent ${
          Platform.OS === 'ios' ? '' : 'mt-3'
        } items-center top-2 justify-center ${custom}`}>
        <TouchableOpacity
          className="absolute -left-5 w-8 h-8 rounded-full justify-center items-center"
          onPress={goBackEvent}>
          <Icons
            name={leftIconName}
            color={leftIconColor}
            size={leftIconSize}
            type={leftIconType}
          />
        </TouchableOpacity>
        {enableIconRightFirst && (
          <TouchableOpacity
            className={`absolute ${
              enableIconRightSecond ? 'right-6' : '-right-3'
            }  w-8 h-8 rounded-full justify-center items-center`}
            onPress={() => navigate(iconRigthFirstScreen as never)}>
            <Icons
              name={iconRightFirstName}
              color={iconRigthFirstColor}
              size={iconRightFirstSize}
              type={iconRightFirstType}
            />
          </TouchableOpacity>
        )}
        {enableIconRightSecond && (
          <TouchableOpacity
            className={`absolute ${
              enableIconRightFirst ? '-right-4' : '-right-3'
            }  w-8 h-8 rounded-full justify-center items-center`}
            onPress={() => navigate(iconRightSecondScreen as never)}>
            <Icons
              name={iconRightSecondName}
              color={iconRigthSecondColor}
              size={iconRightSecondSize}
              type={iconRightSecondType}
            />
          </TouchableOpacity>
        )}
        <Text className="z-30 text-xl text-white">{title}</Text>
      </View>
      <CustomModal
        isVisible={showModal}
        message={'Deseja voltar para a tela de Login?'}
        onConfirm={() => {
          signOut(), navigate('AuthScreen');
        }}
        onCancel={() => setShowModal(false)}
        labelConfirmButton={'SIM'}
        labelCancelButton="NÃO"
        showCancelButton
      />
    </>
  );
}
