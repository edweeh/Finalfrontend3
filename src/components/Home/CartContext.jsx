// CartContext.js

import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state
const initialState = {
  cartItems: [],
  favoriteItems: [], // Add a new state for favorite items
};

// Create a context
const CartContext = createContext();

// Create a reducer function to handle state changes
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case 'ADD_TO_FAVORITES': // New case for adding items to favorites
      return {
        ...state,
        favoriteItems: [...state.favoriteItems, action.payload],
      };
    // Add more cases for other actions if needed
    default:
      return state;
  }
};

// Create a CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Function to add items to the cart
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  // Function to add items to favorites
  const addToFavorites = (item) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: item });
  };

  return (
    <CartContext.Provider value={{ state, addToCart, addToFavorites }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
