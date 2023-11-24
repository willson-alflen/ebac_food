// cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

interface CartItem {
  id: number
  image: string
  name: string
  price: string
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
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
    }
  }
})

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
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
