import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { menuItems } from '../data/menu'
import { MenuItem } from '../components'
import Ionicons from '@expo/vector-icons/Ionicons'
import { storeData, getData } from '../utils/AsyncStorageUtil'

const Menu = ({ navigation }) => {

  const findObject = (list, item)=>{
    const result = list?.filter((cartItem)=>cartItem.id === item.id) || 0
    return result.length
  }

  const addToCart = async (item) => {
    let cartData = await getData()
    cartData = JSON.parse(cartData) || []
    if(!findObject(cartData, item)){
      cartData.push({ ...item, quantity: 1 })
      storeData(cartData)
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('ShoppingCart')}>
        <Ionicons name="cart" size={30} color="green" />
      </TouchableOpacity>
      <FlatList
        data={menuItems}
        renderItem={({ item, index }) => (
          <MenuItem item={item} index={index} onPress={() => addToCart(item)} />
        )}
      />
    </View>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})
