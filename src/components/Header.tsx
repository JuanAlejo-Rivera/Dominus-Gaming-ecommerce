import { useMemo, useState, useRef, useEffect } from "react"
import type { CartItem } from "../types"
import type { CartActions } from "../reducers/cart-reducer"
import type { Dispatch } from "react"
import Tabs from "./Tabs"
import QuantityRegulator from "./QuantityRegulator"

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
        <header className={'bg-[url(/img/bg.png)] bg-cover p-4 '}>
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex justify-center">
                    <div className="flex justify-center md:justify-start w-full sm: md:w-auto">
                        <img className="w-56 max-w-full" src="img/GameCoreLogo.png" alt="imagen logo" />
                    </div>
                </div>
                <nav className="flex justify-end">
                    <Tabs /> {/* Componente de pestañas */}
                    <div
                        className="relative group"
                        ref={cartRef}
                        onMouseEnter={() => setIsOpen(true)}
                    >
                        {/* Icono del carrito */}
                        <img
                            className="max-h-7 cursor-pointer"
                            src="/img/carrito.png"
                            alt="imagen carrito"
                            onClick={() => setIsOpen(!isOpen)}
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
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
