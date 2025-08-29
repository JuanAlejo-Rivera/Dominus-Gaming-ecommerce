import { db } from "../data/db"
import type { CartItem, dbproducts, Product } from "../types"

export type CartActions =
    { type: 'add-to-cart', payload: { item: Product } } |
    { type: 'remove-from-cart', payload: { id: Product['id'] } } |
    { type: 'decrement-quantity', payload: { id: Product['id'] } } |
    { type: 'increase-quantity', payload: { id: Product['id'] } } |
    { type: 'clear-cart' }

export type CartState = {
    data: dbproducts
    cart: CartItem[]
}

//Local Storage
//estos son los datos que se guardan en el localStorage por eso necesita el cartItem
const initialCart = (): CartItem[] => {
    const localStorageCart = localStorage.getItem('cart')
    return localStorageCart ? JSON.parse(localStorageCart) : []
}

//esto se utiliza cuando usamos usereducer
export const initialState: CartState = {
    data: db,
    cart: initialCart()
}

export const max_item = 15;
const min_item = 1;


export const cartReducer = (
    state: CartState = initialState,
    action: CartActions
) => {

    if (action.type === "add-to-cart") {

        const itemExist = state.cart.find((guitar) => guitar.id === action.payload.item.id)

        let updateCart: CartItem[] = []
        if (itemExist) {
            updateCart = state.cart.map(item => {
                if (item.id === action.payload.item.id) {
                    if (item.quantity < max_item) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                } else {
                    return item
                }
            })

        } else {
            const newItem: CartItem = { ...action.payload.item, quantity: 1 }
            updateCart = ([...state.cart, newItem])
        }

        return {
            ...state,
            cart: updateCart

        }
    }
    if (action.type === "remove-from-cart") {

        const cart = state.cart.filter(item => item.id !== action.payload.id)

        return {
            ...state,
            cart
        }
    }
    if (action.type === "decrement-quantity") {

        const cart = state.cart.map(item => {
            if (item.id === action.payload.id && item.quantity > min_item) {
                return {
                    ...item, quantity: item.quantity - 1
                }
            }
            return item
        })

        return {
            ...state,
            cart
        }
    }
    if (action.type === "increase-quantity") {

        const updateCart = state.cart.map(item => {
            if (item.id === action.payload.id && item.quantity < max_item) {
                return {
                    ...item, quantity: item.quantity + 1
                }
            }
            return item
        })


        return {
            ...state,
            cart: updateCart
        }
    }
    if (action.type === "clear-cart") {

        return {
            ...state,
            cart: []
        }
    }
    return state

}