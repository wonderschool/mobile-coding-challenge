// Description:
// This file contains the types used in the application.

export type MenuItem = {
  id: string;
  name: string;
  price: number;
};

export interface CartItem extends MenuItem {
  quantity: number;
  total: number;
}

export interface Cart {
  cart: CartItem[];
  total: number;
  loading: boolean;
  error: string;
}

export type InitialState = {
  items: MenuItem[];
  cart: CartItem[];
  loading: boolean;
  error: string;
};

// Actions for useReducer
// export type Action =
//   | { type: 'GET_ITEMS' }
//   | { type: 'GET_ITEMS_SUCCESS'; payload: MenuItem[] }
//   | { type: 'GET_ITEMS_ERROR'; payload: string }
//   | { type: 'ADD_TO_CART'; payload: MenuItem }
//   | { type: 'REMOVE_FROM_CART'; payload: string }
//   | { type: 'UPDATE_CART'; payload: CartItem[]
//   | { type: 'CLEAR_CART'

/* 
General Store
we can add more properties to the store:
- isLoggedIn: boolean;
- anotherProperty: number;
*/
export interface Store extends InitialState {
  getItems: () => Promise<void>;
  addItem: (item: MenuItem) => void;
  removeItem: (id: string) => void;
}
