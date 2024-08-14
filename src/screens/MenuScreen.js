import React, { useState, useReducer } from 'react'
import { Text, View, Button, TouchableOpacity, FlatList, StyleSheet  } from "react-native"
import { menuItems } from '../data/menu'

const MenuScreen = ({ navigation }) => {
  
  //define Intial state of the cart
  const initialState = {
    cartItems: {},
  }

  // Define the reducer function to handle actions
  const cartReducer = (state, action) => {
    switch (action.type) {
    case 'ADD_ITEM':
      const updatedCart = { ...state.cartItems }
      const existingItem = updatedCart[action.item.name]

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        updatedCart[action.item.name] = { ...action.item, quantity: 1 }
      }

      return { ...state, cartItems: updatedCart }

    default:
      return state
    }
  }

  // Use useReducer to manage cart state
  const [cartState, dispatch] = useReducer(cartReducer, initialState)
  const [selectedItem, setSelectedItem] = useState(null)


  // Function to add an item to the cart
  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', item })
    setSelectedItem(item)
  }

  const navigateToCartDetails = () => {
    // Pass the cart items as a parameter when navigating to CartDetailsScreen
    navigation.navigate('ShoppingCart', { cartItems: cartState.cartItems })
  }

  // Render each item in the cart
  const renderCartItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Text>{item.name}</Text>
      <Text></Text>
      <View style={{flex: 1}}>
        <Text style={{textAlign: 'right'}}>${item.price.toFixed(2)}</Text>
      </View>
      <Text>{item.quantity}</Text>
      <TouchableOpacity onPress={() => addItemToCart(item)}>
        <Text style={styles.cartItemButton}>+</Text>
      </TouchableOpacity>
    </View>
  )

  // Calculate total price
  const total = Object.values(cartState.cartItems).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.name}
        renderItem={renderCartItem}
      />
      <Text style={{textAlign: 'center', flex:1}} >Total: ${total.toFixed(2)}</Text>
      <Button title="Go to Cart" onPress={navigateToCartDetails} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  cartItemButton: {
    fontSize: 20,
    marginHorizontal: 8,
  },
})

export default MenuScreen
