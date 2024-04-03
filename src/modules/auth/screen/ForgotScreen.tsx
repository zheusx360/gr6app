import {useEffect, useState} from 'react';
import {Container, Icons, Text} from '@components/atoms';
import {BackButton} from '@components/molecules/BackButton';
import {useAuth} from '@modules/auth/hooks/useAuth';
import {Alert, Dimensions, Image} from 'react-native';
import {Logo, LogoGr6} from '@assets/lottie';
import {useNavigation} from '@react-navigation/native';
import {Buttom, Header, InputFields, TextButton} from '@components/molecules';
import {AppNavigatorRoutesProps} from '@routes/app.routes';
import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {useEmail} from '@modules/auth/hooks/useForgotpassword';
import {ContainerImageBg} from '@components/atoms/ContainerImageBg';
import {BgGradient} from '@assets/images';
import CodeInput from '@components/molecules/CodeField';
import LottieView from 'lottie-react-native';
import {SnackBarMessage} from '@components/molecules/SnackBar';

export function ForgotScreen() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [contador, setContador] = useState<number>(0);
  const styleView =
    'bg-black/40 border-2 border-orange-300/10 px-8 py-11 justify-center items-center w-[94%] rounded-lg';

  const {
    sendEmail,
    resetPassword,
    verifyToken,
    numberPage = 1,
    loading,
  } = useEmail();

  const {height} = Dimensions.get('screen');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContador(prevContador => prevContador - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [contador]);

  const counterResendEmail = () => {
    if (contador <= 1) {
      setContador(45);
      sendEmail(email);
    } else {
      SnackBarMessage({
        message: `Aguarde ${contador} segundos para o reenvio.`,
        type: 'alert',
      });
    }
  };

  return (
    <>
      <ContainerImageBg
        imageBg={BgGradient}
        custom={'items-center justify-center p-0'}
        headerItem={
          <Header
            title=""
            enableIconRightFirst={false}
            enableIconRightSecond={false}
          />
        }>
        <KeyboardAvoidingView
          behavior="padding"
          style={{
            width: '100%',
            height: 'auto',
            justifyContent: 'center',
            marginTop: '5%',
            position: 'relative',
            alignItems: 'center',
          }}>
          <>
            {numberPage === 0 && (
              <>
                <View className="w-80 h-60 -mb-8">
                  <LottieView
                    style={{flex: 1}}
                    autoPlay
                    loop={false}
                    source={LogoGr6}
                  />
                </View>
                <View className={styleView}>
                  <View className="mb-8">
                    <Text
                      variant="title"
                      custom="text-white/80 text-3xl text-center font-semibold">
                      Esqueceu sua senha?
                    </Text>
                    <Text
                      variant="label"
                      custom="text-yellow-300/80 mt-8 text-center"
                      style={{fontWeight: '400'}}>
                      Informe seu email para enviarmos um código de verificação.
                    </Text>
                  </View>

                  <InputFields
                    label="email"
                    name="envelope-o"
                    custom="rounded-t-2xl rounded-b-2xl"
                    onChangeText={setEmail}
                  />

                  <Buttom
                    title="ENVIAR"
                    custom="mt-10 mb-10"
                    isLoading={loading}
                    disabled={!(email.length > 5)}
                    onPress={() => sendEmail(email)}
                  />
                </View>
              </>
            )}

            {numberPage === 1 && (
              <>
                <View className="w-80 h-60 -mb-8">
                  <LottieView
                    style={{flex: 1}}
                    autoPlay
                    loop={false}
                    source={LogoGr6}
                  />
                </View>
                <View className={styleView}>
                  <View>
                    <CodeInput onChange={setCode} />
                  </View>
                  <TextButton
                    onPress={() => counterResendEmail()}
                    disabled={loading}
                    custom="mt-2"
                    customText="ml-2"
                    itemLeft={
                      <Icons
                        size={20}
                        color={'#b57815'}
                        type="Feather"
                        name={'mail'}
                      />
                    }>
                    <Text variant="credentials" custom="text-yellow-200/80">
                      Reenviar código
                    </Text>
                  </TextButton>
                  <Text custom="text-sm mt-2 text-Silver">
                    {contador > 0 ? `Aguade ${contador} segundos` : ''}
                  </Text>
                  <Buttom
                    title="ENVIAR"
                    custom="mt-3 w-11/12 mb-5"
                    isLoading={loading}
                    disabled={!(code.length > 5)}
                    onPress={() => verifyToken(code)}
                  />
                  <Text
                    custom="text-sm text-center mt-2 text-yellow-200/80"
                    style={{marginBottom: -25}}>
                    Caso não encontre seu código verifique a sua caixa de spam.
                  </Text>
                </View>
              </>
            )}

            {numberPage === 2 && (
              <>
                <View className="w-80 h-60 -mb-8">
                  <LottieView
                    style={{flex: 1}}
                    autoPlay
                    loop={false}
                    source={LogoGr6}
                  />
                </View>
                <View className={styleView}>
                  <Text className="text-white/80 mb-5 font-semibold text-xl text-center">
                    Crie uma nova senha
                  </Text>
                  <InputFields
                    label="Senha"
                    secureEntry
                    custom="rounded-t-2xl rounded-b-2xl"
                    onChangeText={setPassword}
                  />
                  <Buttom
                    title="CRIAR NOVA SENHA"
                    custom="mt-8 w-full h-15 mb-10"
                    disabled={!(password.length > 5)}
                    isLoading={loading}
                    onPress={() => resetPassword(password)}
                  />
                </View>
              </>
            )}
          </>
        </KeyboardAvoidingView>
      </ContainerImageBg>
    </>
  );
}
