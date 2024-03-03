import React from 'react';
import type { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { useStore } from '@hooks';

import type { CartItem as CartItemType } from '@types';
import { ItemButton } from '../ItemButton';
import { ItemCount } from '../ItemCount';
import { ItemInfo } from '../ItemInfo';
import { ItemTotal } from '../ItemTotal';
import { ITEM_BUTTON_SIZE as SIZE } from '@configuration/constants';

type Props = {
  item: CartItemType;
  testID?: string;
};

const CartItem: FC<Props> = ({ item, testID = 'CartItem' }) => {
  const { addItem, removeItem } = useStore();

  // Switch statement could be used here to handle more actions
  // Added type to handleButton function to make it more explicit
  // and remove the need for multiple button handlers
  const handleButton = (type: 'add' | 'remove') => {
    if (type === 'add') {
      addItem(item);
    } else {
      removeItem(item.id);
    }
  };

  const totalPrice = item.price * item.quantity;

  return (
    <View testID={testID} style={styles.container}>
      <View style={[styles.left]}>
        <ItemInfo item={item} />
      </View>
      <View style={styles.right}>
        <ItemButton type="remove" size={SIZE} onPress={() => handleButton('remove')} />
        <ItemCount count={item.quantity} size={SIZE} />
        <ItemButton type="add" size={SIZE} onPress={() => handleButton('add')} />
        <ItemTotal total={totalPrice} />
      </View>
    </View>
  );
};

export { CartItem };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    paddingVertical: 24,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  right: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    minWidth: 190,
  },
});
