import {TouchableOpacity} from 'react-native';
import {Icons, IconsType} from '@components/atoms/Icons';

export type Props = {
  name: string;
  onPress(): void;
  styles?: string;
  testId?: string;
  containerStyles?: string;
  type: keyof typeof IconsType;
};
export const IconButton = (props: Props) => {
  return (
    <TouchableOpacity
      {...props}
      testID={props.testId}
      className={`w-9 h-9 justify-center  ${props.styles}`}>
      <Icons
        {...props}
        className={`text-primary-default self-center text-2xl ${props.styles}`}
      />
    </TouchableOpacity>
  );
};
