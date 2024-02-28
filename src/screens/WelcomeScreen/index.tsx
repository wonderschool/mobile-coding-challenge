import React, { useEffect, useRef } from 'react';
import type { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

/**
 * MOCK LAUNCH SCREEN
 * This screen is not necessary, but it using a mock loading screen
 * to showcase navigation and screen abstraction
 * we could also use this screen to handle app initialization
 * background requests, tasks, etc.
 * usually this screen is animated to provide feedback to the user that something is loading
 */
const WelcomeScreen: FC = () => {
  const navigation = useNavigation();
  const animation = useRef(null);

  // Mock loader animation
  // Add event listener to fire off after loading complete
  useEffect(() => {
    animation.current?.play();
    setTimeout(() => {
      navigation.navigate('Menu');
    }, 2500);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        style={styles.logo}
        source={require('@assets/welcome.json')}
      />
    </View>
  );
};

export { WelcomeScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
  },
});
