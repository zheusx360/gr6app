import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Icons} from '@components/atoms';
import {useNavigation} from '@react-navigation/native';
import {defaltFloatNavigation} from '@utils/defaultTabBotton';

export type FloatProps = {
  customButtons?: string;
  velocity?: number;
  customPlusButtom?: string;
  setValue?: React.Dispatch<React.SetStateAction<number>>;
  funcL?: () => void;
  funcT?: () => void;
  funcR?: () => void;
};

export const FloatingButton = ({
  velocity = 800,
  customButtons,
  customPlusButtom,
  setValue,
  funcL = () => {},
  funcT = () => {},
  funcR = () => {},
}: FloatProps) => {
  const [animType, setAnimType] = useState(0);
  const [animate, setAnimate] = useState(true);
  const {navigate} = useNavigation<any>();

  const handlePress = () => {
    setAnimType(animType === 1 ? 0 : 1);
    setAnimate(false);
    if (setValue) {
      setValue(0);
    }
  };

  type ITypes = {
    type: object;
    icon: string;
    iconType: any;
    func: () => void;
  };

  //Tipos de animação
  const animSelect = (
    iniX: number,
    iniY: number,
    finX: number,
    finY: number,
    rotate: string,
    finalRotate: string,
  ) =>
    animType === 1
      ? {
          from: {translateX: iniX, translateY: iniY, scale: 0, rotate: rotate},
          to: {
            translateX: finX,
            translateY: finY,
            rotate: finalRotate,
            scale: 1,
          },
        }
      : animType === 2
      ? {
          from: {translateX: 0, translateY: 0, scale: 0, rotate: rotate},
          to: {
            translateX: 0,
            translateY: 0,
            rotate: finalRotate,
            scale: 0,
          },
        }
      : {
          from: {
            translateX: finX,
            translateY: finY,
            rotate: rotate,
            scale: 1,
          },
          to: {
            translateX: iniX,
            translateY: iniY,
            rotate: finalRotate,
            scale: 0,
          },
        };

  const animPlus =
    animType === 1
      ? {
          from: {
            rotate: '0deg',
          },
          to: {
            rotate: '225deg',
          },
        }
      : {
          from: {
            rotate: '225deg',
          },
          to: {
            rotate: '0deg',
          },
        };

  //Botoes animados
  const AnimView = ({type, icon, iconType, func}: ITypes) => (
    <Animatable.View
      duration={velocity}
      animation={type as never}
      className={`absolute w-[60] h-[60] items-center justify-center`}
      pointerEvents={animType === 0 ? 'none' : 'auto'}>
      <TouchableOpacity
        activeOpacity={0.5}
        style={{backgroundColor: '#e66df1', borderColor: '#77109d'}}
        className={`items-center justify-center w-[45] h-[45] rounded-full border-2 elevation-md ${customButtons}`}
        onPress={func}>
        <Icons type={iconType} name={icon} size={25} color={'#fff'} />
      </TouchableOpacity>
    </Animatable.View>
  );

  const FloatScreen = (
    <View className="items-center justify-center">
      <Animatable.View
        animation="fadeIn"
        className="items-center justify-center z-30">
        <TouchableOpacity
          style={{borderColor: '#77109d'}}
          activeOpacity={1}
          className={`items-center justify-center w-[60] h-[60] rounded-full bg-purple-700 border-4 elevation-md ${customPlusButtom}`}
          onPress={handlePress}>
          <Animatable.View animation={animPlus as never}>
            <Icons
              type="Feather"
              name="plus"
              size={33}
              color={
                animType === 1 ? '#431c52' : animType === 2 ? '#EEE' : '#fff'
              }
            />
          </Animatable.View>
        </TouchableOpacity>
      </Animatable.View>
      {AnimView({
        type: animSelect(0, 0, 65, -50, '360deg', '0deg'),
        icon: defaltFloatNavigation[0].iconName,
        iconType: defaltFloatNavigation[0].type,
        func: () => navigate(defaltFloatNavigation[0].screenName),
      })}
      {AnimView({
        type: animSelect(0, 0, -65, -50, '360deg', '-0deg'),
        icon: defaltFloatNavigation[1].iconName,
        iconType: defaltFloatNavigation[1].type,
        func: () => navigate(defaltFloatNavigation[1].screenName),
      })}
      {AnimView({
        type: animSelect(0, 0, 0, -90, '360deg', '0deg'),
        icon: defaltFloatNavigation[2].iconName,
        iconType: defaltFloatNavigation[2].type,
        func: () => navigate(defaltFloatNavigation[2].screenName),
      })}
    </View>
  );

  return {
    FloatScreen: FloatScreen,
    setAnimType: setAnimType,
  };
};
