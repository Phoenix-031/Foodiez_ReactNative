import { create } from 'zustand'

import { persist, devtools, createJSONStorage } from 'zustand/middleware'

import { cartData, allrestaurants, restairantItems, restaurantReviews } from '../data'

import AsyncStorage from '@react-native-async-storage/async-storage'

import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js'
import { en, bn, hi } from '../i18n';

const i18n = new I18n()

i18n.fallbacks = true
i18n.translations = { en, bn, hi }

const userSlice = (set) => ({
    user: null,
    likedRestaurants: [],
    cartItems: [],
    totalPrice: 0,
    sortfilter: "",
    filters: [],
    orders: [],
    setOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
    allfilters: ["Nearest", "Rating 4.0+", "Pure Veg", "New Arrivals", "Previous Orders"],
    bookingfilter: ["Book Table", "Nearest", "Rating 4.0 + ", "Pure Veg", "New Arrivals", "Previous Orders"],
    locale: "en",
    setLocale: (locale) => set((state) => ({ locale: locale })),
    setFilters: (filters) => set((state) => ({ filters: filters })),
    setSortfilter: (sortfilter) => set((state) => ({ sortfilter: sortfilter })),
    setUser: (user) => set((state) => ({ user: user })),
    removeUser: () => set((state) => ({ user: null })),
    addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
    removeFromCart: (id) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),
    clearCart: () => set((state) => ({ cartItems: [] })),
    setTotalPrice: (price) => set((state) => ({ totalPrice: price })),
    incrementItem: (id) => set((state) => ({ cartItems: state.cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item) })),
    decrementItem: (id) => set((state) => ({ cartItems: state.cartItems.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item) })),
    addLikedRestaurant: (restaurantName) => set((state) => ({ likedRestaurants: [...state.likedRestaurants, restaurantName] })),
    removeLikedRestaurant: (restaurantName) => set((state) => ({ likedRestaurants: state.likedRestaurants.filter((item) => item !== restaurantName) })),
})

const appSlice = (set) => ({
    restaurantsList: allrestaurants,
    loading: false,
    addRestaurants: (restaurantName) => set((state) => ({ restaurantsList: [...state.restaurantsList, restaurantName] })),
    removeRestaurants: (restaurantName) => set((state) => ({ restaurantsList: state.restaurantsList.filter((item) => item !== restaurantName) })),
    sortbyRatingHTL: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a, b) => b.rating - a.rating) })),
    sortbyRatingLTH: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a, b) => a.rating - b.rating) })),
    sortbyPriceLTH: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a, b) => a.price - b.price) })),
    sortbyPriceHTL: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a, b) => a.price - b.price) })),
    sortbyDeliveryTime: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a, b) => Number(a.time_to_deliver.split(" ")[0]) - Number(b.time_to_deliver.split(" ")[0])) })),
    sortbyDistance: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a, b) => a.distance - b.distance) })),
    // sortbyPopularity: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.popularity - a.popularity) })),
    // sortbyNewest: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.newest - a.newest) })),
    // sortbyAlphabetical: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => a.name.localeCompare(b.name)) })),
    // sortbyReverseAlphabetical: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.name.localeCompare(a.name)) })),
    // sortbyRecommended: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.recommended -.recommended) })),
    // sortbyOffers: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.offers - a.offers) })),
    // sortbyVeg: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.veg - a.veg) })),
    // sortbyNonVeg: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.nonVeg - a.nonVeg) })),
    // sortbyFastFood: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.fastFood - a.fastFood) })),
    // sortbyDesserts: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.desserts - a.desserts) })),
    // sortbyBeverages: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.beverages - a.beverages) })),
    // sortbyChinese: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.chinese - a.chinese) })),
    // sortbyIndian: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.indian - a.indian) })),
    // sortbyItalian: () => set((state) => ({ restaurantsList: state.restaurantsList.sort((a,b) => b.italian - a.italian) })),


})

const restaurantSlice = (set) => ({
    menuItems: restairantItems,
    restaurantReviews: restaurantReviews,
})

const store = (set) => ({
    ...userSlice(set),
    ...appSlice(set),
    ...restaurantSlice(set),
})

const useStore = create(
    store,
)

export default useStore