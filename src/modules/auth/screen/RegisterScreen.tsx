import {Container, Text} from '@components/atoms';
import {BackButton} from '@components/molecules/BackButton';
import {useAuth} from '@modules/auth/hooks/useAuth';
import {useNavigation} from '@react-navigation/native';
import {AppNavigatorRoutesProps} from '@routes/app.routes';
import {Buttom, CardLogin, Header, InputFields} from '@components/molecules';
import {ContainerImageBg} from '@components/atoms/ContainerImageBg';
import {BgGradient} from '@assets/images';
import {useRegister} from '@modules/auth/hooks/useRegister';

import {useState} from 'react';

import {View, KeyboardAvoidingView, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import {Logo, LogoGr6} from '@assets/lottie';

export function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const {signOut} = useAuth();
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();

  const {Register, loading} = useRegister();
  const {height} = Dimensions.get('screen');

  return (
    <>
      <ContainerImageBg
        imageBg={BgGradient}
        custom={'items-center justify-center px-7'}>
        <Header
          title=""
          enableIconRightFirst={false}
          enableIconRightSecond={false}
        />
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            width: '100%',
            height: height,
            alignItems: 'center',
          }}>
          <View className="w-80 h-60">
            <LottieView
              style={{flex: 1}}
              autoPlay
              loop={false}
              source={LogoGr6}
            />
          </View>
          <CardLogin custom="min-h-[30%]">
            <InputFields
              label="Nome"
              name="user-circle"
              onChangeText={setName}
            />
            <InputFields
              label="email"
              name="envelope-o"
              onChangeText={setEmail}
              custom={'rounded-none'}
            />
            <InputFields label="Senha" secureEntry onChangeText={setPassword} />
          </CardLogin>
          <Buttom
            title="REGISTRAR"
            custom="mt-10"
            isLoading={loading}
            disabled={
              !(password.length > 5 && email.length > 2 && name.length > 1)
            }
            onPress={() => Register({name, email, password})}
          />
        </KeyboardAvoidingView>
      </ContainerImageBg>
    </>
  );
}
