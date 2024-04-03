import React, {ReactNode} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';

interface IProps {
  children: ReactNode;
  custom?: any;
}

export function Container({children, custom}: IProps) {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          width: '100%',
        }}>
        <View className={`h-full w-full pt-10 bg-DarkViolet ${custom}`}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
