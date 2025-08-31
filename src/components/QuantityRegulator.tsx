import type { Dispatch } from "react"
import type { CartActions } from "../reducers/cart-reducer"
import type { CartItem } from "../types"



type QuantityRegulatorProps = {
  cart: CartItem[]
  dispatch: Dispatch<CartActions>
}


export default function QuantityRegulator({ cart, dispatch }: QuantityRegulatorProps) {

  return (
    <div className="max-h-[300px] overflow-x-auto">
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
          {cart.map(item => (
            <tr className="border-b border-gray-600" key={item.id}>
              <td>
                <img className="img-fluid" src={`/img/${item.image}.png`} alt="imagen cpu" />
              </td>
              <td className="p-7">{item.name}</td>
              <td className="font-bold p-4">${item.price}</td>
              <td>
                <button
                  type="button"
                  className="m-3.5 font-bold px-1 text-white border bg-blue-500 rounded shadow-lg hover:shadow-blue-700"
                  onClick={() => dispatch({ type: 'decrement-quantity', payload: { id: item.id } })}
                >
                  -
                </button>
                {item.quantity}
                <button
                  type="button"
                  className="m-2 font-bold px-1 text-white border bg-blue-500 rounded shadow-lg hover:shadow-blue-700"
                  onClick={() => dispatch({ type: 'increase-quantity', payload: { id: item.id } })}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="font-bold bg-red-600 px-2 rounded-2xl"
                  type="button"
                  onClick={() => dispatch({ type: 'remove-from-cart', payload: { id: item.id } })}
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
