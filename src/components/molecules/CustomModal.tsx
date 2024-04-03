import LottieView from 'lottie-react-native';
import React, {useCallback, useEffect, useRef} from 'react';
import {
  Animated,
  Modal,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
} from 'react-native';

type ICustomModalProps = {
  isVisible: boolean;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
  labelConfirmButton: string;
  labelCancelButton: string;
  showCancelButton?: boolean;
};
import {Alert} from '@assets/lottie';

export const CustomModal = ({
  isVisible,
  message,
  onConfirm,
  onCancel,
  labelConfirmButton,
  labelCancelButton,
  showCancelButton,
}: ICustomModalProps) => {
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const handleClose = useCallback(
    (callback?: () => void) => {
      Animated.timing(fadeAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => callback && callback());
    },
    [fadeAnimation],
  );

  useEffect(() => {
    if (isVisible) {
      StatusBar.setHidden(true);
      Animated.timing(fadeAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      handleClose();
    }
  }, [isVisible, fadeAnimation, handleClose]);

  const modalStyle = {
    opacity: fadeAnimation,
    transform: [
      {
        scale: fadeAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0.2, 1],
        }),
      },
    ],
  };

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => handleClose(onCancel)}>
      <View
        className="flex-1 justify-center items-center"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
        <Animated.View
          style={modalStyle}
          className="bg-white p-7 rounded-xl items-center w-11/12 md:w-2/3 lg:w-1/2">
          <View className="bg-purple-400 rounded-full shadow-xl mb-2 shadow-black">
            <LottieView
              style={{
                width: 55,
                height: 55,
              }}
              source={Alert}
              autoPlay
            />
          </View>
          <Text className="text-lg text-gray-700 text-center mb-5 z-10">
            {message}
          </Text>
          <View className="flex-row justify-center w-full">
            {showCancelButton && onCancel && (
              <TouchableOpacity
                onPress={() => handleClose(onCancel)}
                className="bg-purple-950 py-3 px-5 mx-6 rounded-md">
                <Text className="text-white">{labelCancelButton}</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              onPress={() => handleClose(onConfirm)}
              className="bg-purple-500 py-3 mx-6 px-5 rounded-md">
              <Text className="text-white">{labelConfirmButton}</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};
