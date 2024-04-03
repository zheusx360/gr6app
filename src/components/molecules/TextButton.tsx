import {Text} from '@components/atoms/Text';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

type Props = TouchableOpacityProps & {
  custom?: string;
  customText?: string;
  itemLeft?: JSX.Element;
  itemRight?: JSX.Element;
  disabled?: boolean;
};

export const TextButton = ({
  children,
  custom,
  customText,
  itemLeft,
  itemRight,
  disabled,
  ...rest
}: Props) => (
  <TouchableOpacity
    disabled={disabled}
    {...rest}
    className={`flex-row justify-start items-center ${custom}`}>
    {itemLeft}
    <Text custom={customText} variant="textbutton">
      {children}
    </Text>
    {itemRight}
  </TouchableOpacity>
);
