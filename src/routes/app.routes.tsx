import React, {useEffect} from 'react';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Colors from '@themes/colors.json';

const Root = createNativeStackNavigator();
import {AuthScreen} from '../modules/auth/screen/AuthScreen';
import {HomeScreen} from '@modules/shared/HomeScreen';
import {ForgotScreen} from '@modules/auth/screen/ForgotScreen';
import {RegisterScreen} from '@modules/auth/screen/RegisterScreen';
import {CourseScreen} from '@modules/shared/CourseScreen';
import {FavoriteScreen} from '@modules/shared/FavoriteScreen';
import {VideoScreen} from '@modules/shared/VideoScreen';
import {PictureScreen} from '@modules/shared/PictureScreen';
import {ProfileScreen} from '@modules/shared/ProfileScreen';
import {TicketScreen} from '@modules/shared/TicketScreen';
import {SettingScreen} from '@modules/shared/SettingScreen';
import {NotificationScreen} from '@modules/shared/NotificationScreen';
import {PerfilScreen} from '@modules/shared/PerfilScreen';

export type AppRoutesNavigation = {
  AuthScreen: undefined;
  HomeScreen: undefined;
  ForgotScreen: undefined;
  RegisterScreen: undefined;
  SecondScreen: undefined;
  FavoriteScreen: undefined;
  VideoScreen: undefined;
  PictureScreen: undefined;
  ProfileScreen: undefined;
  TicketScreen: undefined;
  PerfilScreen: undefined;
  NotificationScreen: undefined;
};

export type AppNavigatorRoutesProps =
  NativeStackNavigationProp<AppRoutesNavigation>;

export default function AppRoutes() {
  return (
    <>
      <Root.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Auth">
        <Root.Screen
          name="AuthScreen"
          component={AuthScreen}
          options={{statusBarHidden: true}}
        />
        <Root.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{statusBarHidden: true}}
        />
        <Root.Screen
          name="CourseScreen"
          component={CourseScreen}
          options={{statusBarHidden: true}}
        />
        <Root.Screen
          name="ForgotScreen"
          component={ForgotScreen}
          options={{
            statusBarHidden: true,
          }}
        />
        <Root.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            statusBarHidden: true,
          }}
        />
        <Root.Screen
          name="FavoriteScreen"
          component={FavoriteScreen}
          options={{
            statusBarHidden: true,
          }}
        />
        <Root.Screen
          name="VideoScreen"
          component={VideoScreen}
          options={{
            statusBarHidden: true,
          }}
        />
        <Root.Screen
          name="PictureScreen"
          component={PictureScreen}
          options={{
            statusBarHidden: true,
          }}
        />
        <Root.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            statusBarHidden: true,
          }}
        />
        <Root.Screen
          name="PerfilScreen"
          component={PerfilScreen}
          options={{
            statusBarHidden: true,
          }}
        />
        <Root.Screen
          name="TicketScreen"
          component={TicketScreen}
          options={{
            statusBarHidden: true,
          }}
        />
        <Root.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            statusBarHidden: true,
          }}
        />
        <Root.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            statusBarHidden: true,
          }}
        />
      </Root.Navigator>
      {/* <FooterTab /> */}
    </>
  );
}
function setShowModal(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function goBack() {
  throw new Error('Function not implemented.');
}
