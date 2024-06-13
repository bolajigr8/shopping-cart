import { useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks.ts/hooks'
import { loadProducts } from '@/store/slices/cartSlice'

const useCart = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const loadProductsFromLocalStorage = () => {
      try {
        const products = localStorage.getItem('cartProducts')
        return products ? JSON.parse(products) : []
      } catch (error) {
        console.error('Error loading products from local storage:', error)
        return []
      }
    }

    const products = loadProductsFromLocalStorage()
    dispatch(loadProducts(products))
  }, [dispatch])
}

export default useCart
