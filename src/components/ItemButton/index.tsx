// LargeSquareButton.tsx
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

interface ItemButtonProps {
  onPress: () => void;
  type: 'add' | 'remove';
  size?: number;
}

const ItemButton: React.FC<ItemButtonProps> = ({ onPress, type, size = 40 }) => {
  const symbol = type === 'add' ? '+' : '-';

  const buttonStyle = {
    width: size,
    height: size,
    backgroundColor: type === 'add' ? '#43E3CD' : '#F72586',
  };

  return (
    <Pressable style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={styles.symbol}>{symbol}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#43E3CD',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  symbol: {
    fontSize: 24,
    fontWeight: '400',
    color: '#ffffff',
  },
});

export { ItemButton };
