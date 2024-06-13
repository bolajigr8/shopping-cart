'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts/hooks'
import { Product, CartProduct } from '@/types'
import { addProduct } from '@/store/slices/cartSlice'
import useCart from './LoadFromLS'

const Products = () => {
  useCart()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.product.products)
  const cartProducts = useAppSelector((state) => state.cart.products)
  const [message, setMessage] = useState<string | null>(null)

  // Add Product to Cart
  const handleAddToCart = (productId: string) => {
    // Find the product in the products array
    const product = products.find((p) => p.sys.id === productId)
    if (!product) {
      setMessage('Product not found.')
      return
    }

    const { id } = product.sys
    const { title, price } = product.fields
    const { url } = product.fields.image.fields.file
    const quantity = 1

    // Check if the product already exists in the cart
    const existingProduct = cartProducts.find((p) => p.id === id)
    if (existingProduct) {
      setMessage(`"${title}" is already in the cart.`)
    } else {
      const cartProduct: CartProduct = { id, title, url, price, quantity }
      dispatch(addProduct(cartProduct))
      setMessage(`"${title}" added to the cart.`)
    }

    // Clear message after 3 seconds
    setTimeout(() => setMessage(null), 3000)
  }

  return (
    <section className='products bg-white text-black'>
      <h1 className='micbol-h2 spacing text-black font-bold'>Our Products</h1>
      <div className='underline '></div>
      {message && (
        <div className='tex-center mb-6 w-[25rem] mx-auto bg-orange-400 px-4 rounded-md capitalize text-white'>
          {message}
        </div>
      )}
      <div className='products-center'>
        {products.map((product) => {
          const { id } = product.sys
          const { title, price } = product.fields
          const { url } = product.fields.image.fields.file
          return (
            <article key={id} className='product'>
              <div className='img-container'>
                <Image
                  className='product-img transition-micbol'
                  width={400}
                  height={400}
                  priority
                  src={url}
                  alt={title}
                />
                <button
                  onClick={() => handleAddToCart(id)}
                  data-id={id}
                  className='bag-btn bg-orange-400 spacing transition-micbol flex items-center hover:text-white'
                >
                  <FaShoppingCart className='fa-shopping-cart' />
                  Add to Bag
                </button>
              </div>
              <h3 className='spacing'>{title}</h3>
              <h4 className='spacing text-orange-400'>${price}</h4>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Products
