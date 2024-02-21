import React , { useState, useEffect }from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native'

const ShoppingCart = ({ route }) => {
  console.log('Route Params:', route.params)
  const { cartItems = [] } = route.params
  const [cartItemsArray, setCartItemsArray] = useState(Object.values(cartItems))
  const [totalValue, setTotalValue] = useState(0)

  if (!Array.isArray(cartItemsArray) || cartItemsArray.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center', flex:1}}>No items in the cart</Text>
      </View>
    )
  }

  const handleIncrement = (item) => {
    const updatedCartItems = cartItemsArray.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
    setCartItemsArray(updatedCartItems)
  }

  const handleDecrement = (item) => {
    const updatedCartItems = cartItemsArray
      .map((cartItem) =>
        cartItem.id === item.id && cartItem.quantity > 0
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter((cartItem) => cartItem.quantity > 0) // Remove items with quantity 0
    setCartItemsArray(updatedCartItems)
  }

  
  useEffect(() => {
    // Calculate the total value whenever cartItemsArray changes
    const newTotalValue = cartItemsArray.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
    setTotalValue(newTotalValue)
  }, [cartItemsArray])


  const renderCartItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Text>{item.name}</Text>
      <Text>${item.price.toFixed(2)}</Text>
    
      <Text>${(item.price * item.quantity).toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity onPress={() => handleDecrement(item)}>
          <Text style={styles.quantityButton}>-</Text>
        </TouchableOpacity>
        <Text>{item.quantity}</Text>
        <TouchableOpacity onPress={() => handleIncrement(item)}>
          <Text style={styles.quantityButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  // Ensure that cartItems is an array before using reduce
  //const total = cartItemsArray.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItemsArray}
        keyExtractor={(item) => item.id} // Use a unique identifier, assuming "id" is unique
        renderItem={renderCartItem}
      />
      <Text style={{textAlign: 'center', flex:1}} >Total: ${totalValue.toFixed(2)}</Text>
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    marginHorizontal: 8,
    color: 'green',
  },
})

export default ShoppingCart