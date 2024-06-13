'use client'
import React, { useEffect } from 'react'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import Cart from '@/components/Cart'
import About from '@/components/About'
import { useAppSelector } from '@/store/hooks.ts/hooks'
import { CartProduct } from '@/types'

// Function to save products to local storage
// const saveProductsToLocalStorage = (products: CartProduct[]): void => {
//   try {
//     const serializedProducts = JSON.stringify(products)
//     localStorage.setItem('cartProducts', serializedProducts)
//   } catch (error) {
//     console.error('Error saving products to local storage:', error)
//   }
// }

const All = () => {
  const cartProducts = useAppSelector((state) => state.cart.products)

  return (
    <>
      <Hero />
      <About />
      <Products />
      <Cart />
    </>
  )
}

export default All
