import {Icons} from '@components/atoms/Icons';
import {useAuth} from '@modules/auth/hooks/useAuth';
import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

type IProps = TouchableOpacityProps & {
  name?: string;
  sizeIcon?: number;
  custom?: string;
};

export function BackButton({custom, name, sizeIcon, ...rest}: IProps) {
  return (
    <TouchableOpacity
      className={`w-8 h-8 bg-Violet31/70 items-center justify-center rounded-full ${custom}`}
      {...rest}>
      <Icons name={name || 'chevron-left'} size={sizeIcon || 28} />
    </TouchableOpacity>
  );
}
