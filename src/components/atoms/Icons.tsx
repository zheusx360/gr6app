import React, {createElement} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {IconProps} from 'react-native-vector-icons/Icon';

export const IconsType = {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  EvilIcons,
  Octicons,
  FontAwesome5,
  Entypo,
};

type Props = IconProps & {type?: keyof typeof IconsType};

export const Icons: React.FC<Props> = ({
  type = 'MaterialCommunityIcons',
  ...otherIconProps
}) => createElement(IconsType[type], otherIconProps);
