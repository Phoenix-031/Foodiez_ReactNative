import { create } from 'zustand'

import { persist, devtools, createJSONStorage } from 'zustand/middleware'

//data imports from data folder
import { allrestaurants } from '../data/allrestaurants'
import { cartData } from '../data/cartData'
import { restairantItems } from '../data/restaurantItems'

import AsyncStorage from '@react-native-async-storage/async-storage'

const userSlice = (set) => ({
    user: null,
    cartItems:cartData,
    totalPrice:0,
    setUser: (user) => set((state) => ({ user: user })),
    removeUser: () => set((state) => ({ user: null })),
    addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
    removeFromCart: (id) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),
    clearCart: () => set((state) => ({ cartItems: [] })),
    setTotalPrice: (price) => set((state) => ({ totalPrice: price })),
    incrementItem: (id) => set((state) => ({ cartItems: state.cartItems.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item) })),
    decrementItem: (id) => set((state) => ({ cartItems: state.cartItems.map((item) => item.id === id ? {...item, quantity: item.quantity - 1} : item) })),
})

const appSlice = (set) => ({
    restaurantsList: allrestaurants,
    addRestaurants: (restaurantName) => set((state) => ({ restaurantsList: [...state.restaurantsList,restaurantName] })),
    removeRestaurants: (restaurantName) => set((state) => ({ restaurantsList: state.restaurantsList.filter((item) => item !== restaurantName) })),
})

const restaurantSlice = (set) => ({
    menuItems: restairantItems,
})

const store = (set) => ({
    ...userSlice(set),
    ...appSlice(set),
    ...restaurantSlice(set),
})

const useStore = create(
    devtools(
        persist(store , {
            name : 'store-persist',
            storage: createJSONStorage(() => AsyncStorage)
        })
    )
)

export default useStore