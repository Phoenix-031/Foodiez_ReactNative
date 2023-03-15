import { create } from 'zustand'

import { persist, devtools } from 'zustand/middleware'

const store = (set) => ({
    user: null,
    cartItems: [],
    addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
    removeFromCart: (id) => set((state) => ({ cartItems: state.cartItems.filter((item) => item.id !== id) })),
    clearCart: () => set((state) => ({ cartItems: [] })),
    setUser: (user) => set((state) => ({ user: user })),
})

const useStore = create(
    devtools(
        persist(store , {
            name : 'store-persist',
        })
    )
)

export default useStore