'use client'
import React, { useEffect, useState } from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import Image from 'next/image'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts/hooks'
import {
  closeCart,
  removeProduct,
  increaseProductQuantity,
  decreaseProductQuantity,
  loadProducts,
  clearCart,
} from '@/store/slices/cartSlice'

const Cart = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.cart.isOpen)
  const cartProducts = useAppSelector((state) => state.cart.products)
  const total = useAppSelector((state) => state.cart.amount)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Component has mounted, perform client-side operations
    setIsMounted(true)

    const loadProductsFromLocalStorage = () => {
      try {
        const products = localStorage.getItem('cartProducts')
        return products ? JSON.parse(products) : []
      } catch (error) {
        console.error('Error loading products from local storage:', error)
        return []
      }
    }

    if (isMounted) {
      const products = loadProductsFromLocalStorage()
      dispatch(loadProducts(products))
    }
  }, [dispatch, isMounted])

  if (!isMounted) {
    return null // Render nothing until mounted
  }

  return (
    <section
      className={`text-white cart-overlay transition-micbol ${
        isOpen ? 'transparentBcg' : ''
      }`}
    >
      <div className={`cart transition-micbol ${isOpen ? 'showCart' : ''}`}>
        <span className='close-cart'>
          <IoMdCloseCircle
            className='text-3xl hover:text-4xl hover:text-orange-400 transition-micbol'
            onClick={() => dispatch(closeCart())}
          />
        </span>
        <h2 className='text-xl text-orange-400 font-bold'>your cart</h2>
        <hr />
        <article className='cart-content transition-micbol'>
          {cartProducts.map((product) => {
            const { id, title, price, url, quantity } = product
            return (
              <div key={id} className='cart-item transition-micbol'>
                <Image width={100} height={300} src={url} alt={title} />
                <div>
                  <h4 className='text-md font-bold spacing'>{title}</h4>
                  <h5 className='text-md font-bold spacing'>${price}</h5>
                  <span
                    className='remove-item hover:text-gray-400 text-orange-400 transition-all'
                    onClick={() => dispatch(removeProduct(id))}
                  >
                    remove item
                  </span>
                </div>
                <div>
                  <FaChevronUp
                    className='text-orange-400 cursor-pointer'
                    onClick={() => dispatch(increaseProductQuantity(id))}
                  />
                  <p className='item-amount'>{quantity}</p>
                  <FaChevronDown
                    className='text-orange-400 cursor-pointer'
                    onClick={() => dispatch(decreaseProductQuantity(id))}
                  />
                </div>
              </div>
            )
          })}
        </article>
        <div className='cart-footer'>
          <h3 className='spacing text-lg font-bold'>
            your total: $ <span className='cart-total'>{total}</span>
          </h3>
          <button
            className='clear-cart p-3 px-[2rem] bg-orange-400 rounded-md text-white hover:bg-black hover:text-orange-400 transition-micbol font-bold text-xl capitalize'
            onClick={() => dispatch(clearCart())}
          >
            clear cart
          </button>
        </div>
      </div>
    </section>
  )
}

export default Cart
