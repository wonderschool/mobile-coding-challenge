/* eslint-disable indent */
import React, { createContext, useCallback, useEffect, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { items as itemsService } from '@services';
import type { Store as StoreContextProps, CartItem } from '@types';

const ERROR_MESSAGE: string = 'Whoops, something went wrong!';

const initialState = {
  items: [],
  cart: [],
  loading: false,
  error: '',
};

const StoreContext = createContext<StoreContextProps | undefined>(undefined);

const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState(initialState);

  const throwError = (error: string) => {
    setState({ ...state, error, loading: false });
  };

  const getItems = useCallback(async () => {
    setState({ ...state, loading: true });
    try {
      const data = await itemsService.get();
      if (!data) {
        throwError(ERROR_MESSAGE);
        return;
      } else {
        // We could add more logic here to sort the data
        setState({ ...state, items: data, loading: false });
        return;
      }
    } catch (error) {
      throwError(ERROR_MESSAGE);
    }
  }, [state]);

  // useReducer: This would be handled with reducer Action
  const addItem = (newItem: CartItem) => {
    setState((prevState) => ({
      ...prevState,
      cart:
        prevState?.cart.findIndex((item) => item.id === newItem.id) !== -1
          ? prevState.cart.map((item) =>
              item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item,
            )
          : [...prevState.cart, { ...newItem, quantity: 1 }],
    }));
  };

  // useReducer: This would be handled with reducer Action
  // using a reducer would allow to handle more actions and keep it a pure function
  const removeItem = (itemId: string) => {
    setState((prevState) => {
      const updatedCart = prevState.cart.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item,
      );

      return {
        ...prevState,
        cart: updatedCart.filter((item) => item.quantity > 0),
      };
    });
  };

  const value: StoreContextProps = {
    items: state.items,
    cart: state.cart,
    loading: state.loading,
    error: state.error,
    getItems,
    addItem,
    removeItem,
  };

  useEffect(() => {
    getItems();
  }, []);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export { StoreProvider };
export default StoreContext;
