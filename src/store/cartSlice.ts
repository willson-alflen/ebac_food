// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'
import { CartItemProps } from '../components/Types'

interface CartState {
  items: CartItemProps[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemProps>) => {
      // If the cart is not empty and the restaurantId of the new item does not match the restaurantId of the first item in the cart
      if (state.items.length > 0 && state.items[0].restaurantId !== action.payload.restaurantId) {
        // Clear the cart
        state.items = [];
      }

      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      )

      if (existingItem) {
        existingItem.quantity += 1
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      )

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      }
    },
    resetCart: () => {
      return initialState
    }
  }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, resetCart } =
  cartSlice.actions

export const selectTotalItems = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0)

export const selectTotalPrice = (state: RootState) =>
  state.cart.items
    .reduce((total, item) => {
      const price = parseFloat(item.price.replace(',', '.'))
      return total + price * item.quantity
    }, 0)
    .toFixed(2)

export default cartSlice.reducer
