import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  type?: 'cart' | 'back';
}

const Header = ({ type = 'cart' }: HeaderProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (type === 'cart') {
      navigation.navigate('Cart');
    } else {
      navigation.goBack();
    }
  };

  const iconName = type === 'cart' ? 'shopping-cart' : 'arrow-left';

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.icon, type === 'back' ? styles.back : null]}
        onPress={() => handlePress()}
      >
        <Feather name={iconName} size={30} color="black" />
      </Pressable>
    </View>
  );
};

export { Header };

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    justifyContent: 'center',
    padding: 8,
  },
  icon: {
    position: 'absolute',
    padding: 8,
    right: 0,
  },
  back: {
    left: 0,
  },
});
