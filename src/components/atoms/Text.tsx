import {Text as RNText, TextProps} from 'react-native';

const textType = {
  title: 'text-3xl font-extrabold text-slate-900 font-opensans-medium',
  buttonTitle:
    'text-xl font-opensans-medium font-semibold text-grayscaled-primary',
  titleAcessCard: 'text-lg font-extrabold text-slate-900 font-opensans-medium',
  subtitle: 'text-base font-bold text-slate-700 font-opensans-medium',
  label: 'text-lg font-semibold text-White font-opensans-medium',
  textbutton: 'text-base font-semibold text-slate-700 font-opensans-medium',
  textInfo: 'text-lg font-normal text-white/80 font-opensans-medium',
  error: 'text-base font-normal text-rd-error font-opensans-medium',
  credentials: 'text-base font-semibold text-white/80 font-opensans',
};

interface ITypes extends TextProps {
  variant?: keyof typeof textType;
  custom?: string;
}

export const Text = ({
  children,
  variant = 'label',
  custom,
  ...rest
}: ITypes) => (
  <RNText {...rest} className={`${textType[variant]} ${custom}`}>
    {children}
  </RNText>
);
