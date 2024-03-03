import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ItemCountProps {
  count: number;
  size?: number;
}

const ItemCount: React.FC<ItemCountProps> = ({ count = 0, size = 40 }) => {
  const buttonStyle = {
    width: size,
    height: size,
  };

  return (
    <View style={[styles.container, buttonStyle]}>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

export { ItemCount };

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
});
