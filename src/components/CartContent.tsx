import type { Dispatch } from "react"
import type { CartItem } from "../types"
import type { CartActions } from "../reducers/cart-reducer"
import QuantityRegulator from "./QuantityRegulator"

type cartContentProps = {
    cart: CartItem[]
    cartTotal: number
    isEmpty: boolean
    dispatch: Dispatch<CartActions>
}

export default function CartContent({ isEmpty, cart, cartTotal, dispatch }: cartContentProps) {

    return (
        <>
            {isEmpty ? (
                <p className="p-2">El carrito esta vacio</p>
            ) : (
                <>
                    <QuantityRegulator cart={cart} dispatch={dispatch} />

                    <p className="text-end mt-2 text-xl">
                        Total pagar:{" "}
                        <span className="font-bold">${cartTotal}</span>
                    </p>

                    <button
                        className="bg-blue-500 hover:bg-blue-600 mt-3 w-full p-2 font-semibold text-white text-2x rounded-lg shadow-md transition-colors"
                        onClick={() => dispatch({ type: "clear-cart" })}
                    >
                        Vaciar Carrito
                    </button>
                </>
            )}
        </>
    )
}
