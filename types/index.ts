interface File {
  url: string
}

interface ImageFields {
  file: File
}

interface Image {
  fields: ImageFields
}

interface ProductFields {
  title: string
  price: number
  image: Image
}

interface Sys {
  id: string
}

export interface Product {
  sys: Sys
  fields: ProductFields
}
export interface Products {
  items: Product[]
}

export interface ProductState {
  products: Product[]
}

export interface CartProduct {
  id: string
  title: string
  price: number
  url: string
  quantity: number
}

export interface CartState {
  isOpen: boolean
  navOpen: boolean
  amount: number
  quantityById: { [productId: string]: number }
  products: CartProduct[]
}
