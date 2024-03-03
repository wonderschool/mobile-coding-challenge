import React from 'react';
import type { FC } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import type { MenuItem as MenuItemType } from '@types';

type Props = {
  item: MenuItemType;
  testID?: string;
};

const ItemInfo: FC<Props> = ({ item, testID = 'ItemInfo' }) => {
  const formattedPrice = item?.price ? `$${item.price.toFixed(2)}` : '$0.00';

  return (
    <View testID={testID} style={styles.container}>
      <Text style={styles.name}>{item?.name || 'Item name'}</Text>
      <View>
        <Text style={styles.price}>{formattedPrice}</Text>
      </View>
    </View>
  );
};

export { ItemInfo };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  price: {
    fontSize: 16,
    marginTop: 4,
    marginRight: 8,
  },
});
