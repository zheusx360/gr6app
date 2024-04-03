import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppRoutes from './app.routes';
import {FooterTab} from '@components/molecules';

export default function Routes() {
  const [screen, setScreen] = useState();
  return (
    <NavigationContainer
      onStateChange={state => {
        setScreen(state?.routes[state.routes.length - 1].name as never);
      }}>
      <>
        <AppRoutes />
        <FooterTab screenName={screen} />
      </>
    </NavigationContainer>
  );
}
