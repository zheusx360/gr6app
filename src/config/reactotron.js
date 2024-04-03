import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeModules} from 'react-native';
import Reactotron from 'reactotron-react-native';

const {scriptURL} = NativeModules.SourceCode;
const hostName = scriptURL.split('://')[1].split(':')[0];

const reactotron = __DEV__
  ? Reactotron.configure({host: hostName})
      .setAsyncStorageHandler(AsyncStorage)
      .useReactNative()
      .connect()
  : {
      createEnhancer: undefined,
      log: () => null,
      clear: () => null,
      display: () => null,
    };

reactotron.clear();

console.tron = reactotron;

export default reactotron;
