"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    // Load from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("cart");
        if (stored) {
            setCart(JSON.parse(stored));
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, qty = 1) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + qty }
                        : item
                );
            }
            return [...prev, { ...product, qty }];
        });
    };

    const removeFromCart = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQty = (id, qty) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, qty } : item
            )
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, updateQty }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);
