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
      title="Nuestra Colección de Tarjetas Gráficas"
      items={state.data.gpu}
      max_item={max_item}
      cart={state.cart}
    />
  )
}
