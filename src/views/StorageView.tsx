import { useEffect, useReducer } from "react"
import { cartReducer, initialState, max_item } from "../reducers/cart-reducer"
import { ProducGrid } from "../components/ProducGrid"

export default function processor() {


  const [state] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <ProducGrid
      title="Nuestra Colección de Discos Duros"
      items={state.data.ram}
      max_item={max_item}
      cart={state.cart}
    />
  )
}




