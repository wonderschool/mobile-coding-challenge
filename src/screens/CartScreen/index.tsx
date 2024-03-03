import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Header, CartItem } from '@components';
import { FlashList } from '@shopify/flash-list';
import { useStore } from '@hooks';

interface ScreenProps {}

const CartScreen: React.FC<ScreenProps> = () => {
  const { cart } = useStore();

  const EmptyMessage: React.FC = () => {
    return (
      <View style={[styles.container, styles.empty]}>
        <Text style={styles.message}>Your cart is empty</Text>
      </View>
    );
  };

  const BottomFooter = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formattedTotal = total.toFixed(2);
    return (
      <View style={styles.footer}>
        <Text style={styles.message}>{`Total: $${formattedTotal}`}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={cart}
        ListHeaderComponent={() => <Header type={'back'} />}
        ListEmptyComponent={() => <EmptyMessage />}
        renderItem={({ item }) => <CartItem item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => `${item.id}`}
        estimatedItemSize={88}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        scrollEnabled={true}
      />
      <BottomFooter />
    </SafeAreaView>
  );
};

export { CartScreen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40%',
    flexGrow: 1,
  },
  message: {
    fontSize: 20,
    fontWeight: '500',
  },
  list: {
    paddingBottom: 20,
  },
  footer: {
    width: '100%',
    padding: 16,
    paddingBottom: 40,
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
  },
  separator: {
    backgroundColor: 'rgba(0, 0, 0, 0.555)',
    height: 1,
  },
});
