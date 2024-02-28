import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ItemTotalProps {
  total: number;
}

const ItemTotal: React.FC<ItemTotalProps> = ({ total = 0 }) => {
  const formattedTotal = total ? `$${total.toFixed(2)}` : '$100.00';

  return (
    <View style={[styles.container]}>
      <Text style={styles.total} numberOfLines={1}>
        {formattedTotal}
      </Text>
    </View>
  );
};

export { ItemTotal };

const styles = StyleSheet.create({
  container: {
    maxWidth: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  total: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
