import {BgGradient} from '@assets/images';
import {ContainerImageBg, Icons, Text} from '@components/atoms';
import {Buttom, Header, IconButton, TextButton} from '@components/molecules';
import {CardSwipe} from '@components/molecules/CardSwipe';
import {CustomModal} from '@components/molecules/CustomModal';
import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '@routes/app.routes';
import React, {useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
import {Modal} from 'react-native-paper';

export function NotificationScreen() {
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();
  const [showModal, setShowModal] = useState(false);

  const notificacao = [
    {
      id: '1',
      icon: (
        <Icons name="bell" type="FontAwesome" size={22} color={'#4c1d95'} />
      ),
      title: 'Seja um profissional',
      aviso: 'Promoção do curso',
    },
    {id: '2', title: 'Arte da pigmentação', aviso: 'Pigmentação ostentação'},
    {id: '3', aviso: 'Produtos de beleza'},
    {
      id: '4',
      aviso:
        'Eventos e congressos, sua opurtunidade de estar nesse evento demonstrando sua técnica',
    },
    {id: '5', aviso: 'Promoção do curso'},
    {
      id: '6',
      title: 'Seja um profissional',
      aviso:
        'Eventos e congressos, sua opurtunidade de estar nesse evento demonstrando sua técnica',
    },
    {id: '7', aviso: 'Produtos de beleza'},
    {id: '8', aviso: 'Produtos de beleza'},
    {
      id: '9',
      aviso:
        'Eventos e congressos, sua opurtunidade de estar nesse evento demonstrando sua técnica',
    },
    {id: '10', aviso: 'Produtos de beleza'},
  ];

  return (
    <View className="flex-1 bg-violet-900 mb-12">
      <View className="w-[85%] self-center">
        <Header
          title="NOTIFICAÇÕES"
          iconRigthFirstScreen="SettingScreen"
          enableIconRightFirst={false}
        />
      </View>
      <Text className="absolute top-24 text-DodgerBlue font-normal self-center">
        deslize para excluir suas notificações
      </Text>
      <View className="flex-1 bg-white mt-32">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notificacao}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <CardSwipe
              data={item}
              handleLeft={() =>
                Alert.alert('Notificação excluida com sucesso!')
              }
              handleRight={() => Alert.alert('Notificação excluida!')}
            />
          )}
          ItemSeparatorComponent={() => <Separator />}
        />
        <View
          className=" bg-violet-900 w-full flex-row justify-center items-center self-center 
                          absolute bottom-[-49] border-l-transparent border-r-transparent 
                          border border-t-neutral-200 elevation-xl ">
          <TextButton className=" rounded-lg p-4 left-24 ">
            <View className="justify-center items-center self-center ">
              <Icons
                name="bell"
                type="FontAwesome"
                size={20}
                className="w-7 items-center self-center relative top-[5]"
                color={'#d9b9facd'}
              />
              <CustomModal
                isVisible={showModal}
                message={'Deseja realmente limpar todas notificações?'}
                onConfirm={() => {
                  navigate('HomeScreen');
                }}
                onCancel={() => setShowModal(false)}
                labelConfirmButton={'SIM'}
                labelCancelButton="NÃO"
                showCancelButton
              />
            </View>

            <Text
              variant="credentials"
              custom="text-DodgerBlue"
              onPress={() => {
                setShowModal(true);
              }}>
              Limpar notificações
            </Text>
          </TextButton>
        </View>
      </View>
    </View>
  );
}
const Separator = () => (
  <View className="flex-1 h-[1] bg-[#d9b9facd] elevation-sm"></View>
);
