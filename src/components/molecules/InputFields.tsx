import {Icons} from '@components/atoms';
import {ContainerFields} from '@components/atoms/ContainerFields';
import {Text} from '@components/atoms/Text';
import {useState} from 'react';
import {View, TextInputProps, ColorValue} from 'react-native';
import {Input, InputProps} from '@components/atoms/Input';

type Props = TextInputProps &
  InputProps & {
    secure?: boolean;
    secureEntry?: boolean;
    error?: string;
    text?: string;
    label: string;
    custom?: string;
    name?: string;
    placeholderColor?: ColorValue;
  };

export const InputFields = ({
  secureEntry,
  error,
  label = '',
  custom,
  name,
  placeholderColor = 'white',
  ...rest
}: Props) => {
  const [sec, setSec] = useState(secureEntry);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View>
      <ContainerFields
        custom={`${
          secureEntry
            ? 'rounded-b-2xl rounded-t-none'
            : 'rounded-t-2xl rounded-b-none'
        } ${
          isFocused
            ? 'border-[2.5px] border-[#ebae4c]'
            : 'border-[#f1b95f] border-[1px]'
        } bg-Black/40 ${custom}`}
        error={!!error}>
        <Input
          secureTextEntry={sec}
          placeholder={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={placeholderColor}
          styles={`text-White ${
            error && 'text-Silver'
          } text-base leading-5 mt-1`}
          leftItens={
            <>
              {secureEntry && (
                <Icons
                  name={sec ? 'lock' : 'unlock-alt'}
                  size={23}
                  type="FontAwesome"
                  onPress={() => setSec(!sec)}
                  className={`mr-2 ${
                    isFocused ? 'text-[#dc8a2d]' : 'text-Silver'
                  }`}
                />
              )}
              {!secureEntry && (
                <Icons
                  name={`${name}`}
                  type="FontAwesome"
                  size={22}
                  onPress={() => {}}
                  className={`mr-2 ${
                    isFocused ? 'text-[#dc8a2d]' : 'text-Silver'
                  }`}
                />
              )}
            </>
          }
          rightItens={
            <>
              {secureEntry && (
                <Icons
                  className={`ml-2 ${
                    isFocused ? 'text-[#dc8a2d]' : 'text-Silver'
                  }`}
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
