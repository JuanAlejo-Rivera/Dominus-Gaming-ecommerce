import type { Dispatch } from "react"
import type { CartActions } from "../reducers/cart-reducer"
import type { CartItem } from "../types"



type QuantityRegulatorProps = {
  cart: CartItem[]
  dispatch: Dispatch<CartActions>
}


export default function QuantityRegulator({ cart, dispatch }: QuantityRegulatorProps) {

  return (
    <div className="max-h-[300px] overflow-x-hidden">
      <table className="w-113 table">
        <thead className="border-b border-gray-600">
          <tr>
            <th className="w-30">Imagen</th>
            <th>Nombre</th>
            <th className="w-20">Precio</th>
            <th className="w-40">Cantidad</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(guitar => (
            <tr className="border-b border-gray-600" key={guitar.id}>
              <td>
                <img className="img-fluid" src={`/img/${guitar.image}.png`} alt="imagen cpu" />
              </td>
              <td className="p-7">{guitar.name}</td>
              <td className="font-bold p-4">${guitar.price}</td>
              <td>
                <button
                  type="button"
                  className="m-3.5 font-bold px-1 text-white border bg-blue-500 rounded shadow-lg hover:shadow-blue-700"
                  onClick={() => dispatch({ type: 'decrement-quantity', payload: { id: guitar.id } })}
                >
                  -
                </button>
                {guitar.quantity}
                <button
                  type="button"
                  className="m-2 font-bold px-1 text-white border bg-blue-500 rounded shadow-lg hover:shadow-blue-700"
                  onClick={() => dispatch({ type: 'increase-quantity', payload: { id: guitar.id } })}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="font-bold bg-red-600 px-2 rounded-2xl"
                  type="button"
                  onClick={() => dispatch({ type: 'remove-from-cart', payload: { id: guitar.id } })}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
