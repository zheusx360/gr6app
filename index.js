if (__DEV__) {
  import('./src/config/reactotron').then(() =>
    console.log('Reactotron Configured'),
  );
}
console.ignoredYellowBox = true;

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
