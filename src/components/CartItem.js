import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const CartItem = ({ item, index, onPressAdd, onPressRemove }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Text style={styles.text}>{item.name}</Text>
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text}>${item.price}</Text>
        <TouchableOpacity style={styles.itemIcon} onPress={() => onPressRemove(item, index)}>
          <Ionicons name="remove-circle" size={30} color="red" />
        </TouchableOpacity>
        <Text>{item.quantity ? item.quantity : 1}</Text>
        <TouchableOpacity style={styles.itemIcon} onPress={() => onPressAdd(item, index)}>
          <Ionicons name="add-circle" size={30} color="green" />
        </TouchableOpacity>
        <Text style={styles.text}>$ {(item.price * item.quantity).toFixed(2)}</Text>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  leftContainer: {
    flex: 0.4,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    justifyContent: 'flex-end',
    flex: 0.6,
    flexWrap: 'wrap',
  },
  
  text: {
    fontSize: 18,
    color: '#000',
  },
  itemIcon: {
    paddingHorizontal: 10,
  },
})