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

import {View, KeyboardAvoidingView} from 'react-native';
import LottieView from 'lottie-react-native';
import {Logo} from '@assets/lottie';

export function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const {signOut} = useAuth();
  const {navigate} = useNavigation<AppNavigatorRoutesProps>();

  const {Register, loading} = useRegister();

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
            alignItems: 'center',
          }}>
          {/* <Image source={Logo} className="w-64 h-24 mb-16" resizeMode="stretch" /> */}
          <View className="w-64 h-24 mb-10">
            <LottieView style={{flex: 1}} autoPlay loop={false} source={Logo} />
          </View>
          <CardLogin custom="h-[44%]">
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
            custom="mt-6 mb-10"
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
