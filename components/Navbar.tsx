'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaBars, FaCartPlus } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '@/store/hooks.ts/hooks'
import Link from 'next/link'
import { openCart, toggleNav } from '@/store/slices/cartSlice'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const navOpen = useAppSelector((state) => state.cart.navOpen)
  const cartProducts = useAppSelector((state) => state.cart.products)
  const numberOfProducts = cartProducts.length

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Render nothing on the server-side
  }

  return (
    <nav className=' sticky  top-0 transition-micbol bg-gray-200 z-10   '>
      <div className='navbar nav-center flex transition-micbol justify-between px-6 w-full max-w-[1170px] mx-auto '>
        <FaBars
          onClick={() => dispatch(toggleNav())}
          className='text-2xl lg:text-4xl cursor-pointer'
        />
        <Image src='/logo.svg' width={200} height={200} alt='comfy house' />
        <div className='cart-btn'>
          <span>
            <FaCartPlus
              onClick={() => dispatch(openCart())}
              className='text-3xl lg:text-4xl'
            />
          </span>
          <div className='cart-items text-white bg-orange-400 '>
            {numberOfProducts}
          </div>
        </div>
      </div>
      {/* nav links */}
      {navOpen && (
        <div className='w-full  transition-micbol '>
          <div className=' transition-micbol  w-full '>
            <ul className='flex bg-white nav-links transition-micbol   flex-col   text-lg md:text-xl font-bold '>
              <Link
                className=' transition-micbol hover:bg-gray-200 xl:hover:pl-[5.4rem] hover:px-8 py-2 px-6 xl:px-[5rem]'
                href='/'
              >
                Home
              </Link>
              <Link
                className=' py-2 px-6 transition-micbol xl:hover:pl-[5.4rem] hover:px-8 hover:bg-gray-200 xl:px-[5rem]'
                href='/about'
              >
                About
              </Link>
              <Link
                className=' py-2 px-6 transition-micbol hover:bg-gray-200  hover:px-8 xl:hover:pl-[5.4rem] xl:px-[5rem]'
                href='/products'
              >
                Products
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
