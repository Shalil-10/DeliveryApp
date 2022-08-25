import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basketItems: [],
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // console.log(action)
      state.basketItems = [...state.basketItems, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index = state.basketItems.findIndex(
        (item) => item.id === action.payload.id
      )

      let newBasket = [...state.basketItems]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
        `Can't remove product (id: ${action.payload.id}) as its not in basket`
        )
      }
      state.basketItems = newBasket
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const basketReducer = basketSlice.reducer

export const selectBasketItems = (state) => state.basket.basketItems

export const selectBasketItemsWithId = (state, id) => 
    state.basket.basketItems.filter((item) => item.id === id)

export const selectBasketTotal = (state) => state.basket.basketItems.reduce((total, item) => total += item.price, 0)