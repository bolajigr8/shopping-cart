import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartProduct, CartState } from '@/types'

// Load products from local storage
const loadProductsFromLocalStorage = (): CartProduct[] => {
  try {
    const products = localStorage.getItem('cartProducts')
    return products ? JSON.parse(products) : []
  } catch (error) {
    console.error('Error loading products from local storage:', error)
    return []
  }
}

// Calculate total amount
const calculateTotal = (products: CartProduct[]): number => {
  const total = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  )
  return parseFloat(total.toFixed(2)) // Round to 2 decimal places
}

// Save products to local storage
const saveProductsToLocalStorage = (products: CartProduct[]): void => {
  try {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  } catch (error) {
    console.error('Error saving products to local storage:', error)
  }
}

const initialState: CartState = {
  isOpen: false,
  navOpen: false,
  amount: 0,
  quantityById: {},
  products: loadProductsFromLocalStorage(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    closeCart: (state) => {
      state.isOpen = false
    },
    openCart: (state) => {
      state.isOpen = true
    },
    toggleNav: (state) => {
      state.navOpen = !state.navOpen
    },

    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const product = action.payload
      const existingProduct = state.products.find((p) => p.id === product.id)
      if (existingProduct) {
        existingProduct.quantity += product.quantity
      } else {
        state.products.push(product)
      }
      state.amount = calculateTotal(state.products)
      saveProductsToLocalStorage(state.products)
    },

    loadProducts: (state, action: PayloadAction<CartProduct[]>) => {
      state.products = action.payload
      state.amount = calculateTotal(state.products)
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      )
      state.amount = calculateTotal(state.products)
      saveProductsToLocalStorage(state.products)
    },
    increaseProductQuantity: (state, action: PayloadAction<string>) => {
      const product = state.products.find((p) => p.id === action.payload)
      if (product) {
        product.quantity += 1
      }
      state.amount = calculateTotal(state.products)
      saveProductsToLocalStorage(state.products)
    },
    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      const product = state.products.find((p) => p.id === action.payload)
      if (product && product.quantity > 1) {
        product.quantity -= 1
      } else {
        state.products = state.products.filter((p) => p.id !== action.payload)
      }
      state.amount = calculateTotal(state.products)
      saveProductsToLocalStorage(state.products)
    },
    clearCart: (state) => {
      state.products = []
      state.amount = 0
      saveProductsToLocalStorage(state.products)
    },
  },
})

export const {
  closeCart,
  openCart,
  toggleNav,
  addProduct,
  loadProducts,
  clearCart,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
} = cartSlice.actions

export default cartSlice.reducer
