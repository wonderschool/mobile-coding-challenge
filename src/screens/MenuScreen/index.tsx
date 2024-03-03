import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Header, MenuItem } from '@components';
import { FlashList } from '@shopify/flash-list';
import { useStore } from '@hooks';

interface ScreenProps {}

const MenuScreen: React.FC<ScreenProps> = () => {
  const { items } = useStore();

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={items}
        renderItem={({ item }) => <MenuItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => <Header type={'cart'} />}
        keyExtractor={(item) => `${item.id}`}
        estimatedItemSize={88}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        scrollEnabled={true}
      />
    </SafeAreaView>
  );
};

export { MenuScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  list: {
    paddingBottom: 20,
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.555)',
    height: 1,
  },
});
