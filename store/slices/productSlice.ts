import { createSlice } from '@reduxjs/toolkit'
import { products } from '@/constants'
import { ProductState } from '@/types'

const initialState: ProductState = {
  products: products.items,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
})

export const {} = productSlice.actions
export default productSlice.reducer
