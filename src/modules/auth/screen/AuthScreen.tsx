import {useEffect, useState} from 'react';
import {Container, Loading} from '../../../components/atoms';
import {Text} from '@components/atoms/index';
import {Buttom, TextButton, InputFields} from '@components/molecules';
import {useAuth} from '../hooks/useAuth';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {Logo, LogoGr6} from '@assets/lottie';
import {View, KeyboardAvoidingView, Dimensions} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {useStorage} from '@services/storage';
import {CardLogin} from '@components/molecules/CardLogin';
import {ContainerImageBg} from '@components/atoms/ContainerImageBg';
import {BgDark, BgGradient} from '@assets/images';
import {AppNavigatorRoutesProps} from '@routes/app.routes';

export function AuthScreen() {
  const {reset, navigate} = useNavigation<AppNavigatorRoutesProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [load, setLoad] = useState(false);
  const {signIn, user} = useAuth();
  const [saveCredentials, setSaveCredentials] = useState(false);
  const {GetData} = useStorage();
  const data = GetData('Credentials');

  const {height} = Dimensions.get('screen');

  useEffect(() => {
    if (user._id) {
      reset({
        index: 0,
        routes: [{name: 'HomeScreen' as never}],
      });
      navigate('HomeScreen' as never);
    }
  }, [user]);

  const clearCredentials = () => {
    setEmail('');
    setPassword('');
  };

  useEffect(() => {
    if (data.email) {
      signIn({
        email: data.email,
        password: data.password,
        loading: setLoad,
        saveCredentials,
      });
    }
  }, []);

  return (
    <ContainerImageBg
      imageBg={BgDark}
      custom={'items-center justify-center px-7'}>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          width: '100%',
          height: height,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View className="w-full h-64 -mb-8">
          <LottieView
            style={{flex: 1}}
            autoPlay
            loop={false}
            source={LogoGr6}
          />
        </View>
        {data.email ? (
          <View className="items-center justify-center w-full h-28">
            <Loading />
          </View>
        ) : (
          <>
            <CardLogin>
              <InputFields
                label="Email"
                name="envelope-o"
                value={email}
                onChangeText={setEmail}
              />
              <InputFields
                label="Senha"
                value={password}
                secureEntry
                onChangeText={setPassword}
              />
            </CardLogin>
            <View className="flex-row w-full items-center justify-center mt-2 pr-4">
              <Checkbox.Item
                label=""
                color="#e58f27"
                uncheckedColor="#8a7250"
                rippleColor={'transparent'}
                status={saveCredentials ? 'checked' : 'unchecked'}
                style={{
                  paddingLeft: 0,
                  borderRadius: 50,
                }}
                onPress={() => setSaveCredentials(!saveCredentials)}
              />
              <Text variant="credentials">Lembrar minhas credenciais</Text>
            </View>
            <Buttom
              title="ENTRAR"
              custom="mt-6 w-[86%]"
              isLoading={load}
              disabled={!(password.length > 5 && email.length > 2)}
              onPress={() =>
                signIn({email, password, loading: setLoad, saveCredentials})
              }
            />
            <Buttom
              title="GOOGLE"
              custom="mt-6 w-[86%]"
              isLoading={load}
              onPress={() =>
                signIn({email, password, loading: setLoad, saveCredentials})
              }
            />
            <TextButton
              onPress={() => {
                navigate('ForgotScreen');
                clearCredentials();
              }}
              custom="mt-4">
              <Text variant="credentials" custom="text-lg text-white/80">
                Não consegue acessar?
              </Text>
            </TextButton>
            <TextButton
              onPress={() => navigate('RegisterScreen')}
              custom="mt-1">
              <Text variant="credentials" custom="text-yellow-200/80">
                REGISTRAR
              </Text>
            </TextButton>
          </>
        )}
      </KeyboardAvoidingView>
    </ContainerImageBg>
  );
}
