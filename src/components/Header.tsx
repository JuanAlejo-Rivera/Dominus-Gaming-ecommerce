import { useMemo } from "react"
import type { CartItem } from "../types"
import type { CartActions } from "../reducers/cart-reducer"
import type { Dispatch } from "react"
import { Link } from "react-router-dom"

type HeaderProps = {
    cart: CartItem[]
    dispatch: Dispatch<CartActions>

}

export function Header({ cart, dispatch }: HeaderProps) {

    //state Derivado
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

console.log(cart)

    return (
        <header className={'bg-[url(/img/bg.jpg)] bg-center bg-cover'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="img/logo.svg" alt="imagen logo" />
                    </div>
                </div>

                <div className="flex py-4 text-center gap-4 justify-center">
                    <Link
                        to='/'
                        className='font-bold p-2 text-white'
                    >Inicio</Link>
                    <Link
                        to='/processor'
                        className='font-bold p-2 text-white'
                    >Procesadores</Link>
                    <Link
                        to='/rams'
                        className='font-bold p-2 text-white'
                    >Memorias Ram</Link>

                </div>


                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div
                        className="carrito"
                    >
                        <img className="max-h-7" src="/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            {isEmpty ? <p>{'El carrito esta vacio'}</p> : ''}

                            <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th className="w-20">Nombre</th>
                                        <th className="w-20">Precio</th>
                                        <th className="w-20">Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(guitar => (
                                        <tr className="" key={guitar.id}>
                                            <td>
                                                <img className="img-fluid" src={`/img/${guitar.image}.png`} alt="imagen cpu" />
                                            </td>
                                            <td className="p-7">{guitar.name}</td>
                                            <td className="font-bold p-4">
                                                ${guitar.price}
                                            </td>
                                            <td className="w-20">
                                                <button
                                                    type="button"
                                                    className="m-2 font-bold px-1 text-white border bg-blue-500 rounded shadow-lg hover:shadow-blue-700"
                                                    onClick={() => dispatch({
                                                        type: 'decrement-quantity',
                                                        payload: { id: guitar.id }
                                                    })}
                                                >
                                                    -
                                                </button>
                                                {guitar.quantity}
                                                <button
                                                    type="button"
                                                    className="m-2 font-bold px-1 text-white border bg-blue-500 rounded shadow-lg hover:shadow-blue-700"
                                                    onClick={() => dispatch({
                                                        type: 'increase-quantity',
                                                        payload: { id: guitar.id }
                                                    })}
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="font-bold bg-red-600 px-2 rounded-2xl"
                                                    type="button"
                                                    onClick={() => dispatch({
                                                        type: 'remove-from-cart',
                                                        payload: { id: guitar.id }
                                                    })}
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <p className="text-end">Total pagar: <span className="fw-bold">${cartTotal}</span></p>
                            <button
                                className="bg-blue-500 hover:bg-blue-600 mt-5 w-full p-3 font-semibold text-black text-lg rounded-lg shadow-md transition-colors"
                                onClick={() => dispatch({ type: 'clear-cart' })}
                            >
                                Vaciar Carrito
                            </button>
                        </div>
                    </div>
                </nav>

            </div>
        </header>
    )
}