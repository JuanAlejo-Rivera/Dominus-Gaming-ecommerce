import { useMemo, useState, useRef, useEffect } from "react"
import type { CartItem } from "../types"
import type { CartActions } from "../reducers/cart-reducer"
import type { Dispatch } from "react"
import { Link } from "react-router-dom"

type HeaderProps = {
    cart: CartItem[]
    dispatch: Dispatch<CartActions>
}

export function Header({ cart, dispatch }: HeaderProps) {

    const [isOpen, setIsOpen] = useState(false)
    const cartRef = useRef<HTMLDivElement | null>(null)

    // cerrar carrito al hacer click fuera
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isOpen])

    //state Derivado
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart])

    return (
        <header className={'bg-[url(/img/bg.jpg)] bg-center bg-cover'}>
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="img/logo.svg" alt="imagen logo" />
                    </div>
                </div>

                <div className="flex py-4 text-center gap-4 justify-center">
                    <Link to='/' className='font-bold p-2 text-white'>Inicio</Link>
                    <Link to='/processor' className='font-bold p-2 text-white'>Procesadores</Link>
                    <Link to='/rams' className='font-bold p-2 text-white'>Memorias Ram</Link>
                    <Link to='/gpu' className='font-bold p-2 text-white'>Gpu</Link>
                    <Link to='/psu' className='font-bold p-2 text-white'>Psu</Link>
                    <Link to='/storage' className='font-bold p-2 text-white'>Storage</Link>
                </div>

                <nav className="col-md-6 mt-5 flex justify-end">
                    <div 
                        className="relative group"
                        ref={cartRef} // referencia al contenedor del carrito
                        onMouseEnter={() => setIsOpen(true)} // hover en escritorio
                    >
                        {/* Icono del carrito */}
                        <img
                            className="max-h-7 cursor-pointer"
                            src="/img/carrito.png"
                            alt="imagen carrito"
                            onClick={() => setIsOpen(!isOpen)} // click en móvil
                        />

                        {/* Contenedor del carrito */}
                        <div
                            id="carrito"
                            className={`
                                absolute right-0 mt-2 w-125 bg-white p-3 rounded-lg shadow-lg 
                                transition-opacity duration-300
                                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} 
                                group-hover:opacity-100 group-hover:visible
                            `}
                            onMouseLeave={() => setIsOpen(false)} // hover en escritorio
                        >
                            {isEmpty ? (
                                <p className="p-2">El carrito esta vacio</p>
                            ) : (
                                <>
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
                                    <p className="text-end mt-2">
                                        Total pagar:{" "}
                                        <span className="font-bold">${cartTotal}</span>
                                    </p>

                                    <button
                                        className="bg-blue-500 hover:bg-blue-600 mt-3 w-full p-2 font-semibold text-white text-sm rounded-lg shadow-md transition-colors"
                                        onClick={() => dispatch({ type: "clear-cart" })}
                                    >
                                        Vaciar Carrito
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
