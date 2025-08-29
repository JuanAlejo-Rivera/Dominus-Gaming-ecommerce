export type Product = {
  id: number
  name: string
  price: number
  image: string
  description: string
}

export type CartItem = Product & {
  quantity: number
}

export type dbproducts = {
  cpu: Product[]
  ram: Product[]
  gpu: Product[]
  storage: Product[]
  psu: Product[]
  peripherals: Product[]
}


//pick permite elegir otro elementos de otro type
// export type CartItem = Pick<Guitar, 'id' | 'name'|'price'> & {
//   quantity: number
// }

//omit permite quitar ciertos atributos
// export type CartItem = Omit<Guitar, 'id' | 'name'|'price'> & {
//   quantity: number
// }