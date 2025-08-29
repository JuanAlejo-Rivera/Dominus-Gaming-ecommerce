import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { useEffect, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cart-reducer";

export default function AppLayout() {


  const [state, dispatch] = useReducer(cartReducer, initialState)
  console.log(state)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])


  return (
    <>
      <Header
        cart={state.cart}
        dispatch={dispatch}
      />

      <main>
        <Outlet context={{ dispatch, cart: state.cart }} />
      </main>

      <footer className="py-5 bg-gray-700">
        <p className="text-center text-white ">Todos los derechos reservados {new Date().getFullYear()} </p>
      </footer>
    </>
  )
}
