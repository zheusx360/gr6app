import {Icons} from '@components/atoms';
import {ContainerFields} from '@components/atoms/ContainerFields';
import {Text} from '@components/atoms/Text';
import {useState} from 'react';
import {View, TextInputProps} from 'react-native';
import {Input, InputProps} from '@components/atoms/Input';

type Props = TextInputProps &
  InputProps & {
    secure?: boolean;
    secureEntry?: boolean;
    error?: string;
    text?: string;
    label: string;
  };

export const InputField = ({
  secureEntry,
  error,
  label = '',
  ...rest
}: Props) => {
  const [sec, setSec] = useState(secureEntry);

  return (
    <View className="mt-6 mb-3">
      <ContainerFields text={label} error={!!error}>
        <Input
          secureTextEntry={sec}
          styles={`text-Silver ${error && 'text-Silver'} text-base leading-5`}
          leftItens={
            <>
              {secureEntry && (
                <Icons
                  name={sec ? 'lock-outline' : 'lock-open-outline'}
                  size={24}
                  onPress={() => setSec(!sec)}
                  className={`mr-2 ${error ? 'text-Silver' : 'text-Silver'}`}
                />
              )}
            </>
          }
          rightItens={
            <>
              {secureEntry && (
                <Icons
                  className={`ml-2 ${error ? 'text-Silver' : 'text-Silver'}`}
                  type="Feather"
                  name={sec ? 'eye' : 'eye-off'}
                  size={20}
                  onPress={() => setSec(!sec)}
                />
              )}
            </>
          }
          {...rest}
        />
      </ContainerFields>
      {error && (
        <Text variant="error" custom="ml-4 mt-1">
          {error}
        </Text>
      )}
    </View>
  );
};
