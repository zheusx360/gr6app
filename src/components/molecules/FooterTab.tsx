import {Icons, Text} from '@components/atoms';
import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {FloatingButton} from '.';
import {FloatProps} from './FloatingButton';
import {useNavigation} from '@react-navigation/native';
import {defaultTabBottom} from '@utils/defaultTabBotton';

type ItensButtomProps = {
  iconName: string;
  title: string;
  type: string;
  screenName: string;
};

type Props = FloatProps & {
  velocityIcons?: number;
  tabColor?: string;
  bgColorIcon?: string;
  itensButon?: ItensButtomProps[];
  screenName?: string;
};

export function FooterTab({
  velocityIcons = 900,
  tabColor = '#77109d',
  bgColorIcon = '#e66df1',
  funcL,
  funcR,
  funcT,
  customButtons,
  customPlusButtom,
  velocity,
  itensButon = defaultTabBottom,
  screenName = 'Auth',
}: Props) {
  const bordercolorBase = `border-[${tabColor}]`;
  const {navigate} = useNavigation<any>();
  const enableList = [
    'HomeScreen',
    'SecondScreen',
    'VideoScreen',
    'PictureScreen',
    'ProfileScreen',
    'ProfileScreen',
    'FavoriteScreen',
    'TicketScreen',
    'CourseScreen',
  ];
  const tabVisible = enableList.find(l => l === screenName);

  const [selected, setSelected] = useState(0);
  const {FloatScreen, setAnimType} = FloatingButton({
    setValue: setSelected,
    funcL,
    funcR,
    funcT,
    customButtons,
    customPlusButtom,
    velocity,
  });

  const screensPositions: any = {
    HomeScreen: 1,
    CourseScreen: 2,
    TicketScreen: 3,
    ProfileScreen: 4,
  };

  useEffect(() => {
    setSelected(screensPositions[screenName] ?? 0);
    setAnimType(2);
  }, [screenName]);

  const AnimUp = {
    from: {
      translateX: 0,
      translateY: 0,
      scale: 1,
      rotate: '0deg',
      backgroundColor: tabColor,
      borderColor: tabColor,
      borderWidth: 0,
    },
    to: {
      translateX: 0,
      translateY: -30,
      rotate: '-360deg',
      scale: 1,
      backgroundColor: bgColorIcon,
      borderColor: tabColor,
      borderWidth: 6,
    },
  };
  const AnimDown = {
    from: {
      translateX: 0,
      translateY: -30,
      scale: 1,
      rotate: '-360deg',
      borderColor: tabColor,
    },
    to: {
      translateX: 0,
      translateY: 0,
      rotate: '0deg',
      scale: 1,
      borderColor: 'transparent',
    },
  };

  const AnimShow = {
    from: {translateX: 0, translateY: 0, scale: 0, rotate: '0deg'},
    to: {
      translateX: 0,
      translateY: -25,
      rotate: '0deg',
      scale: 1,
    },
  };
  const AnimHide = {
    from: {translateX: 0, translateY: -25, scale: 1, rotate: '0deg'},
    to: {
      translateX: 0,
      translateY: 0,
      rotate: '0deg',
      scale: 0,
    },
  };

  const ItemButtom = (id: number) => (
    <View>
      <Animatable.View
        duration={velocityIcons}
        animation={selected === id ? AnimUp : AnimDown}
        className={`rounded-full border-4 ${bordercolorBase}`}>
        <TouchableOpacity
          className="w-10 h-10 rounded-full justify-center items-center"
          onPress={() => {
            navigate(itensButon[id - 1].screenName);
            setSelected(id);
            setAnimType(2);
          }}>
          <Icons
            type={itensButon[id - 1].type as never}
            name={itensButon[id - 1].iconName}
            size={24}
            color={'#fff'}
          />
        </TouchableOpacity>
      </Animatable.View>
      <Animatable.View
        className="w-11 items-center absolute top-11 "
        duration={velocityIcons}
        animation={selected === id ? AnimShow : AnimHide}
        pointerEvents="none">
        <Text custom="text-[#fff] text-sm">{itensButon[id - 1].title}</Text>
      </Animatable.View>
    </View>
  );

  return (
    <>
      {tabVisible && (
        <View
          className={`absolute bottom-0 w-[95%] mb-2 justify-between h-14 flex-row items-center px-4 rounded-2xl self-center`}
          style={{backgroundColor: tabColor}}>
          {ItemButtom(1)}
          {ItemButtom(2)}
          <View className="w-8 h-4 justify-center items-center mb-14">
            {FloatScreen}
          </View>
          {ItemButtom(3)}
          {ItemButtom(4)}
        </View>
      )}
    </>
  );
}
