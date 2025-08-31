import { useMemo, useState, useRef, useEffect } from "react"
import type { Dispatch } from "react"
import type { CartItem } from "../types"
import type { CartActions } from "../reducers/cart-reducer"

import Tabs from "./Tabs"
import CartContent from "./CartContent"

type HeaderProps = {
    cart: CartItem[]
    dispatch: Dispatch<CartActions>
}

export function Header({ cart, dispatch }: HeaderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const cartRef = useRef<HTMLDivElement | null>(null)

    //state Derivado
    const isEmpty = useMemo(() => cart.length === 0, [cart])
    const cartTotal = useMemo(
        () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
        [cart]
    )

    const [isTouch, setIsTouch] = useState(false)

    useEffect(() => {
        const mq = window.matchMedia("(pointer: coarse)")
        setIsTouch(mq.matches)
        const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches)//esto detecta si el usuario conecta un mouse
        mq.addEventListener("change", handler)
        return () => mq.removeEventListener("change", handler)
    }, [])

    useEffect(() => {
        if (isEmpty) setIsOpen(false)
    }, [isEmpty])

    return (
        <header className="bg-[url(/img/bg.png)] bg-cover p-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex justify-center">
                    <div className="flex justify-center md:justify-start w-full sm: md:w-auto">
                        <img
                            className="w-56 max-w-full"
                            src="img/GameCoreLogo.png"
                            alt="imagen logo"
                        />
                    </div>
                </div>

                <button
                    className="md:hidden p-2 text-white text-2xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

                <nav className="hidden md:flex gap-4 items-center">
                    <Tabs />
                    <div
                        className="relative"
                        ref={cartRef}
                        onMouseEnter={!isTouch ? () => setIsOpen(true) : undefined}
                        onMouseLeave={!isTouch ? () => setIsOpen(false) : undefined}
                        onClick={isTouch ? () => setIsOpen((prev) => !prev) : undefined}
                    >
                        <img
                            className="max-h-7 cursor-pointer"
                            src="/img/carrito.png"
                            alt="imagen carrito"
                        />

                        <div
                            id="carrito"
                            className={`
                                absolute right-0 mt-2 w-125 bg-white p-3 rounded-lg shadow-lg 
                                transition-opacity duration-300
                                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} 
                            `}
                        >
                            <CartContent
                                cart={cart}
                                dispatch={dispatch}
                                cartTotal={cartTotal}
                                isEmpty={isEmpty}
                            />
                        </div>
                    </div>
                </nav>
            </div>

            {menuOpen && (
                <div className="md:hidden mt-4 bg-black/90 text-white p-4 rounded-lg shadow-lg animate-slideDown">
                    <Tabs />
                    <div className="mt-6 justify-center flex">
                        <img
                            className="max-h-7 cursor-pointer"
                            src="/img/carrito.png"
                            alt="imagen carrito"
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </div>
                </div>
            )}

            {isOpen && (
                <div className="md:hidden mt-4 bg-white p-3 rounded-lg shadow-lg animate-slideDown overflow-x-hidden">
                    <CartContent
                        cart={cart}
                        dispatch={dispatch}
                        cartTotal={cartTotal}
                        isEmpty={isEmpty}
                    />
                </div>
            )}
        </header>
    )
}
