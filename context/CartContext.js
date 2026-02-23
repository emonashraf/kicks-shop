"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // --- 1. Lazy Initializer State ---
  // This runs ONCE when the component first loads.
  const [cart, setCart] = useState(() => {
    // We must check if 'window' exists because this code also runs on the server during build
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      try {
        return savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
        return [];
      }
    }
    return [];
  });

  // --- 2. Persistence Effect ---
  // Save cart to localStorage whenever it changes. 
  // We no longer need the "loading" effect because of the logic above.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product, selectedSize, selectedColor) => {
    setCart((prevCart) => {
      const itemKey = `${product.id}-${selectedSize}-${selectedColor}`;
      const existingItemIndex = prevCart.findIndex(
        (item) => `${item.id}-${item.size}-${item.color}` === itemKey
      );

      if (existingItemIndex > -1) {
        return prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, size: selectedSize, color: selectedColor, quantity: 1 }];
    });
  };

  const deleteCartItem = (product) => {
    // Note: Improved filter logic to ensure we target the specific variant (size/color)
    // if you allow multiple variants of the same ID in the cart.
    setCart((prevCart) => prevCart.filter((item) =>
      !(item.id === product.id && item.size === product.size && item.color === product.color)
    ));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, cartCount, cartTotal, deleteCartItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};