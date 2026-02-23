"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, selectedSize, selectedColor) => {
    setCart((prevCart) => {
      // 1. Create a unique identifier for this specific variant
      const itemKey = `${product.id}-${selectedSize}-${selectedColor}`;

      // 2. Find if it already exists
      const existingItemIndex = prevCart.findIndex(
        (item) => `${item.id}-${item.size}-${item.color}` === itemKey
      );

      if (existingItemIndex > -1) {
        // 3. If it exists, map to a NEW array (don't mutate)
        return prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // 4. If it's new, return a NEW array with the new item
      return [...prevCart, { ...product, size: selectedSize, color: selectedColor, quantity: 1 }];
    });
  };

  const deleteCartItem = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount, cartTotal, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);


