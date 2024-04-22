import Routes from '@routes/index';
import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Text} from 'react-native-animatable';

if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setBarStyle('light-content');
  StatusBar.setTranslucent(true);
}

function App(): React.JSX.Element {
  return <Routes />;
}

export default App;
