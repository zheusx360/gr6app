import {BgGradient} from '@assets/images';
import {ContainerImageBg, Icons, Text} from '@components/atoms';
import {BackButton} from '@components/molecules/BackButton';
import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '@routes/app.routes';
import React, {useState} from 'react';
import {Avatar} from '@assets/images';
import {Image, View} from 'react-native';
import {Header} from '@components/molecules/Header';
import {ButtonTranslucent} from '@components/atoms/ButtonTranslucent';
import {Buttom, TextButton} from '@components/molecules';
import {useAuth} from '@modules/auth/hooks/useAuth';
import * as Animatable from 'react-native-animatable';
import {CustomModal} from '@components/molecules/CustomModal';
import {ButtonSettings} from '@utils/ButtonSettings';

export function PerfilScreen() {
  const {signOut} = useAuth();
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();
  const [image, setImage] = useState(Avatar);
  const [showModal, setShowModal] = useState(false);

  function handleBackButtonClick() {
    setShowModal(true);
    return true;
  }

  return (
    <ContainerImageBg
      custom={'items-center justify-center pb-20 px-7'}
      imageBg={BgGradient}>
      <Header
        title="PERFIL"
        iconRigthFirstScreen="SettingScreen"
        enableIconRightFirst={false}
      />
      <Animatable.View
        animation={'zoomInDown'}
        duration={1000}
        className="w-full items-center">
        <View
          className={
            'w-36 h-36 border border-purple-800 rounded-full justify-center mb-5 items-center relative overflow-hidden'
          }>
          <Image className={'w-full h-full'} source={image} />
          <View className="absolute bottom-3 left-0 right-[-45%] justify-center items-center">
            <BackButton
              className="bg-white"
              name="pencil"
              onPress={() => {
                signOut(), navigate('PerfilScreen');
              }}
            />
          </View>
        </View>

        <Text className="mb-6 p-1 "> Olá, Anderson! </Text>
        {ButtonSettings.map((item, index) => (
          <ButtonTranslucent
            key={index}
            title={item.name}
            rightItens={
              <Icons
                name={item.iconName}
                type="FontAwesome"
                size={22}
                color={'white'}
                className={`absolute right-5 items-center justify-center w-auto h-auto `}
              />
            }
            onPress={() => navigate(item.navigateScreen as never)}
          />
        ))}

        <CustomModal
          isVisible={showModal}
          message={'Deseja realmente sair?'}
          onConfirm={() => {
            signOut(), navigate('AuthScreen');
          }}
          onCancel={() => setShowModal(false)}
          labelConfirmButton={'SIM'}
          labelCancelButton="NÃO"
          showCancelButton
        />
        <TextButton
          className="relative top-24 w-full p-3 bg-Black/40 justify-center border-[#9360d7]  border rounded-2xl "
          onPress={() => {
            handleBackButtonClick(), signOut();
          }}>
          <Icons
            name="door-open"
            type="FontAwesome5"
            size={20}
            className=" items-center self-center relative top-[5]"
            color={'#c1b9facd'}
          />
          <Text className="text-LightBlue font-medium">
            {' '}
            Sair do aplicativo
          </Text>
        </TextButton>
      </Animatable.View>
    </ContainerImageBg>
  );
}
