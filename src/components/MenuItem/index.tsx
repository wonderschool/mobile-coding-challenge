import React from 'react';
import type { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { useStore } from '@hooks';

import type { MenuItem as MenuItemType } from '@types';
import { ItemButton } from '../ItemButton';
import { ItemInfo } from '../ItemInfo';
import { ITEM_BUTTON_SIZE as SIZE } from '@configuration/constants';

type Props = {
  item: MenuItemType;
  testID?: string;
};

const MenuItem: FC<Props> = ({ item, testID = 'MenuItem' }) => {
  const { addItem } = useStore();
  const handleButton = () => {
    addItem(item);
    Toast.show({
      type: 'success',
      text1: 'Item added to cart',
      visibilityTime: 1000,
    });
  };

  return (
    <View testID={testID} style={styles.container}>
      <View style={[styles.left]}>
        <ItemInfo item={item} />
      </View>
      <View style={styles.right}>
        <ItemButton type="add" size={SIZE} onPress={handleButton} />
      </View>
    </View>
  );
};

export { MenuItem };

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 8,
    paddingVertical: 30,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
    alignSelf: 'flex-start',
  },
  right: {
    alignSelf: 'flex-end',
  },
});
